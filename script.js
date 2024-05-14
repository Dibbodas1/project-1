

let cs=document.querySelector(".cs")
let csblur=document.querySelector(".csblur")
document.addEventListener("mousemove",function(dets){
    cs.style.left=dets.x-5+"px"
    cs.style.top=dets.y-5+"px"
    
})
document.addEventListener("mousemove",function(dets){
    csblur.style.left=dets.x-125+"px"
    csblur.style.top=dets.y-125+"px"
    
})
var h4all = document.querySelectorAll("nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cs.style.scale = 6;
    cs.style.border = "0.1px solid #fff";
    cs.style.backgroundColor = "transparent";
    elem.style.color="#B1E624"
  });
  elem.addEventListener("mouseleave", function () {
    cs.style.scale = 1;
    cs.style.border = "0px solid #95C11E";
    cs.style.backgroundColor = "#95C11E";
    elem.style.color="#fff"
  });
});

gsap.to("nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"13vh",
    position: "",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        markers:true,
        start:"top -40%",
        end:"top -41%",
        scrub: 2.5
    }
})
gsap.to("main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers :"true",
        start:"top -25%",
        end:"top -80%",
        scrub: 3
    }
})



var card=document.querySelector(".text")
card.addEventListener("mouseenter", function () {
    cs.style.scale = 4;
    cs.style.border = "1px solid #fff";
    cs.style.backgroundColor = "transparent";
    elem.style.color="#486006"
  });
card.addEventListener("mouseleave", function () {
    cs.style.scale = 1;
    cs.style.border = "0px solid #95C11E";
    cs.style.backgroundColor = "#95C11E";
    elem.style.color="#fff"
  });

gsap.from(".aboutus img ,.aboutus-in" ,{
    y:90,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        start:"top 50%",
        end:"top 48%",
        scrub:5

    }
})
gsap.from(".card" ,{
    scale:0.5,
    // y:90,
    duration:0.9,
    opacity:0,
    stagger:0.1,
    // rotate:90,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 72%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from("#colon1", {
    y: -80,
    x: -80,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 80,
    x: 80,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });