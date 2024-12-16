let slider = document.querySelector(".top-header");
let num = 1;
setInterval(() => {
  var randNum = Math.floor(Math.random() * 100);
  slider.style.backgroundImage = `url(https://picsum.photos/1600/350?random=${randNum})`;
}, 10000);