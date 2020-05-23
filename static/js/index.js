//load to the top when refreshing
window.onbeforeunload = function() {
    window.scrollTo(0,0);
}

//to animate text
let text_rotation = function(el, rotation, period) {
    this.toRotate = rotation;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 700;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

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
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {delta /= 2};
    
    if(!this.isDeleting && this.txt === message) {
        delta = this.period;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === '') {
        this.isDeleting = 0;
        this.loopNum++;
        delta = 400;
    }

    setTimeout(function(){
        that.tick();
    }, delta);
};

//Onload animations
window.onload = function() {

    // document.getElementById("open-text").classList.toggle('active');
    
    let elements = document.getElementsByClassName("dif-text");
 
    for (let n = 0; n < elements.length; n++) {
        let newRotation = elements[n].getAttribute("data-rotate");
        let newPeriod = elements[n].getAttribute("data-rotate");
        if(newRotation) {
            new text_rotation(elements[n], JSON.parse(newRotation),newPeriod);
        }
    }
    //animate "Photo" box
    document.getElementById("box").classList.toggle('active');
    this.document.getElementById("line").classList.toggle('active');
};