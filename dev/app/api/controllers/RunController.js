/**
 * RunController
 *
 * @description :: Server-side logic for managing Runs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {
 	_config: {
 		actions: false,
 		rest: false,
 		shortcuts: false
 	},

 	stream: function(req, res) {
 		res.view('streamrun');
 	},

 	trigger: function(req, res) {

 	}
 };

