const drop_down_btn = document.querySelector('.dropdown_btn');
// const drop_down_menu = document.querySelector('.drop_down');
const mobile_btn = document.querySelector('.mobile_btn');
// const mobile_nav = document.querySelector('nav');





let tl = gsap.timeline({defaults:{reversed: true}});
let tl2 = gsap.timeline({defaults:{reversed: true}});

tl.to('.drop_down',{opacity: 1,height:"200px",visibility: 'visible',duration: 0.5});
tl2.to('nav',{y:0,duration: 0.5});

drop_down_btn.addEventListener("click", function (){
    tl.reversed() ? tl.play() : tl.reverse();
    
  })
  
mobile_btn.addEventListener("click", function (){
    tl2.reversed() ? tl2.play() : tl2.reverse();
    
  })
  