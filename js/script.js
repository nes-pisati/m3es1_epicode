// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

function removeTwitter() {
    const container = document.querySelectorAll("ol.list-unstyled a");
    for (i=0; i<= container; i++) {
        if (container.innerHtml === "Twitter") {
            console.log(container);
        }
    }
}

removeTwitter();

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

function removeDiv() {
    const link = document.querySelectorAll("a");
    if (link.innerHtml === "Continua a leggere") {
        link.addEventListener("click", function(){
        
        })
    }
}

removeDiv()

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

function showAlert(){
    alert("Saluta l'autore dell'articolo! :)")
}

function alertName(){
    const name = document.querySelectorAll("main div.blog-post p.blog-post-meta a");
    name.addEventListener("mouseover", showAlert());
}

alertName();