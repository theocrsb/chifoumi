function ADN(monparametre) {
  let premiertableau = monparametre.split("");
  let tableau = [];
  for (let index = 0; index < premiertableau.length; index++) {
    tableau.push(premiertableau[index]);

    switch (premiertableau[index]) {
      case "C":
        tableau.push("G");
        // si on vient d'incrementer A push T
        break;
      case "A":
        tableau.push("T");
        // execute case y code block
        break;
      case "G":
        tableau.push("C");
        // execute case x code block
        break;
      case "T":
        tableau.push("A");
        // execute case y code block
        break;
      default:
      // execute default code block
    }
  }
  return tableau.toString();
}

let test2 = ADN("ATTGGC");
let modif2 = document.getElementById("resultat2");
modif2.innerHTML = "Le tableau est " + test2;
