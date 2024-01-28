const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;
let container = document.querySelector('.slider_container');
let isSmallScreen = false;
const body = document.querySelector('body')
const burger_menu = document.querySelector('.burger_menu');
const lines = document.querySelectorAll('.progress_bar');
const menuItem = document.querySelectorAll('.top-link')
let isAutoFilling = false;
let autoFillInterval;
let screenWidth;
const btnText = document.querySelector('.btn_text');
function ini(){
    screenWidth = window.screen.width;
}
setInterval(() => {
    ini();
}, 1);
document.querySelector('.enjoy_btn').addEventListener('mouseenter', function () {
    if (window.innerWidth > 768) {
        btnText.style.transform = 'translateX(-15px)';
    }
});

document.querySelector('.enjoy_btn').addEventListener('mouseleave', function () {
    btnText.style.transform = 'translateX(0)';
});
function checking(){
    document.querySelector('.burger').classList.toggle('active');
    burger_menu.classList.toggle('active');
    if(document.querySelector('.burger').classList.contains('active')){
        body.style.overflow = 'hidden';
    }
    else{
        body.style.overflow = '';
    }
}
document.querySelector('.burger').addEventListener('click', function() {
    checking();
    if(document.querySelector('.burger').classList.contains('active')){
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        if (burger_menu.classList.contains('active')) {

            element.setAttribute('tabindex', '-1');
        } else {

            element.removeAttribute('tabindex');
        }
    });

});
burger_menu.addEventListener('click' , function (){
    document.querySelector('.burger').classList.remove('active');
        burger_menu.classList.remove('active');
        body.style.overflow = '';
})
menuItem.forEach(e => {
    e.addEventListener('click' , () =>{
        document.querySelector('.burger').classList.remove('active');
        burger_menu.classList.remove('active');
        body.style.overflow = '';
        window.scrollTo({top: 0, behavior: "smooth"});
    })
})
let touchStartX, touchCurrentX;
function init() {
    width = document.querySelector('.slider').offsetWidth;
    isSmallScreen = container.clientWidth <= 630;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = isSmallScreen || window.innerWidth <= 630 ? width + 'px' : 'auto';
        item.style.height = isSmallScreen ? width + 'px' : 'auto';
    });
    rollSlider();
}
init();
window.addEventListener('resize', init);
function fillLine(index) {
    lines.forEach(line => {
        line.style.width = '0';
    });
    lines[index].style.width = '100%';
}

function autoFillProgress() {
    autoFillInterval = setInterval(() => {
        fillLine((count + 1) % lines.length);
        plus();
    }, 3000);
}

setTimeout(() => {
    lines[0].style.width = '100%';
    autoFillProgress();
}, 500);
function plus() {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
    updateProgress();
}

function minus() {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
    updateProgress();
}

function resetProgress() {
    lines.forEach(line => {
        line.style.width = '0';
    });
}

document.querySelector('.slider-next').addEventListener('click', function () {
    isAutoFilling = false;
    clearInterval(autoFillInterval);
    plus();
    autoFillProgress();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    isAutoFilling = false;
    clearInterval(autoFillInterval);
    minus();
    autoFillProgress();
});

function updateProgress() {
    resetProgress();
    lines[count].style.width = '100%';
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}document.querySelector('.slider').addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchmove', function (e) {
    touchCurrentX = e.touches[0].clientX;
    diffX = touchStartX - touchCurrentX;
    sliderLine.style.transform = 'translateX(' + (-count * width - diffX) + 'px)';
});

document.querySelector('.slider').addEventListener('touchend', function () {
    autoSlide();
});

function autoSlide() {
    if (diffX < -100) {
        isAutoFilling = false;
        clearInterval(autoFillInterval);
        minus();
        autoFillProgress();
    } else if (diffX > 100) {
        isAutoFilling = false;
        clearInterval(autoFillInterval);
        plus();
        autoFillProgress();
    } else {
        sliderLine.style.transform = 'translateX(' + (-count * width) + 'px)';
    }
}
const coordinates = " 8558 Green Rd.,  LA";
        const googleMapsLink = document.getElementById("googleMapsLink");
        googleMapsLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.open(`https://www.google.com/maps?q=${coordinates}`, "_blank");
        });