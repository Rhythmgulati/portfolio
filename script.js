

const tl = gsap.timeline();

// var swiper = new Swiper('.mySwiper', {
//     spaceBetween:20,
//     loop: true,
//     display:horizontal,
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 6,
//           spaceBetween: 50,
//         },
//       },
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//   });

function time(){
    var a = 0;
   setInterval(function(){
    a += Math.floor(Math.random()*10)
    if (a<100){
        document.querySelector("#loader h1").innerHTML=a+"%"
       }else{  
        a=100
        document.querySelector("#loader h1").innerHTML=a+"%"
    }
   }, 150);
    
}

tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
})

tl.to("#loader",{
    top:"-100vh",
    delay:0.5
})


tl.from("nav ",{
    y:-80,
    duration:0.4,
    stagger:0.3,
    delay:0.5
})
tl.from("#scroll .left1 p , #scroll .left1 h3 , #scroll .left1 button ",{
   x:-900,
   duration:1,
   stagger:0.5,
})
tl.from("#scroll .right1 img",{
    scale:0.4,
    opacity:0,
    duration:0.5
})




gsap.to("#scroll",{
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger:".wrapper",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        markers:true,
        scrub:2,
        pin:true
    }
})

tl.from("#scroll .main2 h2 , #scroll .main2 h2",{
    scale:0,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".wrapper", 
        start:"bottom 100%",
        end:"bottom 95%",
        scroller:"body",
        scrub:1
    }
})

tl.from(".experience h1,.excont",{
    scale:0,
    duration:0.8,
    opacity:0,
    scrollTrigger:{
        trigger:".wrapper",    
        start:"bottom 60%",
        end:"bottom 40%",
        stagger:1,
        scroller:"body",
        scrub:1
    }
})

tl.to("#scroll2",{
    transform:"translateX(-50%)",
    scrollTrigger:{
        trigger:".wrapper2",
        scroller:"body",
        start:"top -10%",
        end:"top -200%",
        // markers:true,
        scrub:1,
        pin:true
    }
})
tl.from(".quote",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".wrapper2",
        scroller:"body",
        start:"top 0%",
        end:"top -200%",
        markers:true,
        scrub:2,
    }
})
tl.from(".education .heading , .edubox",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".wrapper3",
        scroller:"body",
        markers:true,
        start:"top 100%",
        end:"bottom 100%",
        scrub:1,
    }
})
tl.from(".page5 .heading ,  .project-card",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".wrapper5",
        scroller:"body",
        start:"top 100%",
        end:"bottom 100%",
        scrub:1,
        // markers:true
    }

})
