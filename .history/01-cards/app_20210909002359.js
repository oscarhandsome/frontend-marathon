const bgImages = [
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1549662192-16b64c64aeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1067&q=80'
]

const slides = document.querySelectorAll('.slide')

const changeBG = function(e) {
    const rnd = Math.floor(Math.random() * bgImages.length)
    const mainContainer = document.querySelector('.bg')
    /* 
        @styles - use your way styiling
    */
    mainContainer.style.backgroundImage = `url(${bgImages[rnd]})`;
    mainContainer.style.backgroundPsition = "center";
    mainContainer.style.backgroundRepeat = "no-repeat";
    mainContainer.style.backgroundSize = "cover";
    mainContainer.style.filter = "blur(2px)";
}

for (const slide of slides) {
    // BAD PRACTICE add event listener to each slide
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
        changeBG()
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

changeBG();


document.querySelector('.btn-hide').addEventListener("click", function() {
    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
    document.querySelector('.bg').style.filter = none;
});

document.querySelector('.btn-prev').addEventListener("click", changeBG)
document.querySelector('.btn-next').addEventListener("click", changeBG)