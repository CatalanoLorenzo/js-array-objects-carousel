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
const colEl = document.querySelector('.col-3')
const backButton = document.querySelector('.back_button')
const nextButton = document.querySelector('.next_button')
let imgvisible = 0

images.forEach((array,index) => {
    const src = array.image
    const title = array.title
    const text = array.text
    const numberorder = index
    console.log(src)
    Generat_input_card(src,title,text,imgvisible,numberorder)
})

const cardsLoad = document.querySelectorAll('.card');

nextButton.addEventListener('click', function () {
    const imgCurrentVisible = cardsLoad[imgvisible]
    console.log(imgCurrentVisible);

    imgCurrentVisible.classList.remove('displyon')
    if (imgvisible == images.length - 1) {
        imgvisible = 0;
    }else{
        imgvisible++;
    }
    const nextAllImgEl = cardsLoad[imgvisible]
    nextAllImgEl.classList.add('displyon')
});

backButton.addEventListener('click', function () {
    const imgCurrentVisible = cardsLoad[imgvisible]
    console.log(imgCurrentVisible);

    imgCurrentVisible.classList.remove('displyon')
    if (imgvisible == 0) {
        imgvisible = images.length - 1;
    }else{
        imgvisible--;
    }
    const nextAllImgEl = cardsLoad[imgvisible]
    nextAllImgEl.classList.add('displyon')
});










function Generat_input_card(srcimg,title,text,imgvisible,numberorder) {
    const cards = document.createElement('div')
    
    if (numberorder == imgvisible) {
        cards.classList.add('card','displyon','primary')
    }else{
        cards.classList.add('card',)
    }
    colEl.insertAdjacentElement('beforeend',cards)
    
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')
    cards.insertAdjacentElement('beforeend',cardHeader)

    const h1El = document.createElement('h1')
    cardHeader.insertAdjacentElement('beforeend',h1El)
    h1El.innerText = title

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    cards.insertAdjacentElement('beforeend',cardBody)

    const imgEl = document.createElement('img')
    cardBody.insertAdjacentElement('beforeend',imgEl)
    imgEl.src = `./asset/${srcimg}`
   
    const pEl = document.createElement('p')
    pEl.innerText = text
}