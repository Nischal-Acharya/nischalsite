let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Download Feature
function downloadFile() {
  // create a new element to represent the file
  var element = document.createElement('a');
  // set the file's URL and name
  element.setAttribute('href', 'cv-download/nishchal_AcharyaCV.pdf');
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
  element.setAttribute('href', 'mailto: nismsg1@gmail.com');
  
  // simulate a click on the new element to start the download
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


// Adding Splash Screen
window.addEventListener('load', function() {
	setTimeout(removeSplash, 2000); // Change the delay time as needed
});

function removeSplash() {
	document.getElementById('splash').remove();
}
