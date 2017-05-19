    /**
     * Created by denisemayele on 14/05/2017.
     */



    $(document).ready(function() {


        var randomNumber = 0;
        var booboo = "";
        var goku = "";
        var vegeta = "";
        var freezer = "";
        var wins = 0;
        var losses = 0;
        var numberArr = [];
        var userScore = 0;


        function createNumbers(){
            $("#WinLo").html('Wins: ' + wins  + '<br>Losses: ' + losses);
            randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            userScore = 0;
            $("#totalScore").html('Your total score is: ' + userScore);
            while(numberArr.length < 4){
                var randomnumberDBZ = Math.ceil(Math.random()*11) + 1;
                if(numberArr.indexOf(randomnumberDBZ) > -1)continue;
                numberArr.push(randomnumberDBZ);
            }
            console.log(numberArr);
        }

        createNumbers();

        function alertMe(){
        console.log("Yeeaaaahhhh!! It's Working!! ");
     }


        function assignVariables(){
            booboo = numberArr[0];
            goku = numberArr[1];
            vegeta = numberArr[2];
            freezer = numberArr[3];
            console.log(booboo);
            console.log(goku);
            console.log(vegeta);
            console.log(freezer);
    }

        assignVariables();








        function newGame(){
            randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            userScore = 0;
            $("#numberComputer").text(randomNumber);
            $("#totalScore").html('Your total score is: ' + userScore);
        }



        

        $("#booboo").click(function() {
            userScore = userScore + booboo;
            console.log(userScore);
            $('#totalScore').html('Your total score is: ' + userScore);
            if (userScore === randomNumber) {
                wins++;
                $('#WinLo').html('wins: ' + wins + '<br>losses: ' + losses);
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
                $('losses').text('wins: ' + wins + 'losses: ' + losses);
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


        $("#goku").click(function() {
            userScore = userScore + goku;
            console.log(userScore);
            $('#totalScore').html('Your total score is: ' + userScore);
            if (userScore === randomNumber) {
                wins++;
                $("#WinLo").text(wins);
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


        $("#vegeta").click(function() {
            userScore = userScore + vegeta;
            console.log(userScore);
            $('#totalScore').html('Your total score is: ' + userScore);
            if (userScore === randomNumber) {
                wins++;
                $('#WinLo').text(wins);
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


        $("#freezer").click(function() {
            userScore = userScore + freezer;
            console.log(userScore);
            $('#totalScore').html('Your total score is: ' + userScore);
            if (userScore === randomNumber) {
                wins++;
                $('#WinLo').text(wins);
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

    });



