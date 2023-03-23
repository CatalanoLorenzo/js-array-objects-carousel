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
]
//------------Seleziono gli elementi nella DOM --------------
const colEl = document.querySelector('.col-6')
const showColEl = document.querySelector('.col-3')
const backButton = document.querySelector('.back_button')
const nextButton = document.querySelector('.next_button')
const stopButton = document.querySelector('.stop_button')
const playButton = document.querySelector('.play_button')
const reversButton = document.querySelector('.resers_button')
//-----------------------------------------------------------

//------------Setto i vari contatori e valori ---------------
let verso = true
let imgvisible = 0
const timingInterval = 1000
const timingTimeout = 3000
//-----------------------------------------------------------

//-------------Ciclo nell'array e mi creo gli elementi-------
images.forEach((array, index) => {
    const src = array.image
    const title = array.title
    const text = array.text
    const order = index
    //-----Card principale con un unica immagine visibile----
    Generat_input_card(src, title, text, imgvisible, order)
    //-------------------------------------------------------

    //-----Card secondaria con tutte le immagini visibili----
    generet_list_img(src, imgvisible, order)
    //-------------------------------------------------------
})
//-----------------------------------------------------------

//--Seleziono gli elementi nella DOM generati dopo il ciclo--
const cardsLoad = document.querySelectorAll('.col-6 .card');
const allCardsLoad = document.querySelectorAll('.col-3 .card');
//-----------------------------------------------------------

//--------Genero un timeout che fa partire l'intervallo------
setTimeout(() => {

    //-------inizio l'intervallo-----------------------------
    const idInterval = setInterval(() => {

        //------------------versi di marcia -----------------
        if(verso){
            imgvisible = next(cardsLoad, imgvisible, allCardsLoad, images)
            console.log('fine intervallo');
        }else{
            imgvisible = back(cardsLoad, imgvisible, allCardsLoad, images)
        }
        //---------------------------------------------------

    }, (timingInterval))
    //-------------------------------------------------------

    //---Evento sul bottono stop per fermare l'intervallo----
    stopButton.addEventListener('click', function () {
        clearInterval(idInterval)
        console.log('stop intervallo');
    })
    //-------------------------------------------------------

    //--Evento sul bottono play per riprendere l'intervallo--
    playButton.addEventListener('click', function () {
        idInterval = setInterval(() => {
            imgvisible = next(cardsLoad, imgvisible, allCardsLoad, images)
            console.log('fine intervallo');
        }, (timingInterval))
        console.log('play intervallo');
    })
    //-------------------------------------------------------

    //---Evento sul bottono revers per invertire la marcio---
    reversButton.addEventListener('click',function(){
        if(verso){
            verso = false
        }else{
            verso = true
        }
    })
    //-------------------------------------------------------

}, (timingTimeout))
//-----------------------------------------------------------

//-Evento sul bottono next per cambiare immgaine selezionata-
nextButton.addEventListener('click', function () {
    imgvisible = next(cardsLoad, imgvisible, allCardsLoad, images)
});
//-----------------------------------------------------------

//-Evento sul bottono back per cambiare immgaine selezionata-

backButton.addEventListener('click', function () {
    imgvisible = back(cardsLoad, imgvisible, allCardsLoad, images)
});
//-----------------------------------------------------------



//__________FUNCTION_________________________________________
/**
 * 
 * @param {String} srcimg 
 * @param {String} imgvisible 
 * @param {String} numberorder 
 */
function generet_list_img(srcimg, imgvisible, numberorder) {
    const cards = document.createElement('div')

    if (numberorder == imgvisible) {
        cards.classList.add('card', 'displyon', 'primary')
    } else {
        cards.classList.add('card', 'displyon')
    }
    showColEl.insertAdjacentElement('beforeend', cards)
    const imgEl = document.createElement('img')
    cards.insertAdjacentElement('beforeend', imgEl)
    imgEl.src = `./asset/${srcimg}`
}



function Generat_input_card(srcimg, title, text, imgvisible, numberorder) {

    const cards = document.createElement('div')

    if (numberorder == imgvisible) {
        cards.classList.add('card', 'displyon')
    } else {
        cards.classList.add('card',)
    }
    colEl.insertAdjacentElement('beforeend', cards)

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    cards.insertAdjacentElement('beforeend', cardHeader)

    const h1El = document.createElement('h1')
    cardHeader.insertAdjacentElement('beforeend', h1El)
    h1El.innerText = title

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cards.insertAdjacentElement('beforeend', cardBody)

    const imgEl = document.createElement('img')
    cardBody.insertAdjacentElement('beforeend', imgEl)
    imgEl.src = `./asset/${srcimg}`

    const pEl = document.createElement('p')
    cardBody.insertAdjacentElement('beforeend', pEl)
    pEl.innerText = text
}
/**
 * 
 * @param {Element} cardsLoad 
 * @param {Number} imgvisible 
 * @param {Element} allCardsLoad 
 * @param {Array} images 
 */
function next(cardsLoad, imgvisible, allCardsLoad, images) {

    remove_class(cardsLoad, imgvisible, allCardsLoad)
    console.log(imgvisible);
    console.log(images.length);

    if (imgvisible == images.length - 1) {
        imgvisible = 0;
    } else {
        imgvisible++;

    }
    console.log(imgvisible);

    add_class(cardsLoad, imgvisible, allCardsLoad)
    return imgvisible
}
function back(cardsLoad, imgvisible, allCardsLoad, images) {
    remove_class(cardsLoad, imgvisible, allCardsLoad)
    console.log(imgvisible);
    console.log(images.length);

    if (imgvisible == 0) {
        imgvisible = images.length - 1;
    } else {
        imgvisible--;
    }
    console.log(imgvisible);

    add_class(cardsLoad, imgvisible, allCardsLoad)
    return imgvisible
}

function remove_class(cardsLoad, imgvisible, allCardsLoad) {
    const imgCurrentVisible = cardsLoad[imgvisible]
    const imgAllCurrentVisible = allCardsLoad[imgvisible]
    imgCurrentVisible.classList.remove('displyon')
    imgAllCurrentVisible.classList.remove('primary')
}
function add_class(cardsLoad, imgvisible, allCardsLoad) {
    const nextimgCurrentVisible = cardsLoad[imgvisible]
    const nextAllImgCurrentVisible = allCardsLoad[imgvisible]
    nextimgCurrentVisible.classList.add('displyon')
    nextAllImgCurrentVisible.classList.add('primary')
}