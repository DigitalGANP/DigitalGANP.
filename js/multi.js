const hamburger = document.querySelector(".ham");
const nav = document.querySelector('.bc');

let sections = document.querySelectorAll('section')

hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active")
}

window.addEventListener('scroll', function(){
    nav.classList.toggle('activeBC', window.scrollY > 0)
});

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offSet && top < offSet + height){
            sec.classList.add('show-a');
        }
        else{
            sec.classList.remove('show-a');
        }
    })
}