function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let aboutRefs = document.querySelector('.js-plan')
let aboutTop = document.querySelector('.plan')

aboutRefs.addEventListener('click', () => {
    scrollTo(aboutTop);
    console.log('Click for button')
})

//====================================================================================
