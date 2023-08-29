const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


var inp=document.getElementById("inp");
inp.addEventListener("click",() => {

	setTimeout(() => {
        const nam= document.getElementById("nam").value=""
        const ema= document.getElementById("ema").value=""
        const sub= document.getElementById("sub").value=""
        const tex= document.getElementById("tex").value=""
    }, 50);


})