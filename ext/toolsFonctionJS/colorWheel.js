function colorWheel(hue, saturation, darkness, alpha){
    /*
    hue :
    0 : red
    1 : yellow
    2 : green
    3 : cyan
    4 : blue
    5 : purple
    6 : red
    hue  0 == 6   6 is one cycle rotation
    
    saturation [0;100]
    darkness [0;100]
    alpha [0;1]
    
    */

    var red  
    var green 
    var blue  
    
    hue = hue % 6;

    if(hue >= 0 && hue < 1){
        red = 255
        green = hue * 255
        blue = 0;
    }else if (hue >= 1 && hue < 2){
        green = 255
        red = 255 - ((hue - 1) * 255)
        blue = 0;
    }else if (hue >= 2 && hue < 3){
        green = 255
        blue = (hue - 2) * 255
        red = 0;
    }else if (hue >= 3 && hue < 4){
        blue = 255
        green = 255 - ((hue - 3) * 255)
        red = 0;
    }else if (hue >= 4 && hue < 5){
        blue = 255
        red = (hue - 4) * 255
        green = 0;
    }else if (hue >= 5 && hue < 6){
        red = 255
        blue = 255 - ((hue - 5) * 255)
        green = 0;
    }
    
    var sat = saturation / 100;
    red = red + (255 - red)*sat;
    green = green + (255 - green)*sat;
    blue = blue + (255 - blue)*sat;
    
    var dark = (100-darkness) / 100;
    red = red * dark
    green = green * dark;
    blue = blue * dark;
    
    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
}