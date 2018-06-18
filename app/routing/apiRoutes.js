var friends = require('../data/friends.js');

module.exports = function(app) {
  // define the get api/friends route
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  // define the post api/friends route
  app.post('/api/friends', function(req, res) {
  	var bestMatch = {
  		name: "",
  		photo: ""
  	};
    
  	// var userScores = req.body.scores;
  	var totalDifference;

  	for (var i = 0; i < friends.length; i++) {
  		totalDifference = 0;

  		for (var j = 0; j < friends[i].scores[j]; j++) {
  			// totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
  				bestMatch.name = friends[i].name;
  				bestMatch.photo = friends[i].photo;
  		}
		}
		console.log(req.body + "does it log the body here?")
  	res.json(bestMatch);
  	
  });
};