
//load to the top when refreshing
window.onbeforeunload = function() {
    window.scrollTo(0,0);
}

//onload animations
window.onload = function() {
    document.getElementById("welcome").classList.toggle("active");
    document.getElementById("home").classList.toggle("active");
}