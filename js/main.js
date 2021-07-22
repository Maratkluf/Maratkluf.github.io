
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

}

navLink.forEach(n => n.addEventListener('click', linkAction))



const navLink2 = document.querySelectorAll('.nav___link')

function linkAction2(){
    // active link
    navLink2.forEach(n => n.classList.remove('active2'))
    this.classList.add('active2')

}

navLink2.forEach(n => n.addEventListener('click', linkAction2))