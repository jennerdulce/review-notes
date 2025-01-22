const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; 


// Targeting the image element

// Query Selector
// document.querySelector('img')
// const zedImage = document.querySelector('img');

// Get Element by ID
// document.querySelector('img')
const zedHero = document.getElementById('hero-image');
const zedImageA = document.getElementById('zed-1');
const zedImageB = document.getElementById('zed-2');

// Add Event Listener
// Method 1 - .onclick
// zedImage.onclick = function() {
//     const mySrc = zedImage.getAttribute('src');
//     if(mySrc === 'img/zed1.png') {
//       zedImage.setAttribute('src', 'img/zed2.png');
//     } else {
//       zedImage.setAttribute('src', 'img/zed1.png');
//     }
// }

// Method 2 - .addEventListener w/ arrow function
zedHero.addEventListener("click", () => {
    const mySrc = zedHero.getAttribute('src');
    if (mySrc === "img/zedx.png") {
        zedHero.setAttribute('src', 'img/zedx-modified.png');
    } else {
        zedHero.setAttribute('src', 'img/zedx.png');
    }
})

zedImageA.addEventListener("click", () => {
    const mySrc = zedImageA.getAttribute('src');
    if (mySrc === "img/zed1.png") {
        zedImageA.setAttribute('src', 'img/zed1-modified.png');
    } else {
        zedImageA.setAttribute('src', 'img/zed1.png');
    }
})

zedImageB.addEventListener("click", () => {
    const mySrc = zedImageB.getAttribute('src');
    if (mySrc === "img/zed2.png") {
        zedImageB.setAttribute('src', 'img/zed2-modified.png');
    } else {
        zedImageB.setAttribute('src', 'img/zed2.png');
    }
})