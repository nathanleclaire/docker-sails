/**
 * GistController
 *
 * @description :: Server-side logic for managing Gists
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var request = require('request');

 module.exports = {
 	for: function(req, res) {
        var username = req.query.username;
        console.log(username);
        request.get({
            url: 'https://api.github.com/users/'+username+'/gists', 
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'nathanleclaire\'s Glass Bead Game'
            }
        }, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
                res.send(body);
            }
        });
    },

    run: function(req, res) {
        
    }
};

