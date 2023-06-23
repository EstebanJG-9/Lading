const menuIcon = document.querySelector('.nav__menu');
const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('nav__menu--open');
    navOverlay.classList.toggle('nav__overlay--show');

});

navOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    const currentElement = e.target;
    //console.log(e.target.classList.value);

    if (isActive(currentElement, 'nav__parent')) {
        const submenu = currentElement.parentElement.children[1];
        console.log(submenu);

        if (window.innerWidth < 768) {
            let height = (submenu.clientHeight === 0) ? submenu.scrollHeight : 0;
            submenu.style.height = `${height}px`;


            /** submenu.style.height =  `$ {height}px`  ; */


        } else {
            if (!isActive(submenu, 'nav__inner--show')) {
                closeDropdown(currentDropdown);

            }
            submenu.classList.toggle('nav__inner--show');
            currentDropdown = submenu;

           }   

    };
});
function isActive(element, string) {
    return element.classList.value.includes(string);

};

function closeDropdown(currentDropdown) {
    if (isActive(currentDropdown, 'nav__inner--show')) {
        currentDropdown.classList.remove('nav__inner--show');
    }
}

function confirmacion() {
    var pregunta = confirm("¿Deseas visitar la página principal?");
    if (pregunta){
      alert("Te envío allí rápidamente");
      window.location = "Formulario.html";
    }
    else{
      alert("Quizás en otro momento...\nGracias de todas formas");
    }
  }

window.addEventListener('resize', () => {
    closeDropdown(currentDropdown);
    if (window.innerWidth > 768) {
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInners => {
            navInners.style.height - '';
        });

    }

});