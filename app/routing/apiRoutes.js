var friends = require("../data/friends.js");

module.exports = function (app) {
	// define the get api/friends route
	app.get("/api/friends", function (req, res) {
		res.json(friends);
	});

	// define the post api/friends route
	app.post("/api/friends", function (req, res) {

		var bestMatch = {
			name: "",
			photo: ""
		};

		var userScores = req.body.scores;
		var totalDifference = 0
		var friendDifference = 100
		var iFriendScore;
		var iUserScore;
		var friendName;
		var friendPhoto;

		friends.forEach((friend) => {
			iFriendScore = 0;
			iUserScore = 0;
			totalDifference = 0
			var scores = friend.scores;
			scores.forEach((friendScore) => {
				iFriendScore += parseInt(friendScore)
			});
			userScores.forEach((userScore) => {
				iUserScore += parseInt(userScore)
			});
			totalDifference += Math.abs(parseInt(iUserScore - parseInt(iFriendScore)));
			if (friendDifference > totalDifference) {
				friendDifference = totalDifference
				friendName = friend.name
				friendPhoto = friend.photo
			};
		});
		bestMatch.name = friendName;
		bestMatch.photo = friendPhoto;
		friends.push(req.body);
		res.json(bestMatch);
	});
};