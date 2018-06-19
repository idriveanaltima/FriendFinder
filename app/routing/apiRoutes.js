var friends = require("../data/friends.js");

module.exports = function(app) {
  // define the get api/friends route
  app.get("/api/friends", function(req, res) {
      res.json(friends);
  });

  // define the post api/friends route
  app.post("/api/friends", function(req, res) {
		
		var bestMatch = {
  		name: "",
  		photo: ""
  	};
    
  	var userScores = req.body.scores;
  	var totalDifference = 0
		
		friends.forEach( (friend) => {
				console.log(friend.scores + "array of scores")
				var scores = friend.scores
				scores.forEach((friendScore) => {
					console.log(friendScore + "Individual Score")
				userScores.forEach ( (userScore) => {
					console.log(userScore + "score of entered user")
					totalDifference += Math.abs(parseInt(userScore - parseInt(friendScore)));
					console.log(totalDifference)
  				bestMatch.name = friend.name;
  				bestMatch.photo = friend.photo;
				});
			})
		});
		res.json(bestMatch);
	});
};

