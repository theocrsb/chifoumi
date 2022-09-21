const tableau = ["pierre", "feuille", "ciseaux"];
const objet = {
  pierre: {
    pierre: "égalité",
    feuille: "vous gagnez",
    ciseaux: "vous perdez",
  },
  feuille: {
    pierre: "vous perdez",
    feuille: "égalité",
    ciseaux: "vous gagnez",
  },
  ciseaux: {
    pierre: "vous gagnez",
    feuille: "vous perdez",
    ciseaux: "égalité",
  },
};
let randomNumber;

function randomGenerator() {
  randomNumber = Math.floor(Math.random() * tableau.length);
  //let affichagePC = JSON.stringify(tableau[randomNumber]);
  // lit "" sur la variable pierre feuille ou ciseaux
  let retourhtmlpc = document.getElementById("htmlpc");
  retourhtmlpc.innerHTML = `L'ordinateur à jouer ${tableau[
    randomNumber
  ].toString()}`;
}
let btnpierre = document.getElementById("pierre");
btnpierre.addEventListener("click", () => debutP());
let btnfeuille = document.getElementById("feuille");
btnfeuille.addEventListener("click", () => debutF());
let btnciseaux = document.getElementById("ciseaux");
btnciseaux.addEventListener("click", () => debutC());
let gagnant = document.getElementById("result");

function debutP() {
  let choixpierre = document.getElementById("htmlhuman");
  choixpierre.innerHTML = "vous avez jouer pierre";
  result.innerHTML = objet[tableau[randomNumber]].pierre;
  point();
  return randomGenerator();
}
function debutF() {
  let choixfeuille = document.getElementById("htmlhuman");
  choixfeuille.innerHTML = "vous avez jouer feuille";
  result.innerHTML = objet[tableau[randomNumber]].feuille;
  point();
  return randomGenerator();
}
function debutC() {
  let choixciseaux = document.getElementById("htmlhuman");
  choixciseaux.innerHTML = "vous avez jouer ciseaux";
  result.innerHTML = objet[tableau[randomNumber]].ciseaux;
  point();
  return randomGenerator();
}
let scorehuman = document.getElementById("scorehuman");
scorehuman.innerHTML = 0;
let scorePC = document.getElementById("scorePC");
scorePC.innerHTML = 0;

console.log(result.innerHTML);

function point() {
  if (result.innerHTML == "vous gagnez") {
    scorehuman.innerHTML++;
  } else if (result.innerHTML == "vous perdez") {
    scorePC.innerHTML++;
  }
}

function resetForm() {
  location.reload();
  // let scorePCreset = document.getElementById("rejouer");
  // scorePCreset = document.getElementById("scorehuman");
  // let scorehumanreset = document.getElementById("rejouer");
  // scorehumanreset = document.getElementById("scorePC");
  // scorehuman.innerHTML = 0;
  // scorePC.innerHTML = 0;
  // let choixciseaux = document.getElementById("htmlhuman");
  // let choixfeuille = document.getElementById("htmlhuman");
  // let choixpierre = document.getElementById("htmlhuman");
  // choixpierre.innerHTML = "";
  // choixfeuille.innerHTML = "";
  // choixciseaux.innerHTML = "";
  // let retourhtmlpc = document.getElementById("htmlpc");
  // retourhtmlpc.innerHTML = "";
  // result.innerHTML = "";
}
