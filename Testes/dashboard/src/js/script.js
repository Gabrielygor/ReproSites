
//  dark and ligth theme function
const body = document.getElementById('body');
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})