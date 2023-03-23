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


//Milestone 0:
// creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
/** Generate into row :col>img+src
 * genera una collonna con dentro una immagine 
 *  <div class="col">
        <img src="" alt="">
    </div>
 */
function generate_row_col_img_src(percorsoImg) {
    //associa rowEl all'elemento del document con classe row
    const rowEl = document.querySelector('.row')
    //genera un div
    const colEl = document.createElement('div')
    //aggiunge una classe al tag 'div'
    colEl.classList.add('col')
    //genera un tag img 
    const imgEl = document.createElement('img')
    //genera un src per img 
    imgEl.src = `./asset/img/${percorsoImg}`
    //inserisce prima della chiusura del 'div' con classe row il 'div' col
    rowEl.insertAdjacentElement('beforeend',colEl)
    //inserisce prima della chiusura del 'div' con classe col il tag img
    colEl.insertAdjacentElement('beforeend',imgEl)
}
