const body = document.querySelector('body');
const burgerMenuContent = document.querySelector('.burger-menu-content');
const burgerButton = document.querySelector('.burger-button');

// burgerButton.addEventListener('click', function() {
//     toggleMobileMenu();
// });

// function toggleMobileMenu() {
//     if (window.innerWidth <= 768) {
//         burgerMenuContent.style.display = (burgerMenuContent.style.display === 'none') ? 'flex' : 'none';
//     }
// }

burgerButton.addEventListener('click', toggleBurger);

function toggleBurger() {
    window.scrollTo(0, 0);
    body.classList.toggle('lock');
    burgerMenuContent.classList.toggle('burger-menu-active');
    burgerButton.classList.toggle('burger-button-active');
}

document.addEventListener('click', closeInterface);

function closeInterface(event) {
    if (burgerButton.classList.contains('burger-button-active')) {
        if (event.target.classList.contains('link') || event.target.classList.contains('logo')) {
            body.classList.remove('lock');
            burgerMenuContent.classList.remove('burger-menu-active');
            burgerButton.classList.remove('burger-button-active');
        }
    }
}

let initialWindowWidth = window.innerWidth;

window.addEventListener('resize', function () { // close the burger menu when going from 768px to higher values 
    if (window.innerWidth > initialWindowWidth && window.innerWidth > 768 && initialWindowWidth <= 768) {
        body.classList.remove('lock');
        burgerMenuContent.classList.remove('burger-menu-active');
        burgerButton.classList.remove('burger-button-active');
        initialWindowWidth = window.innerWidth;
    } else {
        initialWindowWidth = window.innerWidth;
    }
})
// let touchStartX, touchCurrentX;
// function init() {
//     width = document.querySelector('.slider').offsetWidth;
//     isSmallScreen = container.clientWidth <= 630;
//     sliderLine.style.width = width * images.length + 'px';
//     images.forEach(item => {
//         item.style.width = isSmallScreen || window.innerWidth <= 630 ? width + 'px' : 'auto';
//         item.style.height = isSmallScreen ? width + 'px' : 'auto';
//     });
//     rollSlider();
// }
// init();
// window.addEventListener('resize', init);
// function fillLine(index) {
//     lines.forEach(line => {
//         line.style.width = '0';
//     });
//     lines[index].style.width = '100%';
// }

// function autoFillProgress() {
//     autoFillInterval = setInterval(() => {
//         fillLine((count + 1) % lines.length);
//         plus();
//     }, 3000);
// }

// setTimeout(() => {
//     lines[0].style.width = '100%';
//     autoFillProgress();
// }, 500);
// function plus() {
//     count++;
//     if (count >= images.length) {
//         count = 0;
//     }
//     rollSlider();
//     updateProgress();
// }

// function minus() {
//     count--;
//     if (count < 0) {
//         count = images.length - 1;
//     }
//     rollSlider();
//     updateProgress();
// }

// function resetProgress() {
//     lines.forEach(line => {
//         line.style.width = '0';
//     });
// }

// document.querySelector('.slider-next').addEventListener('click', function () {
//     isAutoFilling = false;
//     clearInterval(autoFillInterval);
//     plus();
//     autoFillProgress();
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     isAutoFilling = false;
//     clearInterval(autoFillInterval);
//     minus();
//     autoFillProgress();
// });

// function updateProgress() {
//     resetProgress();
//     lines[count].style.width = '100%';
// }

// function rollSlider() {
//     sliderLine.style.transform = 'translate(-' + count * width + 'px)';
// }document.querySelector('.slider').addEventListener('touchstart', function (e) {
//     touchStartX = e.touches[0].clientX;
// });

// document.querySelector('.slider').addEventListener('touchmove', function (e) {
//     touchCurrentX = e.touches[0].clientX;
//     diffX = touchStartX - touchCurrentX;
//     sliderLine.style.transform = 'translateX(' + (-count * width - diffX) + 'px)';
// });

// document.querySelector('.slider').addEventListener('touchend', function () {
//     autoSlide();
// });

