function checkInstance(){
	var nameClassObjectCanvas = "canvasclass" //insert the class's name of canvas elements
    if(document.getElementsByClassName(nameClassObjectCanvas).length > 0){ 
        var documentInstanceOfObject = document.getElementsByClassName(nameClassObjectCanvas)

        if(typeof instanceCanvasObject != "undefined"){      //Keep attention to change this name of variable
        }else{
            instanceCanvasObject = [] //Keep attention to change this name of variable
        }

        for(var i = 0; i < documentInstanceOfObject.length; i++){
            if(documentInstanceOfObject[i].dataset.target != "true"){ //pour detecter si a déjà était pris en compte si la boucle passe plusieur fois.
                documentInstanceOfObject[i].dataset.target = "true"
                if(documentInstanceOfObject[i].getAttribute("id") == null){
                    documentInstanceOfObject[i].setAttribute("id", "canvasObjectID" + i) //change the name of the ID attribute
                }
                instanceCanvasObject[i] = new canvasObject(i, documentInstanceOfObject[i].id) //Keep attention to change this name of variable ; and change the name of the new object
            }
        }
    }
}



function canvasObject(theNumberOfcanvasObjectInstance, IDcanvas){ //change the name of the object
    this.IntervalFrameTime;
    this.IDcanvas = IDcanvas;
    this.canvas;
    this.ctx;
    this.theNumberOfcanvasObjectInstance = theNumberOfcanvasObjectInstance;

    this.setup = function(){
        this.canvas = document.getElementById(this.IDcanvas);
        this.ctx = this.canvas.getContext("2d");
        
        this.IntervalFrameTime = setInterval(this.frame, 1000 , this.theNumberOfcanvasObjectInstance);
        
    }
    
    this.draw = function(){
        this.ctx.fillStyle = "#FFB6C1";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.fillStyle = "#000";
        this.ctx.fillText(this.theNumberOfcanvasObjectInstance,20,20);
    }

    this.frame = function(theNumberOfcanvasObjectInstance){ //pour le démarrage
        instanceCanvasObject[theNumberOfcanvasObjectInstance].draw();   //Keep attention to change this name of variable
    }
    
    this.setup();
}

checkInstance();