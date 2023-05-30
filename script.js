console.log('hello world');

// Det vill jag ha klocka in startsida

const clockSpan = document.getElementById("js");
clockSpan.innerHTML = " ";

function onEverySecond(){
  const now =  new Date();
  clockSpan.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();


}

setInterval(onEverySecond, 1000); 

// Det är automatiska bilder bildspel

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // Ändra bilder varje fyra sekunder
  setTimeout(showSlides, 4000);  
}
// Det är en bild som vi kan klicka på fram eller bakåt
