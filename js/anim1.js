function myfunc1() {

    var theme = document.getElementsByTagName('link')[1];

    if(theme.getAttribute('href') == "../css/anim1.css") {
        theme.setAttribute('href', "../css/anim2.css");
        document.getElementById("button1").innerHTML = "BOTTOM TO TOP";
    }
    else {
        theme.setAttribute('href', "../css/anim1.css");
        document.getElementById("button1").innerHTML = "LEFT TO RIGHT";
    }
}

function myfunc2() {

    var theme = document.getElementsByTagName('link')[1];

    if((theme.getAttribute('href') == "../css/anim1.css") || 
        (theme.getAttribute('href') == "../css/anim2.css") || 
        (theme.getAttribute('href') == "../css/anim4.css")) 
    {
        theme.setAttribute('href', "../css/anim3.css");
        document.getElementById("button2").innerHTML = "TOP TO BOTTOM";
    }
    else {
        theme.setAttribute('href', "../css/anim4.css");
        document.getElementById("button2").innerHTML = "RIGHT TO LEFT";
    }
}
