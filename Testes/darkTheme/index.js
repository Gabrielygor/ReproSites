const themeBtn = document.getElementById('theme-btn');
const body = document.getElementById('body');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    console.log(body.classList);
});

console.log(body.classList);