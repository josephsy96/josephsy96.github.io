//On load animations
history.scrollRestoration = "manual";

window.onbeforeunload = function() {
    window.scrollTo(0,0); //on refresh the page starts at the top
}

//to rotate the hashtags
let text_rotation = function(el, rotation, period) {
    this.toRotate = rotation;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 700;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
}

//iteration for the hashtags
text_rotation.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let message = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = message.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = message.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 350 - Math.random() * 100;

    if(this.isDeleting) {delta /= 2};

    if(!this.isDeleting && this.txt === message) {
        delta = this.period;
        this.isDeleting= true;
    }
    else if(this.isDeleting && this.txt === '') {
        this.isDeleting = 0;
        this.loopNum++;
        delta = 400;
    }

    setTimeout(function(){
        that.tick();
    },delta);
}

//onload animations
window.onload = function() {
    // document.getElementById("motto").classList.toggle("active");

    let elements = document.getElementsByClassName("dif-text");

    for(let n = 0; n < elements.length; n++) {
        let newRotation = elements[n].getAttribute("data-rotate");
        let newPeriod = elements[n].getAttribute("data-rotate");
        if(newRotation) {
            new text_rotation(elements[n],JSON.parse(newRotation), newPeriod);
        }
    }
};