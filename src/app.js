/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

const pronouns = ["A", "The"];
const subjects = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
const actions = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
const items = ["homework", "toe", "car", "shoe"];
const places = ["on the street", "in my house", "in my driveway"];

function randompick(word_list) {
  return word_list[Math.floor(Math.random() * word_list.length)];
}

function generateExcuse() {
  return `${randompick(pronouns)} ${randompick(subjects)} ${randompick(
    actions
  )} ${randompick(items)} ${randompick(places)}.`;
}

//
