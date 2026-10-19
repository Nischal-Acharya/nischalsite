const nav = document.getElementById("nav");
const menuToggle = document.querySelector(".menu-toggle");

function setMenuState(isOpen) {
  nav.classList.toggle("responsive", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

function mostrarOcultarMenu() {
  setMenuState(!nav.classList.contains("responsive"));
}

function seleccionar() {
  setMenuState(false);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    setMenuState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
    closeSocialPopup();
  }
});

const socialMore = document.querySelector(".social-more");
const socialPopup = document.getElementById("social-popup");
const socialClose = document.querySelector(".social-close");

function closeSocialPopup() {
  if (!socialPopup || !socialMore) return;
  socialPopup.hidden = true;
  socialPopup.style.top = "";
  socialPopup.style.left = "";
  socialMore.setAttribute("aria-expanded", "false");
}

function positionSocialPopup() {
  if (!socialMore || !socialPopup || socialPopup.hidden) return;
  const trigger = socialMore.getBoundingClientRect();
  const popupHeight = socialPopup.offsetHeight;
  const popupWidth = socialPopup.offsetWidth;
  const gap = 8;
  const headerHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height")
  ) || 68;
  const minimumTop = headerHeight + gap;
  const preferredTop = trigger.top - popupHeight - gap;
  const top = preferredTop >= minimumTop
    ? preferredTop
    : Math.min(trigger.bottom + gap, window.innerHeight - popupHeight - gap);
  const left = Math.min(
    Math.max(gap, trigger.left),
    window.innerWidth - popupWidth - gap
  );
  socialPopup.style.top = `${Math.max(minimumTop, top)}px`;
  socialPopup.style.left = `${left}px`;
}

if (socialMore && socialPopup) {
  socialMore.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = !socialPopup.hidden;
    socialPopup.hidden = isOpen;
    socialMore.setAttribute("aria-expanded", String(!isOpen));
    if (!isOpen) positionSocialPopup();
  });
  socialClose?.addEventListener("click", closeSocialPopup);
  socialPopup.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", closeSocialPopup);
  window.addEventListener("resize", positionSocialPopup);
  window.addEventListener("scroll", positionSocialPopup, { passive: true });
}
//Funcion que aplica las animaciones de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("skills");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("progreso");
//         habilidades[0].classList.add("javascript");
//         habilidades[1].classList.add("htmlcss");
//         habilidades[2].classList.add("photoshop");
//         habilidades[3].classList.add("wordpress");
//         habilidades[4].classList.add("drupal");
//         habilidades[5].classList.add("comunicacion");
//         habilidades[6].classList.add("trabajo");
//         habilidades[7].classList.add("creatividad");
//         habilidades[8].classList.add("dedicacion");
//         habilidades[9].classList.add("proyect");
//     }
// }


//detecto el scrolling para aplicar la animacion de la barra de habilidades
// window.onscroll = function(){
//     efectoHabilidades();
// } 

//Download Feature
function downloadFile() {
  // create a new element to represent the file
  var element = document.createElement('a');
  // set the file's URL and name
  element.setAttribute('href', 'cv-download/Nishchal CV.pdf');
  element.setAttribute('download', 'Developer-Nishchal-CV.pdf');
  // simulate a click on the new element to start the download
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

//Send Mail
function sendMail() {
  // create a new element to represent the file
  var element = document.createElement('a');
  // set the file's URL and name
  element.setAttribute('href', 'mailto: mail@nishchalacharya.com.np');
  
  // simulate a click on the new element to start the download
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function policy() {window.location.replace('https://nishchalacharya.com.np/Privacy-Policy');}
