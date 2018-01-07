let label = document.querySelector('label');

let gallery = document.querySelector('.slideshow');
let clickCounter=0;
let clickCounters=0;

let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");
let toggle3 = document.querySelector(".toggle3");
let toggle4 = document.querySelector(".toggle4");

let ew1 = document.querySelector('.ew1');
let ew2 = document.querySelector('.ew2');
let ew3 = document.querySelector('.ew3');
let ew4 = document.querySelector('.ew4');

label.addEventListener('click', goToMenu);

ew1.addEventListener('mouseenter', appearText);
ew1.addEventListener('mouseleave', disappearText);
ew2.addEventListener('mouseenter', appearText2);
ew2.addEventListener('mouseleave', disappearText2);
ew3.addEventListener('mouseenter', appearText3);
ew3.addEventListener('mouseleave', disappearText3);
ew4.addEventListener('mouseenter', appearText4);
ew4.addEventListener('mouseleave', disappearText4);

let opening = document.querySelector('.animateMe')
let opening2 = document.querySelector('.animateMe2')
let openingName = document.querySelector('.openingName')
let vwidth = (window.matchMedia("(min-width: 801px)"));
console.log(vwidth);

if(vwidth == false){
    ew1.style.opacity = ".5"
    toggle.style.opacity = "1"
    ew2.style.opacity = ".5"
    toggle2.style.opacity = "1"
    ew3.style.opacity = ".5"
    toggle3.style.opacity = "1"
    ew4.style.opacity = ".5"
    toggle4.style.opacity = "1"

}


function goToMenu() {
    window.location.href = 'menu.html'
}

 function appearText() {

    toggle.addEventListener('mouseenter', appearTextyeah);
    toggle.addEventListener('mouseleave', appearTextnope);
    toggle.style.opacity = "1"
    ew1.style.opacity = ".5"

    function appearTextyeah() {
        toggle.style.opacity = "1"
        ew1.style.opacity = ".5"
    }

    function appearTextnope() {
        toggle.style.opacity = "1"

    }




}

function disappearText() {
    toggle.style.opacity = "0"
     ew1.style.opacity = "1"

    ew1.setAttribute('src', 'images/rw_01.png');

}
function appearText2() {
    toggle2.addEventListener('mouseenter', appearTextyeah);
    toggle2.addEventListener('mouseleave', appearTextnope);
    toggle2.style.opacity = "1"
    ew2.style.opacity = ".5"

    function appearTextyeah() {
        toggle2.style.opacity = "1"
        ew2.style.opacity = ".5"
    }

    function appearTextnope() {
        toggle2.style.opacity = "1"

    }

}

function disappearText2() {
    toggle2.style.opacity = "0"
     ew2.style.opacity = "1"

}
function appearText3() {
    toggle3.addEventListener('mouseenter', appearTextyeah);
    toggle3.addEventListener('mouseleave', appearTextnope);
    toggle3.style.opacity = "1"
    ew3.style.opacity = ".5"

    function appearTextyeah() {
        toggle3.style.opacity = "1"
        ew3.style.opacity = ".5"
    }

    function appearTextnope() {
        toggle3.style.opacity = "1"

    }

}

function disappearText3() {
    toggle3.style.opacity = "0"
     ew3.style.opacity = "1"

}
function appearText4() {
    toggle4.addEventListener('mouseenter', appearTextyeah);
    toggle4.addEventListener('mouseleave', appearTextnope);
    toggle4.style.opacity = "1"
    ew4.style.opacity = ".5"

    function appearTextyeah() {
        toggle4.style.opacity = "1"
        ew4.style.opacity = ".5"
    }

    function appearTextnope() {
        toggle4.style.opacity = "1"

    }

}

function disappearText4() {
    toggle4.style.opacity = "0"
     ew4.style.opacity = "1"

}
