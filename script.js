// Sélectionne l'élément span à l'intérieur de la div avec la classe "mon_nom"
const monNom = document.querySelector(".mon_nom span");

if (monNom) {
    setInterval(() => {
        monNom.style.visibility = (monNom.style.visibility === "hidden") ? "visible" : "hidden";
    }, 500); // Clignotement toutes les 500ms
}
