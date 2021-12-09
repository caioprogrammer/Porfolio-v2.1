let scrollToTop = document.querySelector('.footer__to-top');

scrollToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})