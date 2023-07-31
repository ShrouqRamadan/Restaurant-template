let menu=document.querySelector("#menu")
let menuIcon=document.querySelector("#menu i")
let navBar=document.querySelector(".navbar")
let searchIcon=document.querySelector(".search-icon")

menu.addEventListener('click',function(){
    menuIcon.classList.toggle("fa-xmark")
    navBar.classList.toggle("actives")
})


searchIcon.addEventListener('click',function(){
    document.querySelector(".search").style.top="0px";
    
})

document.querySelector(".close-search i").addEventListener('click',function(){
    document.querySelector(".search").style.top="-120%";

})

// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})