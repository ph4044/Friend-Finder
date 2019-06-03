var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.post("/api/friends", function (req, res) {
    //setting an initial closestFriend with beyond maximum totalDifference (for finding closest matching friend).
    var closestFriend = {
      name: friends[0].name,
      photo: friends[0].photo,
      totalDifference: "1000",
    };

    // console.log("closestFriend" + closestFriend.name + " " + closestFriend.photo);
    // console.log(req.body.scores[0]);

    // totalDifference is the difference in sum between closestFriend and new entry.
    // differenceCalc is the difference in sum between candidate friend and new entry.
    var differenceCalc;

    // Loop through all the friends in the API.
    for (var i = 0; i < friends.length; i++) {

      differenceCalc = 0;
      var candidateTotal = 0;
      var userTotal = 0;

      // For each friend in API, loop through their scores and scores of the new entry.
      for (var j = 0; j < 10; j++) {
        candidateTotal += parseInt(friends[i].scores[j]);
        userTotal += parseInt(req.body.scores[j]);
        console.log(userTotal);
      }

      // Calculate the absolute value of the difference in totals.  If new friend is closer than closest, then replace closest.
      differenceCalc = Math.abs(candidateTotal - userTotal);
      console.log("i=" + i + ": diff total = " + differenceCalc);

      if (differenceCalc < closestFriend.totalDifference) {
        closestFriend.name = friends[i].name;
        closestFriend.photo = friends[i].photo;
        closestFriend.totalDifference = differenceCalc;
        console.log(closestFriend.name + ", " + closestFriend.photo + ", " + closestFriend.totalDifference);
      }
    }

    // Send closestFriend in ther response.
    res.json(closestFriend);

    // Push to the friends.js API.
    friends.push(req.body);

  });

  // Supply contents, in JSON, of the Friends API.
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

};
