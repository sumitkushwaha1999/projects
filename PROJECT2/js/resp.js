burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightnav=document.querySelector('.rightnav');
navlist=document.querySelector('.nav-list');



burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
