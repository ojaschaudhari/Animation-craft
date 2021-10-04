function myfunc() {

    var theme = document.getElementsByTagName('link')[0];

    if(theme.getAttribute('href') == "../css/gallery1.css") {
        theme.setAttribute('href', "../css/gallery2.css");
        document.getElementById("button").innerHTML = "Horiizontal Gallery";
    }
    else {
        theme.setAttribute('href', "../css/gallery1.css");
        document.getElementById("button").innerHTML = "Vertical Gallery";
    }
}