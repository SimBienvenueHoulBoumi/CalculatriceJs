// variables globales
// elements memoire et ecran
let ecranElt = document.querySelector("#ecran");

// stocke la valeur précedante
let precedent = 0;
let resultat = 0.0;

// stocke l'affichage
let affichage = "";

// stoke l'opération
let operation = "";

// recuperer toutes les touches
window.onload = () => {
    let touches = document.querySelectorAll(".btn");

    // ajoute un evenement à chaque bouton
    for (let touche of touches) {
        touche.addEventListener("click", gererTouches);
    }
}

/**
 *  fonction réagissant au clic
 */
function gererTouches(){
    let touche = this.innerText;

   if(touche >= 0 || touche === "."){
       ecranElt.value += touche;
   }
}

/**
 * 
 * fonction addition 
 *  
 */
let addition = () => {
    operation = "+";
    precedent += parseFloat(ecranElt.value);
    resultat = precedent;
    ecranElt.value = "";
}

let egalite = () => {

    switch (operation) {
        case "+":
            addition();
            ecranElt.value = resultat.toString();
            break;
        case "-":
            break;
        default:
            break;
    }

    reinitialisation();
}

let remiseZero = () => {
    ecranElt.value = "";
    reinitialisation();
}


// remettre à zero 
let reinitialisation = () => {
    precedent = 0;
    resultat = 0;
}