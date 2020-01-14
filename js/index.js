// Your code goes here

// #1 - Click (1st button)
const popUp = document.querySelector('.btn');
popUp.addEventListener('click', event => {
    alert('WHY ARE YOU PRESSING MY BUTTONS?')
});
// #2 Mouse Enter (1st feature image)
const hoverChange = document.querySelector('.img-content img');
hoverChange.addEventListener('mouseenter', () => {
    hoverChange.src = 'https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
    hoverChange.style.transition = 'transform 0.3s';
})
// #3 Mouse Leave (1st feature image)
hoverChange.addEventListener('mouseleave', () => {
    hoverChange.src = 'https://images.unsplash.com/photo-1563903260263-065d1c592e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=811&q=80';
    hoverChange.style.transition = 'transform 0.3s';
});
// #4 Mouse Over (footer)
const mouseOver = document.querySelector('.footer');
mouseOver.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
    // reset timer
    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 500);
}, false);
// #5 Double Click (2nd feature image)
const changeImg = document.querySelector('.img-fluid');
changeImg.addEventListener('dblclick', () => {
    changeImg.src = 'https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=814&q=80'
});
// #6 Context Menu (1st paragraph)
const noContext = document.querySelector('p');
noContext.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
// #7 Copy (heading under banner)
const colorCopy = document.querySelector('h2');
colorCopy.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
})
// #8 Mouse Up (all buttons)
const buttonSize = document.querySelectorAll(".btn").forEach(e => {
    e.addEventListener("mouseup", () => {
        e.style.transform = 'scale(2)';
    })
});
// #9 Mouse Down & Stop Propagation
const body = document.querySelector('body');
body.addEventListener('mousedown', () => {
    body.style.backgroundColor = 'green';
})

const header = document.querySelector('header');
header.addEventListener('mousedown', () => {
    header.style.backgroundColor = 'red';
    event.stopPropagation();
})
// #10 Resize (banner image)
const newBanner = document.querySelector('img');
window.addEventListener('resize', () => {
    newBanner.src = 'https://images.unsplash.com/photo-1465172018141-c4e4fa823289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});
