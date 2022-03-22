const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbar-dark');
    }
    else {
        header.classList.remove('navbar-dark');
    }
}