const navEl= document.querySelector('.navbar,.header-bg');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
    }else if (window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled');
    }
});