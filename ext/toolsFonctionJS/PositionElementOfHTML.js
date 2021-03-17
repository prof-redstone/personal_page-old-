


function getPosition(element) //fonction pour avoir les coordonné x y d'un element dans la page
{
    var left = 0;
    var top = 0;
    var e = element;
    /*Tant que l'on a un élément parent*/
    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        /*On ajoute la position de l'élément parent*/
        left += e.offsetLeft + (e.clientLeft != null ? e.clientLeft : 0);
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        
        e = e.offsetParent;
    }
    return new Array(left,top);
}