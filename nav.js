/*RECUPERER LA DIV AVEC LA CLASSE BURGER*/ 

let menu = document.getElementById('menu')

/*ON AJOUTE UN EVENEMNT LORS DU CLIC DESSUS*/ 

menu.addEventListener('click', () => {
    /*ON MET LES 3 BARRES OU LA CROIX*/ 
    menu.classList.toggle('open')

})