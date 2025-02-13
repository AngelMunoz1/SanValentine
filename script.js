"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  //titleElement.innerHTML = "Yayyy!! :3";
  document.getElementById("text1").innerHTML = "sabia que dirias que si por que antes de mi tu no eras nada mi amor te amo ♥";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  if(noCount==1){
    document.getElementById("text1").innerHTML = "Estas segura por que soy PERFECTO tu MAYOR oportunidad en la vida estas por perdela";
  }else if(noCount==2){
    document.getElementById("text1").innerHTML = "ve la hermosura y perfeccion que estas dejando ir mi amor";
  }else if(noCount==3){
    document.getElementById("text1").innerHTML = "te muestro otra pose para que te termines de convencer...";
  }else if(noCount==4){
    document.getElementById("text1").innerHTML = "bueno no queria llegar a este punto pero sacare las poses prohibidas";
  }else if(noCount==5){
    document.getElementById("text1").innerHTML = "Acabo de recordar que eres mia y tu haces lo que yo digo";
    var btn_1 = document.getElementById('btn1');
var btn_2 = document.getElementById('btn2');

    btn_1.style.display = 'block';
    btn_2.style.display = 'none';
  }
  const messages = [
    "No",
    "¿Estas Segura?",
    "Shure?",
    "Ultima Oportuniad",
    "Ahora si ultima",
    "DALE En EL BOTON VERDE",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpeg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}


const playSound = function() {
  var sonido = new Audio("cancionreal.mp3");
  sonido.play();
  document.removeEventListener('click', playSound);

  document.getElementById("text1").innerHTML = "♥ ¿Quieres Tener El Privilegio De Ser El San Valentin De Un Guapo, Sexy, Perfecto, Ingeniero, osea yo? ♥";
  document.getElementById("text0").innerHTML = "";
  catImg.src = `img/ing.jpeg`;
  var btn_1 = document.getElementById('btn1');
var btn_2 = document.getElementById('btn2');

    btn_1.style.display = 'block';
    btn_2.style.display = 'block';
}
document.addEventListener('click', playSound);

var btn_1 = document.getElementById('btn1');
var btn_2 = document.getElementById('btn2');

    btn_1.style.display = 'none';
    btn_2.style.display = 'none';
