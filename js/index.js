// Your code goes here

// Mouse Events
// #1 - Click
const popUp = document.querySelector('.btn');
popUp.addEventListener('click', event => {
    alert('WHY ARE YOU PRESSING MY BUTTONS?')
});
// #2 Mouse Enter
const hoverChange = document.querySelector('.img-content img');
hoverChange.addEventListener('mouseenter', () => {
    hoverChange.src = 'https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
    hoverChange.style.transition = 'transform 0.3s';
})
// #3 Mouse Leave
hoverChange.addEventListener('mouseleave', () => {
    hoverChange.src = 'https://images.unsplash.com/photo-1563903260263-065d1c592e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80';
    hoverChange.style.transition = 'transform 0.3s';
});
// #4 Mouse Over
const mouseOver = document.querySelector('.footer');
mouseOver.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
    // reset timer
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 500);
}, false);
// #5 Double Click
const changeImg = document.querySelector('.img-fluid');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80'
});
// #6 Context Menu
const noContext = document.querySelector('p');
noContext.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
// #7 Copy
const colorCopy = document.querySelector('h2');
colorCopy.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
})
// #8

// #10 Resize
const newBanner = document.querySelector('img');
window.addEventListener('resize', () => {
    newBanner.src = 'https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});