// function autoSlide() {
//     if (diffX < -100) {
//         isAutoFilling = false;
//         clearInterval(autoFillInterval);
//         minus();
//         autoFillProgress();
//     } else if (diffX > 100) {
//         isAutoFilling = false;
//         clearInterval(autoFillInterval);
//         plus();
//         autoFillProgress();
//     } else {
//         sliderLine.style.transform = 'translateX(' + (-count * width) + 'px)';
//     }
// }
const coordinates = " 8558 Green Rd.,  LA";
        const googleMapsLink = document.getElementById("googleMapsLink");
        googleMapsLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open(`https://www.google.com/maps?q=${coordinates}`, "_blank");
        });


const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slides = document.querySelectorAll('.slide');
const pags = document.querySelectorAll('.pag');
const sliderWrapper = document.querySelector('.slider-wrapper');

leftArrow.addEventListener('click', moveSlides);
rightArrow.addEventListener('click', moveSlides);
let timer = true;

function moveSlides(event) {
    leftArrow.removeEventListener('click', moveSlides);
    rightArrow.removeEventListener('click', moveSlides);
    sliderWrapper.removeEventListener('touchstart', touchStartAction);
    sliderWrapper.removeEventListener('touchend', touchEndAction);
    sliderWrapper.removeEventListener('touchmove', touchMoveAction);
    sliderWrapper.removeEventListener('mouseenter', pointerEnterAction);
    sliderWrapper.removeEventListener('mouseleave', mouseLeaveAction);
    const currentTranslate = checkSlideTranslate();

    if (event.clientX === 0) {
        if (rightArrow.contains(event.target)) {
            if (currentTranslate === -200) {
                for (let slide of slides) {
                    slide.style.transform = `translateX(0%)`;
                    updatePagActive();
                    if (!timer) {
                        progressInterval = setInterval(updateProgress, 100);
                        timer = true;
                    }
                }
            } else {
                for (let slide of slides) {
                    slide.style.transform = `translateX(${currentTranslate - 100}%)`;
                    updatePagActive();
                    if (!timer) {
                        progressInterval = setInterval(updateProgress, 100);
                        timer = true;
                    }
                }
            }
        }
        leftArrow.addEventListener('click', moveSlides);
        rightArrow.addEventListener('click', moveSlides);
        sliderWrapper.addEventListener('touchstart', touchStartAction);
        sliderWrapper.addEventListener('touchend', touchEndAction);
        sliderWrapper.addEventListener('touchmove', touchMoveAction);
        sliderWrapper.addEventListener('mouseenter', pointerEnterAction);
        sliderWrapper.addEventListener('mouseleave', mouseLeaveAction);
        return;
    }

    clearInterval(progressInterval);
    timer = false;
    sliderProgressPercent = 0;
    document.querySelector('.pag-progress').style.width = '0%';
    const pagProgress = document.querySelector('.pag-progress');
    setTimeout(() => {
        pagProgress.remove();
        leftArrow.addEventListener('click', moveSlides);
        rightArrow.addEventListener('click', moveSlides);
        sliderWrapper.addEventListener('touchstart', touchStartAction);
        sliderWrapper.addEventListener('touchend', touchEndAction);
        sliderWrapper.addEventListener('touchmove', touchMoveAction);
        sliderWrapper.addEventListener('mouseenter', pointerEnterAction);
        sliderWrapper.addEventListener('mouseleave', mouseLeaveAction);
    }, 100);

    if (leftArrow.contains(event.target)) {
        if (currentTranslate === 0) {
            for (let slide of slides) {
                slide.style.transform = `translateX(-200%)`;
                updatePagActive();
                if (!timer) {
                    progressInterval = setInterval(updateProgress, 100);
                    timer = true;
                }
            }
        } else {
            for (let slide of slides) {
                slide.style.transform = `translateX(${currentTranslate + 100}%)`;
                updatePagActive();
                if (!timer) {
                    progressInterval = setInterval(updateProgress, 100);
                    timer = true;
                }
            }
        }
    } else if (rightArrow.contains(event.target)) {
        if (currentTranslate === -200) {
            for (let slide of slides) {
                slide.style.transform = `translateX(0%)`;
                updatePagActive();
                if (!timer) {
                    progressInterval = setInterval(updateProgress, 100);
                    timer = true;
                }
            }
        } else {
            for (let slide of slides) {
                slide.style.transform = `translateX(${currentTranslate - 100}%)`;
                updatePagActive();
                if (!timer) {
                    progressInterval = setInterval(updateProgress, 100);
                    timer = true;
                }
            }
        }
    }
    document.querySelector('.pag-active').insertAdjacentHTML('afterbegin', '<div class="pag-progress style="width: 0%;""></div>');
}

