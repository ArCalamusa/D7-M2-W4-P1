/* ESERCIZIO 1: Scrivi una funzione per cambiare il titolo del documento in qualcos'altro.*/

const changeTitle = function (newTitle) {
    const title = document.querySelector('h1');
    // selezionato l'elemento h1 usando il query selector che dopo assegna una
    // costante a h1
    title.innerText = newTitle;

}
changeTitle('Questo è il nuovo titolo');
//chiama la funzione e passa la riga del nuovo h1

/* ESERCIZIO 2: Scrivi una funzione per cambiare la classe del titolo della pagina in "myHeading".*/

const addClassToTitle = function () {
    const title = document.querySelector('h1');
    //selezionato l'h1 e assegna costante chiamata title
    title
        .classList
        .remove('myClass');
    //rimuove la classe css
    title
        .classList
        .add('myHeading');
    //aggiunge la classe css myHeading
}
addClassToTitle();

/* ESERCIZIO 3: Scrivi una funzione per cambiare il contenuto di tutti i p che sono discendenti di un div*/

const changePcontent = function (newContent) {
    let paragrafi = document.querySelectorAll("div p");
    for (let paragrafo of paragrafi) {
        paragrafo.textContent = newContent
    }
}
changePcontent("nuovo contenuto");

/* ESERCIZIO 4:Scrivi una funzione per cambiare la proprietà href di ogni link a https://www.google.com*/

const changeUrls = function () {
    let links = document.querySelectorAll("a");
    //se voglio un elemento specifico devo usare document.getElementByTagName
    for (let link of links) {
        link.setAttribute("href", "https://www.google.com");
    }
}
chargeUrls();

/* ESERCIZIO 5:Scrivi una funzione per aggiungere un nuovo elemento alla seconda lista non-ordinata.*/

const addToTheSecond = function (content) {
    //dichaira cost anonima che prende un solo elemento
    document.querySelector('#secondList');
    // const ul = document.querySelectorAll(ul)[1] altro metodo ul.innerHTML +=
    // `<li>${content}</li>` $ manipola il domm
    const li = document.createElement('li');
    //crea un nuovo elemento li
    li.innerText = 'new list'
    //imposta il testo interno dell'elemento di li
    ul.appendChild(li) // no virgolette
    //aggiunge un elemento li come figlio all'elemento selezionato in precedenza
}
addToTheSecond();
//chiama la funzione

/* ESERCIZIO 6: Scrivi una funzione per aggiungere un secondo paragrafo al primo div.*/

const addParagraph = function (content) {
    let div1 = document.querySelectorAll('div')[0]
    let newP = document.createElement('p')
    newP.innerText = 'testo'
    div.appendChild(newP)
    //
}
addParagraph()

/* ESERCIZIO 7: Scrivi una funzione per far scomparire la prima lista non-ordinata.*/

const firstUlDisappear = function () {
    const firstList = document.querySelectorAll('ul')[0];
    firstList.remove();

}
firstUlDisappear();

/* ESERCIZIO 8: Scrivi una funzione per rendere verde lo sfondo di ogni lista non-ordinata.*/

const paintItGreen = function () {
    const list = document.querySelectorAll('ul');
    for (let list of list) {
        list.style.backgroundColor = "green";
    }

}
paintItGreen();

/* ESERCIZIO 9: Rendi il tag h1 capace di cambiare colore del testo ogni volta che l'utente ci clicca sopra.*/

const makeItClickable = function () {
    document
        .getElementsByTagName("h1")[0]
        .addEventListener("click", function (e) {
            //seleziona tag h1 aggiunge funzione al click che genera un colore casuale
            const randoColor = "#" + (
                Math.floor(Math.random() * 16777215).toString(16)
            );
            //il # con il 16 dice che dev'essere esadecimale e generare un colore a caso
            e.target.style.color = randoColor
        })
}
makeItClickable();

/* ESERCIZIO 10: Cambia il testo del footer con qualcos'altro quando l'utente ci clicca sopra.*/

const changeFooterText = function () {
    const footer = document.querySelector('footer')
    //selezioniamo l'elemento nel dom
    footer.addEventListener("click", function (e) {
        //registra un evento "clik" sul foot che viene eseguito ad ogni clik
        e.target.innerText = "hello world"
        //cambia il testo del target ad ogni evento con la stringa inserita
    })
}
changeFooterText();

/* ESERCIZIO 11: Aggiungi un event listener al campo di testo nella pagina e fai in modo che dopo ogni lettera il suo valore venga mostrato in console.*/

/* VERSIONE DEPRECATA
    const inputField = document.querySelector("#input-field")
            inputField.onkeydown = function(event) {
                console.log(event) // always experiment
                console.log(event.target) // our HTML <input />
                console.log(event.target.value) // whatever you wrote in the box
                document.createElement("div").innerHTML etc. etc. etc.
            }*/

inputField.addEventListener("keydown", function (event) {
    // registra evento keydown e fornisce una funzione di gestore di eventi che
    // verra eseguita ognivolta che l'elemento keydown verrà attivato
    console.log(event) // always experiment
    console.log(event.target) // our HTML <input />
    console.log(event.target.value) // whatever you wrote in the box
    document.createElement("div").innerHTML etc. etc. etc.
    })

const inputField = document.querySelector('#input-field')
inputField.addEventListener('keydown', function (e) {
    console.log(e.target.value)
})
// inputField.onkeypress = function(e)

/* ESERCIZIO 12: Crea un messaggio di benvenuto con un alert quando la pagina ha finito di caricarsi.*/

window.onload = function () {
    alert("Benvenuto!")
}