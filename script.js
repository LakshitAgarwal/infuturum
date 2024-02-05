function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


// function scrollWin() {

//   window.scrollTo(0, 10000);
// }


// SCROLLABLE VIDEO FUNCTION

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `  ./infutuem vid 2_000.png
  ./infutuem vid 2_001.png
  ./infutuem vid 2_002.png
  ./infutuem vid 2_003.png
  ./infutuem vid 2_004.png
  ./infutuem vid 2_005.png
  ./infutuem vid 2_006.png
  ./infutuem vid 2_007.png
  ./infutuem vid 2_008.png
  ./infutuem vid 2_009.png
  ./infutuem vid 2_010.png
  ./infutuem vid 2_011.png
  ./infutuem vid 2_012.png
  ./infutuem vid 2_013.png
  ./infutuem vid 2_014.png
  ./infutuem vid 2_015.png
  ./infutuem vid 2_016.png
  ./infutuem vid 2_017.png
  ./infutuem vid 2_018.png
  ./infutuem vid 2_019.png
  ./infutuem vid 2_020.png
  ./infutuem vid 2_021.png
  ./infutuem vid 2_022.png
  ./infutuem vid 2_023.png
  ./infutuem vid 2_024.png
  ./infutuem vid 2_025.png
  ./infutuem vid 2_026.png
  ./infutuem vid 2_027.png
  ./infutuem vid 2_028.png
  ./infutuem vid 2_029.png
  ./infutuem vid 2_030.png
  ./infutuem vid 2_031.png
  ./infutuem vid 2_032.png
  ./infutuem vid 2_033.png
  ./infutuem vid 2_034.png
  ./infutuem vid 2_035.png
  ./infutuem vid 2_036.png
  ./infutuem vid 2_037.png
  ./infutuem vid 2_038.png
  ./infutuem vid 2_039.png
  ./infutuem vid 2_040.png
  ./infutuem vid 2_041.png
  ./infutuem vid 2_042.png
  ./infutuem vid 2_043.png
  ./infutuem vid 2_044.png
  ./infutuem vid 2_045.png
  ./infutuem vid 2_046.png
  ./infutuem vid 2_047.png
  ./infutuem vid 2_048.png
  ./infutuem vid 2_049.png
  ./infutuem vid 2_050.png
  ./infutuem vid 2_051.png
  ./infutuem vid 2_052.png
  ./infutuem vid 2_053.png
  ./infutuem vid 2_054.png
  ./infutuem vid 2_055.png
  ./infutuem vid 2_056.png
  ./infutuem vid 2_057.png
  ./infutuem vid 2_058.png
  ./infutuem vid 2_059.png
  ./infutuem vid 2_060.png
  ./infutuem vid 2_061.png
  ./infutuem vid 2_062.png
  ./infutuem vid 2_063.png
  ./infutuem vid 2_064.png
  ./infutuem vid 2_065.png
  ./infutuem vid 2_066.png
  ./infutuem vid 2_067.png
  ./infutuem vid 2_068.png
  ./infutuem vid 2_069.png
  ./infutuem vid 2_070.png
  ./infutuem vid 2_071.png
  ./infutuem vid 2_072.png
  ./infutuem vid 2_073.png
  ./infutuem vid 2_074.png
  ./infutuem vid 2_075.png
  ./infutuem vid 2_076.png
  ./infutuem vid 2_077.png
  ./infutuem vid 2_078.png
  ./infutuem vid 2_079.png
  ./infutuem vid 2_080.png
  ./infutuem vid 2_081.png
  ./infutuem vid 2_082.png
  ./infutuem vid 2_083.png
  ./infutuem vid 2_084.png
  ./infutuem vid 2_085.png
  ./infutuem vid 2_086.png
  ./infutuem vid 2_087.png
  ./infutuem vid 2_088.png
  ./infutuem vid 2_089.png
  ./infutuem vid 2_090.png`;
  return data.split("\n")[index];
}

const frameCount = 90;
const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







// function canvas1(){
//   const canvas = document.querySelector("#page5>canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// render();
// });

// function files(index) {
//   // put FRAMES HERE
// var data = `



// `;
// return data.split("\n")[index];
// }

// const frameCount = 67;

// const images = [];
// const imageSeq = {
// frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
// const img = new Image();
// img.src = files(i);
// images.push(img);
// }

// gsap.to(imageSeq, {
// frame: frameCount - 1,
// snap: "frame",
// ease: `none`,
// scrollTrigger: {
//   scrub: .5,
//   trigger: `#page5`,
//   start: `top top`,
//   end: `250% top`,
//   scroller: `#main`,
// },
// onUpdate: render,
// });

// images[1].onload = render;

// function render() {
// scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
// var canvas = ctx.canvas;
// var hRatio = canvas.width / img.width;
// var vRatio = canvas.height / img.height;
// var ratio = Math.max(hRatio, vRatio);
// var centerShift_x = (canvas.width - img.width * ratio) / 2;
// var centerShift_y = (canvas.height - img.height * ratio) / 2;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.drawImage(
//   img,
//   0,
//   0,
//   img.width,
//   img.height,
//   centerShift_x,
//   centerShift_y,
//   img.width * ratio,
//   img.height * ratio
// );
// }
// ScrollTrigger.create({

// trigger: "#page5",
// pin: true,
// scroller: `#main`,
// start: `top top`,
// end: `250% top`,
// });
// }
// canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






// function canvas2(){
//   const canvas = document.querySelector("#page7>canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// render();
// });

// function files(index) {
// // Put FRAMES HERE
// var data = `


// `;
// return data.split("\n")[index];
// }

// const frameCount = 136;

// const images = [];
// const imageSeq = {
// frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
// const img = new Image();
// img.src = files(i);
// images.push(img);
// }

// gsap.to(imageSeq, {
// frame: frameCount - 1,
// snap: "frame",
// ease: `none`,
// scrollTrigger: {
//   scrub: .5,
//   trigger: `#page7`,
//   start: `top top`,
//   end: `250% top`,
//   scroller: `#main`,
// },
// onUpdate: render,
// });

// images[1].onload = render;

// function render() {
// scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
// var canvas = ctx.canvas;
// var hRatio = canvas.width / img.width;
// var vRatio = canvas.height / img.height;
// var ratio = Math.max(hRatio, vRatio);
// var centerShift_x = (canvas.width - img.width * ratio) / 2;
// var centerShift_y = (canvas.height - img.height * ratio) / 2;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.drawImage(
//   img,
//   0,
//   0,
//   img.width,
//   img.height,
//   centerShift_x,
//   centerShift_y,
//   img.width * ratio,
//   img.height * ratio
// );
// }
// ScrollTrigger.create({

// trigger: "#page7",
// pin: true,
// scroller: `#main`,
// start: `top top`,
// end: `250% top`,
// });
// }
// canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#0a3bce91`,
})


