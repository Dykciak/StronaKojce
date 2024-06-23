const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burge   r-btn__bars');
const footerYear = document.querySelector('.footer__year');

console.log('%cPrzemekKojce.pl', 'font-size: 42px; padding: 60px; color: white; background-color: #3c2a21; border: 5px solid black;' );

const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click',() => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

navBtn.addEventListener('click', handleNav)


const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item=> {
        item.classList.toggle('nav-items-animation')
        // animation-delay: 3s;
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;

    })
}

const handleCurrentYear = ( ) => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)