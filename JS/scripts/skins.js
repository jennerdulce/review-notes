const bmDisplay = document.getElementById('bm-display');
const bmChroma = document.querySelectorAll('.bm-chroma');
console.log('chroma target: ', bmChroma);

// bmChroma.addEventListener("click", () => {
//     console.log('chroma clicked');
//     const newChroma = bmChroma.getAttribute('src');
//     if (newChroma === "img/blood-moon/bm-b.webp") {
//         bmDisplay.setAttribute('src', 'img/blood-moon/bm-b.webp');
//     } else if (newChroma === "img/blood-moon/bm-amythest.webp") {
//         console.log('amythest clicked');
//         bmDisplay.setAttribute('src', 'img/blood-moon/bm-amythest.webp');
//     }
// });

bmChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        bmDisplay.setAttribute('src', newChroma);
    })
})

const debonDisplay = document.getElementById('debon-display');
const debonChroma = document.querySelectorAll('.debon-chroma');

debonChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        debonDisplay.setAttribute('src', newChroma);
    })
})

const empDisplay = document.getElementById('emp-display');
const empChroma = document.querySelectorAll('.emp-chroma');

empChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        empDisplay.setAttribute('src', newChroma);
    })
})

const gsDisplay = document.getElementById('gs-display');
const gsChroma = document.querySelectorAll('.gs-chroma');

gsChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        gsDisplay.setAttribute('src', newChroma);
    })
})

const immDisplay = document.getElementById('imm-display');
const immChroma = document.querySelectorAll('.imm-chroma');

immChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        immDisplay.setAttribute('src', newChroma);
    })
})

const projDisplay = document.getElementById('proj-display');
const projChroma = document.querySelectorAll('.proj-chroma');

projChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        projDisplay.setAttribute('src', newChroma);
    })
})

const psyDisplay = document.getElementById('psy-display');
const psyChroma = document.querySelectorAll('.psy-chroma');

psyChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        psyDisplay.setAttribute('src', newChroma);
    })
})

const sbDisplay = document.getElementById('sb-display');
const sbChroma = document.querySelectorAll('.sb-chroma');

sbChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        sbDisplay.setAttribute('src', newChroma);
    })
})

const sktDisplay = document.getElementById('skt-display');
const sktChroma = document.querySelectorAll('.skt-chroma');

sktChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        sktDisplay.setAttribute('src', newChroma);
    })
})

const worldsDisplay = document.getElementById('worlds-display');
const worldsChroma = document.querySelectorAll('.worlds-chroma');

worldsChroma.forEach( (chroma) => {
    chroma.addEventListener("click", () => {
        const newChroma = chroma.getAttribute('src');
        worldsDisplay.setAttribute('src', newChroma);
    })
})