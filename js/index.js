// Your code goes here
// #1 --- Double Click ---
const changeImg = document.querySelector('.img-fluid');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
});
// #2 --- Mouse Over ---
const mouseOver = document.querySelector('.footer');
mouseOver.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
    // reset timer
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 500);
}, false);
// #3 ---  ---