function checkSlideTranslate() {
    const fullProperty = slides[0].style.transform;
    let result = '';
    for (let i = 0; i < fullProperty.length; i++) {
        if (!isNaN(Number(fullProperty[i]))|| fullProperty[i] === '-') {
            result += fullProperty[i];
        }
    }
    return Number(result);
}

function updatePagActive() {
    const slidesTranslate = checkSlideTranslate();
    switch (slidesTranslate) {
        case 0:
            pags[0].classList.add('pag-active');
            pags[1].classList.remove('pag-active');
            pags[2].classList.remove('pag-active');
            break;
        case -100:
            pags[1].classList.add('pag-active');
            pags[0].classList.remove('pag-active');
            pags[2].classList.remove('pag-active');
            break;
        case -200:
            pags[2].classList.add('pag-active');
            pags[0].classList.remove('pag-active');
            pags[1].classList.remove('pag-active');
            break;
        default:
            return;
    }
}

// switching timer \/

let sliderProgressPercent = 0;
let progressInterval = setInterval(updateProgress, 100);

function updateProgress() {
    sliderProgressPercent += 2;
    if (sliderProgressPercent < 100) {
        document.querySelector('.pag-progress').style.width = `${sliderProgressPercent}%`;
    } else {
        document.querySelector('.pag-progress').style.width = `${sliderProgressPercent}%`;
        sliderProgressPercent = 0;
        setTimeout(() => {
            nextSlideAuto();
        }, 80);
    }
}

function nextSlideAuto() {
    document.querySelector('.pag-progress').style.width = '0%';
    let clickEvent = new MouseEvent('click');
    rightArrow.dispatchEvent(clickEvent);
    setTimeout(() => {
        document.querySelector('.pag-progress').remove();
        document.querySelector('.pag-active').insertAdjacentHTML('afterbegin', '<div class="pag-progress" style="width: 0%;"></div>');
    }, 100);
}

// touch support \/

let x1 = 0;
let x2 = 0;
let moveCoord = 0;
let moveDifference = 0;

sliderWrapper.addEventListener('touchstart', touchStartAction);

function touchStartAction(event) {
    clearInterval(progressInterval);
    timer = false;
    x1 = event.touches[0].clientX;
}

sliderWrapper.addEventListener('touchmove', touchMoveAction);

function touchMoveAction(event) {
    moveCoord = event.touches[0].clientX;
    const maxCoord = Math.max(x1, moveCoord);
    const minCoord = Math.min(x1, moveCoord);
    moveDifference = maxCoord - minCoord;
    if (x1 < moveCoord) {
        if (moveDifference <= 80) {
            for (slide of slides) {
                slide.style.left = moveDifference + 'px';
            }
        } else {
            for (slide of slides) {
                slide.style.left = '80px';
            }
        }
    } else {
        if (moveDifference <= 80) {
            for (slide of slides) {
                slide.style.left = `-${moveDifference}px`;
            }
        } else {
            for (slide of slides) {
                slide.style.left = '-80px';
            }
        }
    }
}

sliderWrapper.addEventListener('pointerenter', pointerEnterAction);

function pointerEnterAction(event) {
    if (event.pointerType === 'mouse') {
        clearInterval(progressInterval);
        timer = false;
    }
}

sliderWrapper.addEventListener('mouseleave', mouseLeaveAction);

function mouseLeaveAction() {
    if (!timer) {
        progressInterval = setInterval(updateProgress, 100);
        timer = true;
    }
}

sliderWrapper.addEventListener('touchend', touchEndAction);

function touchEndAction(event) {
    for (slide of slides) {
        slide.style.left = '0';
    }
    x2 = event.changedTouches[0].clientX;
    const maxCoord = Math.max(x1, x2);
    const minCoord = Math.min(x1, x2);
    if (maxCoord - minCoord > 30) {
        if (x1 > x2) {
            const clickEvent = new MouseEvent('click', {clientX: 5});
            rightArrow.dispatchEvent(clickEvent);
        } else {
            const clickEvent = new MouseEvent('click', {clientX: 5});
            leftArrow.dispatchEvent(clickEvent);
        }
    } else {
        if (!timer) {
            progressInterval = setInterval(updateProgress, 100);
            timer = true;
        }
    }
}