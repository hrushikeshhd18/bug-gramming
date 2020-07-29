const txtSet = ["Front-end Development", "Back-end Development", "Android Development","Controlling complexity is the essence of computer programming","You can’t trust code that you did not totally create yourself"];
let count = 0;
let index = 0;
let currTxt = "";
let letter = "";

// particle js config loader
particlesJS.load("particle-class", "assets/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});

// typing animation script
(function type() {
  if (count === txtSet.length) {
    count = 0;
  }
  currTxt = txtSet[count];
  letter = currTxt.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currTxt.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300);
})();
