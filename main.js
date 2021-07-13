/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});
/* SCROLL project */
sr.reveal('.project',{});
sr.reveal('.footer',{});
sr.reveal('.Top',{});


/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 



/* books */
sr.reveal('.note',{});
sr.reveal('.section-title',{});

/* clock */


let today = new Date();
let hourNow = today.getHours();
let minuteNow = today.getMinutes();
let secondNow = today.getSeconds();

var all = hourNow + ":" + minuteNow + ":" + secondNow;
//document.write('<h2 class="time" >' + all + '</h2>');

let timeNow = today.getHours();

let display;


if (timeNow > 18){
  display = "Fiidnimo Wanaagsan !";
}
else if (timeNow > 12 ){
  display = "Galab wanaagsan !";
}
else if (timeNow > 0 ){
  display = "Subax wanaagsan!";
}

else{
  display = "Welcome bro";
}

document.write('<h3 class="time">' + display + '</h3>')



      


