const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(`#${toggleId}`)
    const nav = document.querySelector(`#${navId}`)
    if(toggle && nav) {
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

