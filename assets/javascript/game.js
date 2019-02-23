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

    $("#winsText").append(wins)
    $("#lossText").append(losses)

    function reset() {
        numOne = Math.floor(Math.random() * 11 + 1);
        numTwo = Math.floor(Math.random() * 11 + 1);
        numThree = Math.floor(Math.random() * 11 + 1);
        numFour = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
    }
    $("#crystalOne").click(function(){
        
    })

})