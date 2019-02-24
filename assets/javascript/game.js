$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(random);


    var numOne = Math.floor(Math.random() * 11 + 1);
    var numTwo = Math.floor(Math.random() * 11 + 1);
    var numThree = Math.floor(Math.random() * 11 + 1);
    var numFour = Math.floor(Math.random() * 11 + 1);


    var userScore = 0;
    var wins = 0;
    var losses = 0;



    function reset() {
        numOne = Math.floor(Math.random() * 11 + 1);
        numTwo = Math.floor(Math.random() * 11 + 1);
        numThree = Math.floor(Math.random() * 11 + 1);
        numFour = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        random = Math.floor(Math.random() * 101 + 19);
        $('#randomNumber').text(random);
    }
    $("#crystalOne").click(function () {
        userScore = userScore + numOne;
        $("#userScore").text(userScore);
        if (userScore === random) {
            alert("You Win!");
            wins++;
            reset()
        } else if (userScore > random) {
            alert("You Lose!")
            losses++;
            reset()
        }
    })
    $("#crystalTwo").click(function () {
        userScore = userScore + numTwo;
        $("#userScore").text(userScore);
        if (userScore === random) {
            alert("You Win!");
            wins++;
            reset()
        } else if (userScore > random) {
            alert("You Lose!")
            losses++;
            reset()
        }
    })
    $("#crystalThree").click(function () {
        userScore = userScore + numThree;
        $("#userScore").text(userScore);
        if (userScore === random) {
            alert("You Win!");
            wins++;
            reset()
        } else if (userScore > random) {
            alert("You Lose!")
            losses++;
            reset()
        }
    })
    $("#crystalFour").click(function () {
        userScore = userScore + numFour;
        $("#userScore").text(userScore);
        if (userScore === random) {
            alert("You Win!");
            wins++;
            reset()
        } else if (userScore > random) {
            alert("You Lose!")
            losses++;
            reset()
        }
    })
    $("#winsText").text(wins)
    $("#lossText").text(losses)

})