// Screan 
const screen = document.querySelector('.screen');

// Bouton
const bouton = [...document.querySelectorAll('.bouton')];
const keyCode = bouton.map(element => element.dataset.key);
console.log(keyCode);
// [... ] -> permet de mettre les données dans un tableau  
// afin d'utiliser plus de méthodes car nodeList est limité 



document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) => {
    if(keyCode.includes(valeur)) {
        switch(valeur) {
            case 'AC':
                screen.textContent = '';
                break;
            case '=' :
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const indexKeycode = keyCode.indexOf(valeur) ;
                const touche = bouton[indexKeycode];
                screen.textContent += touche.innerHTML;
        }
    }
}