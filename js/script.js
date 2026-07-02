// ==============================
// PRELOADER
// ==============================

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

preloader.style.opacity = "0";

setTimeout(() => {

preloader.style.display = "none";

},600);

});

// ==============================
// HEADER
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>70){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// ==============================
// TOP BUTTON
// ==============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==============================
// BURGER
// ==============================

const burger=document.querySelector(".burger");

const mobile=document.querySelector(".mobile-menu");

burger.addEventListener("click",()=>{

mobile.classList.toggle("active");

});
// ==============================
// CLOSE MOBILE MENU
// ==============================

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobile.classList.remove("active");

});

});

// ==============================
// REVEAL ANIMATION
// ==============================

const reveals=document.querySelectorAll(

".product-card,.advantage,.step,.about-grid,.counter-box,.gallery img,.contact-form,.contact-info,.cta-box"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:.15

});

reveals.forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});
// ==============================
// COUNTERS
// ==============================

const counters=document.querySelectorAll(".counter");

const speed=250;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const inc=Math.ceil(target/speed);

count+=inc;

if(count<target){

counter.innerText=count.toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

counterObserver.unobserve(counter);

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
// ==============================
// PARALLAX HERO
// ==============================

const hero=document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

hero.style.transform=`translateY(${offset*0.25}px) scale(1.1)`;

});

// ==============================
// SMOOTH LINKS
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const id=this.getAttribute("href");

if(id==="#") return;

e.preventDefault();

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

});

});

