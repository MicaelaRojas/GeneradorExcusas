/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi pajaro"];
let action = ["comió", "orinó", "chocó", "rompió"];
let what = ["mi tarea ", "las llaves", "el carro"];
let when = [
  "antes de mi clase",
  "justo a tiempo",
  "cuando termine",
  "durante mi cena",
  "mientras estaba rezando"
];
window.onload = function() {
  let getExcuse = excusa(who, action, what, when);
  let excuseElement = document.getElementById("excusa");
  excuseElement.innerHTML = getExcuse;
};

let excusa = (array1, array2, array3, array4) => {
  let whonumber = Math.floor(Math.random() * array1.length);
  let actionumber = Math.floor(Math.random() * array2.length);
  let whatnumber = Math.floor(Math.random() * array3.length);
  let whennumber = Math.floor(Math.random() * array4.length);
  return (
    array1[whonumber] +
    " " +
    array2[actionumber] +
    " " +
    array3[whatnumber] +
    " " +
    array4[whennumber] +
    " "
  );
};
