/**
* RunController
*
* @description :: Server-side logic for managing Runs
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

var request, Docker, containerToStreamMap;
request = require('request');
Docker = require('dockerode');

containerToStreamMap = {};

module.exports = {
    _config: {
        actions: false,
        rest: false,
        shortcuts: false
    },

    connectStream: function(req, res) {
        res.pipe(containerToStreamMap[req.param('id')]);
    },

    stream: function(req, res) {
        res.view('streamrun', {
            id: req.param('id')
        });
    },

    trigger: function(req, res) {
        var gistId, containerId, languageToImageMap, docker, socket, that;

        that = this;

        socket = req.socket;

        docker = new Docker({
            socketPath: '/var/run/docker.sock'
        });

        // This defines the mapping from the Github API's "language" key
        // to the name of the Docker image that will be used to run 
        languageToImageMap = {
            'Python': 'nathanleclaire/gbg-python',
            'C':      'nathanleclaire/gbg-gcc',
            'Ruby':   'nathanleclaire/gbg-ruby',
            'Java':   'nathanleclaire/gbg-java',
            'Go':     'nathanleclaire/gbg-golang',
            'Node':   'nathanleclaire/gbg-node',
        }

        gistId = req.body.gistUrl.split('/').pop();
        request.get({
            url: 'https://api.github.com/gists/'+gistId, 
            json: true,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'nathanleclaire\'s Glass Bead Game'
            }
        }, function(error, response, body) {
            var language, imageName, file, fileName;
            if (!error && response.statusCode === 200) {

                // just get the first one (only single-file Gists for now)
                for (fileName in body.files) { 
                    break; 
                }
                file = body.files[fileName];
                
                imageName = languageToImageMap[file.language];
                
                docker.createContainer({
                    Tty: true,
                    Image: imageName,
                    Env: [
                        'FILE_URL=' + file.raw_url
                    ],
                    Cmd: []
                }, function(err, container) {
                    var containerId;
                    containerId = container.id;
                    container.attach({
                        stream: true, 
                        stdout: true, 
                        stderr: true
                    }, function (err, stream) {
                        if (err) console.log(err);
                        containerToStreamMap[containerId] = stream;
                        container.start(function(err, data) {
                            container.wait(function(err, data) {
                                if (err) console.log(err);
                                console.log(data);
                                res.redirect('/run/stream/'+containerId);
                            })
                        });
                    });
                });
            }
        });
    }
};