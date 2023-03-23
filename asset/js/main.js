/* Milestone 0:Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. */

//Milestone 1:
//Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//array di immaginsi ,titoli e testi
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//ciclo all'interno dell'array per ogni elemento
images.forEach((img, index) => {
    //creo una constante e l'associo al valore della kay image
    const percorsoImg = img.image
    //creo una constante e l'associo al valore della kay title
    const titolo = img.title
    //creo una constante e l'associo al valore della kay text
    const testo = img.text

    const j = index
    console.log(j);
    let imgvisible = 0
    //utilizzo le variabili generate in precedenza per usare la funzione
    generate_row_col_img_src_and_h1_and_p(percorsoImg, titolo, testo, images, j,imgvisible)

})





//Milestone 0:
// creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
/** Generate into row :col>img+src
 * genera una collonna con dentro una immagine 
 *  <div class="col">
        <img src="" alt="">
    </div>
 */
function generate_row_col_img_src_and_h1_and_p(percorsoImg, titolo, testo, array, index,imgvisible) {


    imgvisible = 0;
    //associa rowEl all'elemento del document con classe row
    const rowEl = document.querySelector('.row')
    //genera un div
    const colEl = document.createElement('div')
    //genera delle classe al col 'primary','col','principal_card' o 'secondary','col','principal_card'
    if (index == imgvisible) {
        colEl.classList.add('primary', 'col-3', 'principal_card', 'd-flex', 'align-items-center', 'flex-column')
    } else {
        colEl.classList.add('secondary', 'col-3', 'principal_card', 'd-none', 'align-items-center', 'flex-column')
    }
    //genera un tag img 
    const imgEl = document.createElement('img')
    //genera un src per img 
    imgEl.src = `./asset/${percorsoImg}`
    //genera un tag h1
    const h4El = document.createElement('h4')
    //inserisce del testo rima della chiusura del h4
    h4El.insertAdjacentText('beforeend', titolo)
    //genera un tag p
    const pEl = document.createElement('p')
    //inserisce del testo rima della chiusura del p
    pEl.insertAdjacentText('beforeend', testo)
    //inserisce prima della chiusura del 'div' con classe row il 'div' col
    rowEl.insertAdjacentElement('beforeend', colEl)
    //inserisce prima della chiusura del 'div' con classe col il tag img
    colEl.insertAdjacentElement('beforeend', imgEl)
    //inserisce prima della chiusura del 'div' con classe col il tag h4
    colEl.insertAdjacentElement('beforeend', h4El)
    //inserisce prima della chiusura del 'div' con classe col il tag p
    colEl.insertAdjacentElement('beforeend', pEl)
    const principlaCard = document.querySelector('.principal_card')
    const conatinerButton = document.createElement('div')
    conatinerButton.classList.add('container_button', 'w-100', 'justify-content-between', 'd-flex')
    principlaCard.insertAdjacentElement('beforeend', conatinerButton)
    const buttonB = document.createElement('button')
    buttonB.classList.add('back_button')
    const buttonN = document.createElement('button')
    buttonN.classList.add('next_button')
    console.log(buttonB,buttonN)
    const buttonNext = document.querySelector('.next_button')
    const buttonBack = document.querySelector('.back_button')
    conatinerButton.insertAdjacentElement('beforeend', buttonB)
    conatinerButton.insertAdjacentElement('beforeend', buttonN)


    const cardLoad = document.querySelector('.principal_card', 'primary');
    const allcardLoad = document.querySelector('.principal_card', 'primary');
    buttonNext.addEventListener('click', function () {
        const imgCurrentVisible = cardLoad[imgvisible]
        const allImgCurrentVisible = allcardLoad[imgvisible]

        allImgCurrentVisible.classList.remove('primary');
        imgCurrentVisible.classList.remove('visibl');
        imgvisible++;
        if (imgvisible == array.length) {
            imgvisible = 0;
        }
        selectImg(imgCurrentVisible, allImgCurrentVisible);
        console.log(allcardLoad);
    });

    buttonBack.addEventListener('click', function () {
        const imgCurrentVisible = cardLoad[imgvisible]
        const allImgCurrentVisible = allcardLoad[imgvisible]
        allImgCurrentVisible.classList.remove('primary');
        imgCurrentVisible.classList.remove('visibl');
        imgvisible--;
        if (imgvisible < 0) {
            imgvisible = (array.length - 1);
        };
        selectImg(imgCurrentVisible, allImgCurrentVisible);
    });








}
function selectImg(imgCurrentVisible, allImgCurrentVisible) {

    const nextAllImgEl = allcardLoad[imgvisible];
    const nextImgEl = cardLoad[imgvisible];
    nextAllImgEl.classList.add('primary');
    nextImgEl.classList.add('visibl');
}
