let canvas = document.getElementById("grassSimulation")
let ctx = canvas.getContext("2d")
let Interval;

let lastUpdate = Date.now();
let deltaTime = 0.5;

let mouseX = null

let nbBrand = 600

function UpdateDelteTime() {
    let now = Date.now()
    let dt = (now - lastUpdate) / 40
    lastUpdate = now
    return Math.min(dt, 2.5)
}

class StrandGrass {
    constructor(x, y, length, size, color) {
        this.x = x;
        this.y = y;
        this.length = length || 100;
        this.size = size || 10;
        this.hue = nb_random(170, 200) / 100;
        this.sat = nb_random(100, 300) / 10
        this.darkness = nb_random(420, 490) / 10
        this.color;
        this.curve = nb_random(-100, 100) / 1000 //original shape
        this.nbPiece = 6;
        this.lenPart = this.length / this.nbPiece
        this.flex = nb_random(50, 150) / 100 //flexibility

        this.angle = Math.PI / 2 //to start stable 
        this.vel = 0; //velocity
        this.wind = 0;

    }
    Update() {

        this.vel += (Math.PI / 2 - this.angle) / 40 + this.wind * this.flex
        this.vel *= 0.99
        this.vel = Math.max(Math.min(this.vel, 0.2), -0.2)
        this.angle += ((Math.PI / 2 - this.angle) * deltaTime / 10) + this.vel

    }
    Draw() {
        this.partX = this.x;
        this.partY = this.y;
        this.parAng = 0;
        this.EndX = 0;
        this.EndY = 0;

        ctx.strokeStyle = colorWheel(this.hue, this.sat, this.darkness, 1);
        for (let i = 0; i < this.nbPiece; i++) {
            this.EndX = Math.round(Math.cos(this.parAng + this.angle + this.curve + Math.PI) * this.lenPart);
            this.EndY = Math.round(Math.sin(this.parAng + this.angle + this.curve + Math.PI) * this.lenPart);

            ctx.lineWidth = this.size + -1.5 * i
            ctx.beginPath();
            ctx.moveTo(this.partX, this.partY);
            ctx.lineTo(this.partX + this.EndX, this.partY + this.EndY);
            ctx.stroke();

            this.partX = this.partX + this.EndX;
            this.partY = this.partY + this.EndY;
            this.parAng = this.parAng + this.angle + this.curve - Math.PI / 2
        }

    }
}


var brand = []
console.log(brand)

function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < nbBrand; i++) {
        brand.push(new StrandGrass(nb_random(-20, canvas.width + 20), canvas.height, nb_random(250, 350)))
    }

    Interval = setInterval(() => {
        loop()
    }, 20)

}

function loop() {
    deltaTime = UpdateDelteTime()
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < brand.length; i++) {
        brand[i].Update()
        brand[i].Draw()

        brand[i].wind *= 0.9
    }
}
canvas.addEventListener('mousemove', e => {
    let diff = (mouseX - e.clientX);
    mouseX = e.clientX;

    for (let i = 0; i < brand.length; i++) {
        if ((mouseX - diff <= brand[i].x+100 && brand[i].x-100 <= mouseX)) {
            brand[i].wind = 0.0005 * Math.round(Math.sqrt(diff * Math.sign(diff)) || 0) * Math.sign(diff)*-1
        } 
    }
});

function nb_random(min, max) { //fonction générant un nombre aléatoire entier min et max inclue [min;max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorWheel(hue, saturation, darkness, alpha) {
    var red
    var green
    var blue

    hue = hue % 6;

    if (hue >= 0 && hue < 1) {
        red = 255
        green = hue * 255
        blue = 0;
    } else if (hue >= 1 && hue < 2) {
        green = 255
        red = 255 - ((hue - 1) * 255)
        blue = 0;
    } else if (hue >= 2 && hue < 3) {
        green = 255
        blue = (hue - 2) * 255
        red = 0;
    } else if (hue >= 3 && hue < 4) {
        blue = 255
        green = 255 - ((hue - 3) * 255)
        red = 0;
    } else if (hue >= 4 && hue < 5) {
        blue = 255
        red = (hue - 4) * 255
        green = 0;
    } else if (hue >= 5 && hue < 6) {
        red = 255
        blue = 255 - ((hue - 5) * 255)
        green = 0;
    }

    var sat = saturation / 100;
    red = red + (255 - red) * sat;
    green = green + (255 - green) * sat;
    blue = blue + (255 - blue) * sat;

    var dark = (100 - darkness) / 100;
    red = red * dark
    green = green * dark;
    blue = blue * dark;

    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}


setup()