



let quotes =  [
  "Do what you can, with what you have, where you are. <br>- Theodore Roosevelt",

  "Winning isn't everything, but wanting to win is. <br> — Vince Lombardi",

  "Character is power. <br> — Booker T. Washington",

  "Don't watch the clock; do what it does. Keep going. <br> — Sam Levenson",

  "If you fell down yesterday, stand up today. <br> — H.G. Wells",

  "Only a life lived for others is a life worthwhile. <br> — Albert Einstein",

  "You miss 100% of the shots you don't take. <br> — Wayne Gretzky"
]

const changeQuote = setInterval(() => {
  for (let i = 0; i < quotes.length; i++){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];    
  }
},2500)
// setTimeout(changeQuote, 1000);

const fadeOutEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 1;
  } else {
    clearInterval(fadeOutEffect);
  }
}, 9000);


// window.addEventListener("Page loaded", new Date());

window.addEventListener('load', fadeOutEffect);

const fadeOutQuote = setInterval(() => {
  if(!quotes.style.opacity){
    quotes.style.opacity = 1;
  }
  if (quotes.style.opacity > 0){
    quotes.style.opacity -= 1;
  }else {
    clearInterval( fadeOutQuote);
  }
},8000);


window.addEventListener('load', fadeOutQuote);




function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
  element.classList.toggle("dark-mode");
  element.classList.toggle("path-mode")
  
}