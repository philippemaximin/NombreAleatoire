/**
 * ES6
 */
const readline = require('readline');

let myReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Algo {
    constructor() {
        this.nbAleatoire = Math.floor(Math.random() * 999);
        this.nbCoups = 1;
        this.saisie = 0;
    }


    miniGame() {
        //saisir un nombre

        let myThis = this;

        myReadLine.question('Saisir un nombre : ', function (saisie) { // la variable `saisie` contient la saisie effectuée
            console.log(`Vous avez saisi : ${saisie}`);
            
            //compare nombre 
            if (saisie == myThis.nbAleatoire) {
                //nombre trouvé, on retourne le nombre de coups
                console.log(`Nombre Aleatoire trouvé en ${myThis.nbCoups} coups. \r\n`);

                myReadLine.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
            }
            else if (saisie > myThis.nbAleatoire) {
                //le nombre est plus petit
                console.log('Ne nombre a trouver est plus petit \r\n');
            
                myThis.nbCoups ++;
                myThis.miniGame();
            }
            else if (saisie < myThis.nbAleatoire) {
                //le nombre est plus grand
                console.log('Ne nombre a trouver est plus grand \r\n');
               
                myThis.nbCoups ++;
                myThis.miniGame();
            }

            
        });
        
    }
}


let game = new Algo();

console.log(game.nbAleatoire);
game.miniGame();