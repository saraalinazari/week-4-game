

var game = {
    wins: 0,
    losses: 0,
    totalScore: 0,
    computerRandGuess:0,
    randDiamondArr: [],

    makeComputerGuess: function(){
        this.computerRandGuess = Math.floor((Math.random()*102)+19);
       
    },

    makeDiamondsGuess: function(){
        var i=0;
        for(i=0;i<4;i++){
            var randomdiamond = Math.floor((Math.random()*12)+1);
            this.randDiamondArr.push(randomdiamond);
        }
    },

    startSet: function(){
        game.makeComputerGuess();
        console.log(this.computerRandGuess);
        $("#computerGuess").text(this.computerRandGuess);
        game.makeDiamondsGuess();
        $("#button-1").val(this.randDiamondArr[0]);
        console.log("button-1: "+this.randDiamondArr[0]);
        $("#button-2").val(this.randDiamondArr[1]);
        console.log("button-2: "+this.randDiamondArr[1]);
        $("#button-3").val(this.randDiamondArr[2]);
        console.log("button-3: "+this.randDiamondArr[2]);
        $("#button-4").val(this.randDiamondArr[3]);
        console.log("button-4: "+this.randDiamondArr[3]);

    },


     increaseTotalScore: function(btnval){
        this.totalScore = this.totalScore+parseInt(btnval);
        console.log("this.totalScore: "+this.totalScore );
        console.log(" this.computerRandGuess: "+this.computerRandGuess); 
        if(this.totalScore <this.computerRandGuess){
            $("#totalScore").text(this.totalScore);
        }
        if(this.totalScore == this.computerRandGuess)
        {
            this.wins= this.wins +1;
            $("#setResult").text("You won!");
            $("#wins").text(this.wins);
            $("#losses").text(this.losses);
            this.totalScore=0;
            $("#totalScore").text("");
            this.randDiamondArr=[];
            game.startSet();
        }
        if(this.totalScore > this.computerRandGuess)
        {
            this.losses= this.losses +1;
            $("#setResult").text("You Lost!");
            $("#losses").text(this.losses);
            $("#wins").text(this.wins);
            this.totalScore=0;
            $("#totalScore").text("");
            this.randDiamondArr=[];
            game.startSet();
        }
        
    }

    
    
};
 //game.startSet();
    $(document).ready(function(){
       game.startSet();
       $("button").on("click", function(){
            console.log("before function: "+$(this).val());
            game.increaseTotalScore($(this).val());
       })
    });
