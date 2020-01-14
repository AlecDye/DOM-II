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
// #3 --- Resize ---
const smallBus = document.querySelector('img');
window.addEventListener('resize', () => {
    smallBus.src = 'https://images.unsplash.com/photo-1569135218372-6f7f6f3d7e55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80';
});
// #4 --- Click ---
const buttonElement = document.querySelector('.btn');
buttonElement.addEventListener('click', (event) => {
    alert('You pressed the leftmost button!');
})
// #5 ---  ---