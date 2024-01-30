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
  var data = `
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_001.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_002.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_003.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_004.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_005.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_006.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_007.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_008.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_009.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_010.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_011.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_012.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_013.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_014.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_015.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_016.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_017.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_018.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_019.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_020.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_021.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_022.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_023.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_024.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_025.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_026.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_027.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_028.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_029.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_030.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_031.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_032.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_033.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_034.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_035.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_036.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_037.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_038.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_039.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_040.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_041.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_042.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_043.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_044.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_045.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_046.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_047.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_048.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_049.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_050.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_051.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_052.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_053.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_054.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_055.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_056.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_057.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_058.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_059.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_060.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_061.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_062.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_063.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_064.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_065.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_066.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_067.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_068.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_069.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_070.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_071.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_072.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_073.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_074.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_075.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_076.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_077.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_078.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_079.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_080.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_081.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_082.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_083.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_084.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_085.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_086.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_087.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_088.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_089.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_090.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_091.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_092.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_093.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_094.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_095.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_096.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_097.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_098.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_099.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_100.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_101.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_102.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_103.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_104.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_105.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_106.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_107.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_108.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_109.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_110.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_112.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_113.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_114.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_115.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_116.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_117.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_118.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_119.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_120.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_121.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_122.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_123.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_124.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_125.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_126.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_127.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_128.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_129.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_130.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_131.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_132.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_133.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_134.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_135.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_136.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_137.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_138.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_139.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_140.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_141.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_142.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_143.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_144.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_145.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_146.png
  ./pexels-michelangelo-buonarroti-8762889 (2160p)_147.png


 `;
  return data.split("\n")[index];
}

const frameCount = 147;

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






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
// Put FRAMES HERE
var data = `


`;
return data.split("\n")[index];
}

const frameCount = 136;

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
  trigger: `#page7`,
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

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



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


