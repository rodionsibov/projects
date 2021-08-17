const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(`#${toggleId}`)
    const nav = document.querySelector(`#${navId}`)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader() {
    const nav = document.querySelector('#header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollTop() {
    const scrollTop = document.querySelector('#scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top')
    else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)