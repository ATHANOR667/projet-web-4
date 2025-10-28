// Sélectionne le titre existant
const titre = document.getElementById('titre');

// Style initial (invisible et légèrement décalé)
titre.style.opacity = "0";
titre.style.transform = "translateY(30px)";
titre.style.transition = "opacity 1.5s ease, transform 1.5s ease";

// Lance l’animation après un petit délai
setTimeout(() => {
  titre.style.opacity = "1";
  titre.style.transform = "translateY(0)";
}, 500);