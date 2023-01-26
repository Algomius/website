/* Fonction qui génère les dernières mises à jour du site sur la page d'accueil */
function genererActualite() {
    /* Vider le contenu de la section d'actualite */
    let actualite = document.getElementById("actualite");
    while (actualite.firstChild) {
        actualite.removeChild(actualite.firstChild);
    }  

    /* Ajout du titre h2 dans les actualités */
    let actuTitre = document.createElement("h2");
    actuTitre.textContent = "Actualité et derniers ajouts";
    actualite.appendChild(actuTitre);

    /* Création de la liste des derniers événements */
    let actuListe = document.createElement("ul");

    /* Parcourir les données d'actualité */
    for (let nouvelle of actu) {
        let actuListeEle = document.createElement("li");
        actuListeEle.innerHTML = "<span class=\"important\">" + nouvelle.date + "</span>" ;
        actuListeEle.innerHTML += nouvelle.avantLien;
        if (nouvelle.lienExterne) {
            actuListeEle.innerHTML += "<a href=\"./documentation/documentation.html\" target=\"_blank\" rel=\"noopener noreferrer\">" + nouvelle.libLien + "</a>";
        } else {
            actuListeEle.innerHTML += "<a href=\"./documentation/documentation.html\">" + nouvelle.libLien + "</a>";
        }
        actuListeEle.innerHTML += nouvelle.apresLien; 
        actuListe.appendChild(actuListeEle);
    } 

    actualite.appendChild(actuListe);
}

/* Fonction qui génère les vignettes des catégories */
function genererVignettes() {
    /* Vider le contenu de la section vidéo */
    let video = document.getElementById("video");
    while (video.firstChild) {
        video.removeChild(video.firstChild);
    }  

    /* Ajout du titre h2 dans les vidéos */
    let videoTitre = document.createElement("h2");
    videoTitre.textContent = "Vidéo par thème";
    video.appendChild(videoTitre);

    /* Création de la liste des derniers événements */
    let videoListe = document.createElement("div");
    videoListe.setAttribute("id", "video-list")

    /* Parcourir les données d'actualité */
    for (let categorie of cate) {
        let videoListeEle = document.createElement("a");
        videoListeEle.setAttribute("href", categorie.lienCate);
        videoListeEle.classList.add("video-card");

        /* Ajout de l'image */
        let imageEle = document.createElement("img");
        imageEle.classList.add("video-card-img");
        imageEle.setAttribute("src",categorie.image.source);
        imageEle.setAttribute("alt",categorie.image.alt);
        imageEle.setAttribute("title",categorie.image.titre);
        videoListeEle.appendChild(imageEle);

        /* Ajout du titre */
        let titreEle = document.createElement("h3");
        titreEle.textContent = categorie.nomCate;
        videoListeEle.appendChild(titreEle);

        videoListe.appendChild(videoListeEle);
    } 

    video.appendChild(videoListe);
}

genererActualite();
genererVignettes();