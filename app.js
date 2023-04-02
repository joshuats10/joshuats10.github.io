feather.replace()

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.onbeforeunload = function(){
    window.scrollTo(0,0);
}
 
const navbar = document.querySelector('.nav-area');
let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', function(){
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } 
    else {
        navbar.style.top = '-80px';
    }

    prevScrollPos = currentScrollPos;
});