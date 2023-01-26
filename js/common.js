function genererLogo(cheminRacine) {
    let logo = document.createElement("img");
    logo.setAttribute("src", cheminRacine + "/images/logo.png");
    logo.setAttribute("alt", "logo du site Algomius.fr");
    logo.setAttribute("title", "Logo Algomius.fr");
    logo.classList.add("logo");
    return logo;
}

function genererLienAccueil(cheminRacine) {
    let lienAccueil = document.createElement("a");
    lienAccueil.setAttribute("href", cheminRacine + "/index.html");
    lienAccueil.textContent = "Accueil";
    return lienAccueil; 
}

function genererLienProjet(cheminRacine) {
    let lienProjet = document.createElement("a");
    lienProjet.setAttribute("href",  cheminRacine + "/documentation/documentation.html");
    lienProjet.textContent = "Projet";
    return lienProjet;
}

function genererLienLegal(cheminRacine) {
    let lienLegal = document.createElement("a");
    lienLegal.setAttribute("href",  cheminRacine + "/documentation/mentionsLegales.html");
    lienLegal.textContent = "Mentions légales";
    return lienLegal;
}

function genererLienMail() {
    let lienMail = document.createElement("a");
    lienMail.setAttribute("href", "mailto:contact@algomius.fr");
    lienMail.textContent = "Contacts";
    return lienMail;
}

function genererLienYoutube() {
    let lienYoutube = document.createElement("a");
    lienYoutube.setAttribute("href", "https://www.youtube.com/@algomius");
    lienYoutube.setAttribute("target", "_blank");
    lienYoutube.setAttribute("rel", "noopener noreferrer");
    lienYoutube.textContent = "Youtube"; 
    return lienYoutube;
}

function genererLienTwitter() {
    let lienTwitter = document.createElement("a");
    lienTwitter.setAttribute("href", "https://twitter.com/Algomius_");
    lienTwitter.setAttribute("target", "_blank");
    lienTwitter.setAttribute("rel", "noopener noreferrer")
    lienTwitter.textContent = "Twitter";
    return lienTwitter;
}

function genererEntete(cheminRacine) {
    /* Vider le contenu de l'entête */
    let entete = document.getElementById("entete");
    while (entete.firstChild) {
        entete.removeChild(entete.firstChild);
    }

    /* Logo */
    entete.appendChild(genererLogo(cheminRacine));

    /* Navigation */
    let navigation = document.createElement("nav");
    navigation.setAttribute("id", "menu")

    /* Bouton Accueil */
    lienAccueil = genererLienAccueil(cheminRacine);
    lienAccueil.classList.add("bouton");
    navigation.appendChild(lienAccueil);

    /* Bouton Youtube */
    let lienYoutube = genererLienYoutube();
    lienYoutube.classList.add("bouton");
    navigation.appendChild(lienYoutube);

    /* Bouton Projet */
    let lienProjet = genererLienProjet(cheminRacine);
    lienProjet.classList.add("bouton");
    navigation.appendChild(lienProjet);

    entete.appendChild(navigation);
}

function genererPied(cheminRacine) {
    /* Vider le contenu du pied */
    let pied = document.getElementById("pied");
    while (pied.firstChild) {
        pied.removeChild(pied.firstChild);
    }  

    /* Plan du site */
    let plan = document.createElement("div");
    plan.classList.add("footer-element");

    let planTitre = document.createElement("h2");
    planTitre.textContent = "Plan du site";
    plan.appendChild(planTitre);

    let planListe = document.createElement("div");
    planListe.classList.add("footer-element-list");
    
    planListe.appendChild(genererLienAccueil(cheminRacine));
    planListe.appendChild(genererLienYoutube());
    planListe.appendChild(genererLienProjet(cheminRacine));

    plan.appendChild(planListe);

    pied.appendChild(plan);

    /* Réseaux */
    let reseau = document.createElement("div");
    reseau.classList.add("footer-element");

    let reseauTitre = document.createElement("h2");
    reseauTitre.textContent = "Réseaux";
    reseau.appendChild(reseauTitre);

    let reseauListe = document.createElement("div");
    reseauListe.classList.add("footer-element-list");
    reseauListe.appendChild(genererLienYoutube());
    reseauListe.appendChild(genererLienTwitter());

    reseau.appendChild(reseauListe);

    pied.appendChild(reseau);

    /* Contact */

    let contact = document.createElement("div");
    contact.classList.add("footer-element");

    contact.appendChild(genererLogo(cheminRacine));

    let contactListe = document.createElement("div");
    contactListe.classList.add("footer-element-list");
    contactListe.appendChild(genererLienLegal(cheminRacine));
    contactListe.appendChild(genererLienMail());

    contact.appendChild(contactListe);

    pied.appendChild(contact);
}

if (typeof cheminRacine != "undefined" )
{
    genererEntete(cheminRacine);
    genererPied(cheminRacine);
}