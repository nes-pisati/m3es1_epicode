// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

function removeTwitter() {
    const container = document.querySelectorAll("ol.list-unstyled a");
    for (i=0; i<=container.length; i++){
        if (container.innerHtml === "Twitter") {
            container.style.display = "none";
        }
    }
}

removeTwitter();

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".



// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

function showAlert(){
    alert("Saluta l'autore di questo post! :)")
} 

function alertName(){
    const name = document.querySelectorAll("p.blog-post-meta a")
    //console.log(name);
    for (i=0; i<=name.length; i++){
        name[i].addEventListener("mouseover", showAlert())
    }
}
    

//alertName()