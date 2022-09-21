function Pgcddivise(a, b) {
  let rest = 1;
  let tampon = 0;

  if (a < b) {
    tampon = a;
    a = b;
    b = tampon;
  }

  while (rest != 0) {
    rest = a % b;
    a = b;
    b = rest;
  }
  return a;
}

let test = Pgcddivise(200, 200);
console.log(test);

let modif = document.getElementById("resultat");
modif.innerHTML = "Le PGCD est " + test;
