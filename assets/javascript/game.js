/**
 * Created by denisemayele on 14/05/2017.
 */



$(document).ready(function(){

//assign variables and arrays
    var randomNumber = 0;
    var booboo = "";
    var goku = "";
    var vegeta = "";
    var freezer = "";
    var wins = 0;
    var losses = 0;
    var numberArr = [];
    var userScore = 0;



    function assignVariables(){
        booboo = numberArr[0];
        goku = numberArr[1];
        vegeta = numberArr[2];
        freezer = numberArr[3];
        console.log(booboo);
        console.log(goku);
        console.log(vegeta);
        console.log(frezer);
    }

    assignVariables();

//add randomNumber to html #randomNumberComputer
    $('#randomNumberComputer').text(randomNumber);
    console.log(randomNumber);





    function newGame(){
        randomNumber = Math.floor(Math.random() * 120) + 19;
        userScore = 0;
        $('#randomNumberComputer').text(randomNumber);
        $('#totalScore').html('Your total score is: ' + userScore);
    }






    function createNumbers(){
        $('#resultWinLose').html('Wins: ' + wins  + '<br>Losses: ' + losses);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        userScore = 0;
        $('#user-score').html('Your total score is: ' + userScore);
        while(numberArr.length < 4){
            var randomnumberBand = Math.ceil(Math.random()*11) + 1;
            if(numberArr.indexOf(randomnumberBand) > -1)continue;
            numberArr.push(randomnumberBand);
        }
        console.log(numberArr);
    }

    createNumbers();

    function alertMe(){
        console.log("that worked");
    }







    $( "#booboo" ).click(function() {
        userScore = userScore + booboo;
        console.log(userScore);
        $('#userScore').html('Your total score is: ' + userScore);
        if (userScore === randomNumber) {
            wins++;
            $('#WinLo').html('Wins: ' + wins + '<br>Losses: ' + losses);
            console.log(wins);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            console.log(numberArr);
            alert("You win!");
        }
        else if (userScore >= randomNumber) {
            losses++;
            $('losses').text('Wins: ' + wins + 'Losses: ' + losses);
            console.log(losses);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            console.log(numberArr);
            alert("You lose!!");
        }
    });


    $( "#goku" ).click(function() {
        userScore = userScore + goku;
        console.log( userScore );
        $('#totalScore').html('Your total score is: ' + userScore);
        if (userScore === randomNumber) {
            wins++;
            $('#wins').text(wins);
            console.log(wins);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You win!");
        }
        else if (userScore >= randomNumber) {
            losses++;
            $('losses').text(losses);
            console.log(losses);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You lose!!");
        }
    });


    $( "#vegeta" ).click(function() {
        userScore = userScore + vegeta;
        console.log( userScore );
        $('#totalScore').html('Your total score is: ' + userScore);
        if (userScore === randomNumber) {
            wins++;
            $('#wins').text(wins);
            console.log(wins);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You win!");
        }
        else if (userScore >= randomNumber) {
            losses++;
            $('#losses').text(losses);
            console.log(losses);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You lose!!");
        }
    });


    $( "#freezer" ).click(function() {
        userScore = userScore + freezer;
        console.log( userScore );
        $('#userScore').html('Your total score is: ' + userScore);
        if (userScore === randomNumber) {
            wins++;
            $('#wins').text(wins);
            console.log(wins);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You win!");
        }
        else if (userScore >= randomNumber) {
            losses++;
            $('#losses').text(losses);
            console.log(losses);
            alertMe();
            numberArr = [];
            createNumbers();
            newGame();
            assignVariables();
            alert("You lose!!");
        }
    });




});



