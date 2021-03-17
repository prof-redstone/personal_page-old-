var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var tailleCase = 100;
var tableau = new RubikCube3C();

setup();

function setup(){
    canvas = document.getElementById("Rubik");
    ctx = canvas.getContext("2d");
    button1 = document.getElementById("1");
    button2 = document.getElementById("2");
    button3 = document.getElementById("3");
    button4 = document.getElementById("4");
    button5 = document.getElementById("5");
    button6 = document.getElementById("6");
    setInterval(draw, 25);
}

function draw(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    tableau.show();
}

function RubikCube3C(){
    this.gride = [["1","2","3"],
                  ["4","5","6"],
                  ["7","8","9"]];

    this.grideColor = [["#F00","#F5F","#30F"],
                       ["#FA0","#888","#0AF"],
                       ["#FF0","#0F0","#0FF"]];


    this.show = function(){
        for(var y=0; y<3 ;y++){
            for(var x=0; x<3 ;x++){
                ctx.fillStyle = this.grideColor[y][x];
                ctx.fillRect(x*tailleCase,y*tailleCase,tailleCase,tailleCase);
                ctx.fillStyle = "#000"
                ctx.font = '48px sans-serif';
                ctx.fillText(this.gride[y][x], x*tailleCase+tailleCase/2, (y*tailleCase+tailleCase)-tailleCase/2)
            }
            /*ctx.fillStyle = "#" + i + "" + i + "" + i;
            ctx.fillRect(i*tailleCase,i*tailleCase,tailleCase,tailleCase);*/
        }
    }

    this.move = function(move){
        if(move == 1){
            var temp
            temp = this.gride[0][0];
            this.gride[0][0] = this.gride[1][0];
            this.gride[1][0] = this.gride[2][0];
            this.gride[2][0] = temp;
        }
        if(move == 2){
            var temp
            temp = this.gride[0][1];
            this.gride[0][1] = this.gride[1][1];
            this.gride[1][1] = this.gride[2][1];
            this.gride[2][1] = temp;
        }
        if(move == 3){
            var temp
            temp = this.gride[0][2];
            this.gride[0][2] = this.gride[1][2];
            this.gride[1][2] = this.gride[2][2];
            this.gride[2][2] = temp;
        }
        if(move == 4){
            var temp
            temp = this.gride[0][0];
            this.gride[0][0] = this.gride[0][1];
            this.gride[0][1] = this.gride[0][2];
            this.gride[0][2] = temp;
        }
        if(move == 5){
            var temp
            temp = this.gride[1][0];
            this.gride[1][0] = this.gride[1][1];
            this.gride[1][1] = this.gride[1][2];
            this.gride[1][2] = temp;
        }
        if(move == 6){
            var temp
            temp = this.gride[2][0];
            this.gride[2][0] = this.gride[2][1];
            this.gride[2][1] = this.gride[2][2];
            this.gride[2][2] = temp;
        }
        if(move == 1){ //pour les couleur de font
            var temp
            temp = this.grideColor[0][0];
            this.grideColor[0][0] = this.grideColor[1][0];
            this.grideColor[1][0] = this.grideColor[2][0];
            this.grideColor[2][0] = temp;
        }
        if(move == 2){
            var temp
            temp = this.grideColor[0][1];
            this.grideColor[0][1] = this.grideColor[1][1];
            this.grideColor[1][1] = this.grideColor[2][1];
            this.grideColor[2][1] = temp;
        }
        if(move == 3){
            var temp
            temp = this.grideColor[0][2];
            this.grideColor[0][2] = this.grideColor[1][2];
            this.grideColor[1][2] = this.grideColor[2][2];
            this.grideColor[2][2] = temp;
        }
        if(move == 4){
            var temp
            temp = this.grideColor[0][0];
            this.grideColor[0][0] = this.grideColor[0][1];
            this.grideColor[0][1] = this.grideColor[0][2];
            this.grideColor[0][2] = temp;
        }
        if(move == 5){
            var temp
            temp = this.grideColor[1][0];
            this.grideColor[1][0] = this.grideColor[1][1];
            this.grideColor[1][1] = this.grideColor[1][2];
            this.grideColor[1][2] = temp;
        }
        if(move == 6){
            var temp
            temp = this.grideColor[2][0];
            this.grideColor[2][0] = this.grideColor[2][1];
            this.grideColor[2][1] = this.grideColor[2][2];
            this.grideColor[2][2] = temp;
        }
    }
    
}

function button(value){
    if(value == 1){
        tableau.move(1);
    }
    if(value == 2){
        tableau.move(2);
    }
    if(value == 3){
        tableau.move(3);
    }
    if(value == 4){
        tableau.move(4);
    }
    if(value == 5){
        tableau.move(5);
    }
    if(value == 6){
        tableau.move(6);
    }
}

function randomise(){
    for(var i = 0;i<30;i++){
        tableau.move(nb_random(1,6))
    }
}

function nb_random(min, max){ //fonction générant un nobre aléatoir  min et max inclue
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}