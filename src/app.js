feather.replace()

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