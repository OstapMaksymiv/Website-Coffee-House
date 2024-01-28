document.addEventListener('DOMContentLoaded', function () {
    const coffee_category = document.querySelector(".Coffee");
    const tea_category = document.querySelector(".Tea");
    const dessert_category = document.querySelector(".Dessert");
    const coffee_block = document.querySelector(".coffee_block");
    const tea_block = document.querySelector(".tea_block");
    const dessert_block = document.querySelector(".dessert_block");
    const body = document.querySelector('body')
    const burger_menu = document.querySelector('.burger_menu');
    const menuItem = document.querySelectorAll('.top-link')
    let screenWidth;
    function init(){
        screenWidth = window.screen.width;

    }
    setInterval(() => {
        init();
    }, 1);
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
    });
    coffee_category.addEventListener('click', function () {
        coffee_block.style.display = 'flex';
        tea_block.style.display = 'none';
        dessert_block.style.display = 'none';
        if(screenWidth <= 768){
            document.querySelector('.dessert_block .meal:nth-child(5)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(6)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(7)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(8)').style.display = 'block';
            document.querySelector('.reload_dessert').style.display = 'none';
        }
        else{
            document.querySelector('.dessert_block .meal:nth-child(5)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(6)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(7)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(8)').style.display = 'none';
            document.querySelector('.reload_dessert').style.display = 'block';
        }
    });
    tea_category.addEventListener('click', function () {
        coffee_block.style.display = 'none';
        tea_block.style.display = 'flex';
        dessert_block.style.display = 'none';
        if(screenWidth <= 768){
            document.querySelector('.coffee_block .meal:nth-child(5)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(6)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(7)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(8)').style.display = 'block';
            document.querySelector('.reload_coffee').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(5)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(6)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(7)').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(8)').style.display = 'block';
            document.querySelector('.reload_dessert').style.display = 'none';
        }
        else if(screenWidth > 769){
            document.querySelector('.coffee_block .meal:nth-child(5)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(6)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(7)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(8)').style.display = 'none';
            document.querySelector('.reload_coffee').style.display = 'block';
            document.querySelector('.dessert_block .meal:nth-child(5)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(6)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(7)').style.display = 'none';
            document.querySelector('.dessert_block .meal:nth-child(8)').style.display = 'none';
            document.querySelector('.reload_dessert').style.display = 'block';
        }
    });
    dessert_category.addEventListener('click', function () {
        coffee_block.style.display = 'none';
        tea_block.style.display = 'none';
        dessert_block.style.display = 'flex';
        if(screenWidth <= 768){
            document.querySelector('.coffee_block .meal:nth-child(5)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(6)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(7)').style.display = 'block';
            document.querySelector('.coffee_block .meal:nth-child(8)').style.display = 'block';
            document.querySelector('.reload_coffee').style.display = 'none';
        }
        else{
            document.querySelector('.coffee_block .meal:nth-child(5)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(6)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(7)').style.display = 'none';
            document.querySelector('.coffee_block .meal:nth-child(8)').style.display = 'none';
            document.querySelector('.reload_coffee').style.display = 'block';
        }
    });
    document.querySelector('.reload_coffee').addEventListener('click', function () {
        document.querySelector('.coffee_block .meal:nth-child(5)').style.display = 'block';
        document.querySelector('.coffee_block .meal:nth-child(6)').style.display = 'block';
        document.querySelector('.coffee_block .meal:nth-child(7)').style.display = 'block';
        document.querySelector('.coffee_block .meal:nth-child(8)').style.display = 'block';
        document.querySelector('.reload_coffee').style.display = 'none';
    });
    document.querySelector('.reload_dessert').addEventListener('click', function () {
        document.querySelector('.dessert_block .meal:nth-child(5)').style.display = 'block';
        document.querySelector('.dessert_block .meal:nth-child(6)').style.display = 'block';
        document.querySelector('.dessert_block .meal:nth-child(7)').style.display = 'block';
        document.querySelector('.dessert_block .meal:nth-child(8)').style.display = 'block';
        document.querySelector('.reload_dessert').style.display = 'none';
    });
    const coordinates = " 8558 Green Rd.,  LA";
    const googleMapsLink = document.getElementById("googleMapsLink");
    googleMapsLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.open(`https://www.google.com/maps?q=${coordinates}`, "_blank");
    });
    const block = document.querySelectorAll('.block');
    const firstElement = block[0];
    const secondElement = block[1];
    const thirdElement = block[2];
    const FourthElement = block[3];
    const FifthElement = block[4];
    const SixthElement = block[5];
    const SeventhElement = block[6];
    const EighthElement = block[7];
    const NinthElement = block[8];
    const TenthElement = block[9];
    const EleventhElement = block[10];
    const TwelfthElement = block[11];
    const TrithElement = block[12];
    const FouthteenElement = block[13];
    const FifthteenElement = block[14];
    const SixthteenElement = block[15];

    const SevenhteenElement = block[16];
    const EighthteenElement = block[17];
    const NinethteenElement = block[18];
    const TwentythteenElement = block[19];


    const back = document.querySelector('.back');
    document.querySelector('.meal:nth-child(1)').addEventListener('click', function () {
        back.style.display = 'block';
        firstElement.style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
        setTimeout(function () {
            firstElement.style.opacity = '1';
            firstElement.style.visibility = 'visible';
            back.style.opacity = '1';
            firstElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(2)').addEventListener('click', function () {
        back.style.display = 'block';
        secondElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            secondElement.style.opacity = '1';
            secondElement.style.visibility = 'visible';
            back.style.opacity = '1';
            secondElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(3)').addEventListener('click', function () {
        back.style.display = 'block';
        thirdElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            thirdElement.style.opacity = '1';
            thirdElement.style.visibility = 'visible';
            back.style.opacity = '1';
            thirdElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(4)').addEventListener('click', function () {
        back.style.display = 'block';
        FourthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            FourthElement.style.opacity = '1';
            FourthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            FourthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(5)').addEventListener('click', function () {
        back.style.display = 'block';
        FifthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            FifthElement.style.opacity = '1';
            FifthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            FifthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(6)').addEventListener('click', function () {
        back.style.display = 'block';
        SixthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            SixthElement.style.opacity = '1';
            SixthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            SixthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(7)').addEventListener('click', function () {
        back.style.display = 'block';
        SeventhElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            SeventhElement.style.opacity = '1';
            SeventhElement.style.visibility = 'visible';
            back.style.opacity = '1';
            SeventhElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.meal:nth-child(8)').addEventListener('click', function () {
        back.style.display = 'block';
        EighthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            EighthElement.style.opacity = '1';
            EighthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            EighthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    
    document.querySelector('.tea_block .meal:nth-child(1)').addEventListener('click', function () {
        back.style.display = 'block';
        NinthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            NinthElement.style.opacity = '1';
            NinthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            NinthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.tea_block .meal:nth-child(2)').addEventListener('click', function () {
        back.style.display = 'block';
        TenthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            TenthElement.style.opacity = '1';
            TenthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            TenthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.tea_block .meal:nth-child(3)').addEventListener('click', function () {
        back.style.display = 'block';
        EleventhElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            EleventhElement.style.opacity = '1';
            EleventhElement.style.visibility = 'visible';
            back.style.opacity = '1';
            EleventhElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.tea_block .meal:nth-child(4)').addEventListener('click', function () {
        back.style.display = 'block';
        TwelfthElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            TwelfthElement.style.opacity = '1';
            TwelfthElement.style.visibility = 'visible';
            back.style.opacity = '1';
            TwelfthElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(1)').addEventListener('click', function () {
        back.style.display = 'block';
        TrithElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            TrithElement.style.opacity = '1';
            TrithElement.style.visibility = 'visible';
            back.style.opacity = '1';
            TrithElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(2)').addEventListener('click', function () {
        back.style.display = 'block';
        FouthteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            FouthteenElement.style.opacity = '1';
            FouthteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            FouthteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(3)').addEventListener('click', function () {
        back.style.display = 'block';
        FifthteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            FifthteenElement.style.opacity = '1';
            FifthteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            FifthteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(4)').addEventListener('click', function () {
        back.style.display = 'block';
        SixthteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            SixthteenElement.style.opacity = '1';
            SixthteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            SixthteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(5)').addEventListener('click', function () {
        back.style.display = 'block';
        SevenhteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            SevenhteenElement.style.opacity = '1';
            SevenhteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            SevenhteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(6)').addEventListener('click', function () {
        back.style.display = 'block';
        EighthteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            EighthteenElement.style.opacity = '1';
            EighthteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            EighthteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(7)').addEventListener('click', function () {
        back.style.display = 'block';
        NinethteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            NinethteenElement.style.opacity = '1';
            NinethteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            NinethteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.dessert_block .meal:nth-child(8)').addEventListener('click', function () {
        back.style.display = 'block';
        TwentythteenElement.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(function () {
            TwentythteenElement.style.opacity = '1';
            TwentythteenElement.style.visibility = 'visible';
            back.style.opacity = '1';
            TwentythteenElement.style.transform = 'translate(-50%, -50%)';
        }, 10);
    });
    document.querySelector('.back').addEventListener('click', function () {
        firstElement.style.transform = 'translate(-50%, -250%)';
        secondElement.style.transform = 'translate(-50%, -250%)';
        thirdElement.style.transform = 'translate(-50%, -250%)';
        FourthElement.style.transform = 'translate(-50%, -250%)';
        FifthElement.style.transform = 'translate(-50%, -250%)';
        SixthElement.style.transform = 'translate(-50%, -250%)';
        SeventhElement.style.transform = 'translate(-50%, -250%)';
        EighthElement.style.transform = 'translate(-50%, -250%)';
        NinthElement.style.transform = 'translate(-50%, -250%)';
        TenthElement.style.transform = 'translate(-50%, -250%)';
        EleventhElement.style.transform = 'translate(-50%, -250%)';
        TwelfthElement.style.transform = 'translate(-50%, -250%)';
        TrithElement.style.transform = 'translate(-50%, -250%)';
        FouthteenElement.style.transform = 'translate(-50%, -250%)';
        FifthteenElement.style.transform = 'translate(-50%, -250%)';
        SixthteenElement.style.transform = 'translate(-50%, -250%)';
        SevenhteenElement.style.transform = 'translate(-50%, -250%)';
        EighthteenElement.style.transform = 'translate(-50%, -250%)';
        NinethteenElement.style.transform = 'translate(-50%, -250%)';
        TwentythteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        firstElement.style.opacity = '0';
        firstElement.style.visibility = 'hidden';
        secondElement.style.opacity = '0';
        secondElement.style.visibility = 'hidden';
        thirdElement.style.opacity = '0';
        thirdElement.style.visibility = 'hidden';
        FourthElement.style.opacity = '0';
        FourthElement.style.visibility = 'hidden';
        FifthElement.style.opacity = '0';
        FifthElement.style.visibility = 'hidden';
        SixthElement.style.opacity = '0';
        SixthElement.style.visibility = 'hidden';
        SeventhElement.style.opacity = '0';
        SeventhElement.style.visibility = 'hidden';
        EighthElement.style.opacity = '0';
        EighthElement.style.visibility = 'hidden';
        NinthElement.style.opacity = '0';
        NinthElement.style.visibility = 'hidden';
        TenthElement.style.opacity = '0';
        TenthElement.style.visibility = 'hidden';
        EleventhElement.style.opacity = '0';
        EleventhElement.style.visibility = 'hidden';
        TwelfthElement.style.opacity = '0';
        TwelfthElement.style.visibility = 'hidden';
        TrithElement.style.opacity = '0';
        TrithElement.style.visibility = 'hidden';
        FouthteenElement.style.opacity = '0';
        FouthteenElement.style.visibility = 'hidden';
        FifthteenElement.style.opacity = '0';
        FifthteenElement.style.visibility = 'hidden';
        SixthteenElement.style.opacity = '0';
        SixthteenElement.style.visibility = 'hidden';
        SevenhteenElement.style.opacity = '0';
        SevenhteenElement.style.visibility = 'hidden';
        EighthteenElement.style.opacity = '0';
        EighthteenElement.style.visibility = 'hidden';
        NinethteenElement.style.opacity = '0';
        NinethteenElement.style.visibility = 'hidden';
        TwentythteenElement.style.opacity = '0';
        TwentythteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_1').addEventListener('click', function () {
        firstElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        firstElement.style.opacity = '0';
        firstElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_2').addEventListener('click', function () {
        secondElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        secondElement.style.opacity = '0';
        secondElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_3').addEventListener('click', function () {
        thirdElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        thirdElement.style.opacity = '0';
        thirdElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_4').addEventListener('click', function () {
        FourthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        FourthElement.style.opacity = '0';
        FourthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_5').addEventListener('click', function () {
        FifthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        FifthElement.style.opacity = '0';
        FifthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_6').addEventListener('click', function () {
        SixthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        SixthElement.style.opacity = '0';
        SixthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_7').addEventListener('click', function () {
        SeventhElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        SeventhElement.style.opacity = '0';
        SeventhElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_8').addEventListener('click', function () {
        EighthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        EighthElement.style.opacity = '0';
        EighthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_9').addEventListener('click', function () {
        NinthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        NinthElement.style.opacity = '0';
        NinthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_10').addEventListener('click', function () {
        TenthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        TenthElement.style.opacity = '0';
        TenthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_11').addEventListener('click', function () {
        EleventhElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        EleventhElement.style.opacity = '0';
        EleventhElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_12').addEventListener('click', function () {
        TwelfthElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        TwelfthElement.style.opacity = '0';
        TwelfthElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_13').addEventListener('click', function () {
        TrithElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        TrithElement.style.opacity = '0';
        TrithElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_14').addEventListener('click', function () {
        FouthteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        FouthteenElement.style.opacity = '0';
        FouthteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_15').addEventListener('click', function () {
        FifthteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        FifthteenElement.style.opacity = '0';
        FifthteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_16').addEventListener('click', function () {
        SixthteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        SixthteenElement.style.opacity = '0';
        SixthteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_17').addEventListener('click', function () {
        SevenhteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        SevenhteenElement.style.opacity = '0';
        SevenhteenElement.style.visibility = 'hidden';
    });

    document.querySelector('.but_18').addEventListener('click', function () {
        EighthteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        EighthteenElement.style.opacity = '0';
        EighthteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_19').addEventListener('click', function () {
        NinethteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        NinethteenElement.style.opacity = '0';
        NinethteenElement.style.visibility = 'hidden';
    });
    document.querySelector('.but_20').addEventListener('click', function () {
        TwentythteenElement.style.transform = 'translate(-50%, -250%)';
        body.style.overflowY = '';
        back.style.opacity = '0';
        setTimeout(function () {
            back.style.display = 'none';
        }, 500);
        TwentythteenElement.style.opacity = '0';
        TwentythteenElement.style.visibility = 'hidden';
    });
});