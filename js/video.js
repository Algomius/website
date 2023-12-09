function genererPageVideo(categorie, data) {
    var cateJSON = data.find(t=>t.idCate === categorie);

    /* Modification des informations du head */
    document.querySelector('meta[name="description"]').setAttribute("content", cateJSON.description);
    document.title = cateJSON.titre;

    /* Vider le contenu du main */
    let principal = document.getElementById("principal");
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    /* Ajout du titre h1 dans la partie principal */
    let principalTitre = document.createElement("h1");
    principalTitre.textContent = cateJSON.nomCate;
    principal.appendChild(principalTitre);

    let indiceSection = 1;

    /* Ajout des sections */
    for (let c of cateJSON.sections) {
        var secJSON = sectionData.find(s=>s.idSection === c);
        console.log(secJSON);
        let section = document.createElement("section");
        if (indiceSection % 2 == 1) {
            section.classList.add("section-impair");
        } else {
            section.classList.add("section-pair");
        }
        indiceSection++;

        /* Image de la section */
        let image = document.createElement("img");
        image.classList.add("section-img");
        image.setAttribute("src", secJSON.imageSection.source);
        image.setAttribute("alt", secJSON.imageSection.alt);
        image.setAttribute("title", secJSON.imageSection.titre);
        section.appendChild(image);

        /* Texte de la section */
        let texte = document.createElement("div");
        texte.classList.add("section-text");
        let texteTitre = document.createElement("h2");
        texteTitre.textContent = secJSON.nomSection;
        texte.appendChild(texteTitre);

        let texteListe = document.createElement("ul");

        for (let v of secJSON.videos) {
            let texteElement = document.createElement("li");
            texteElement.innerHTML = "<a href=" + v.lienVideo + " target=\"_blank\" rel=\"noopener noreferrer\">" + v.nomVideo + "</a>";
            texteListe.appendChild(texteElement);
        }

        texte.appendChild(texteListe);
        section.appendChild(texte);
        principal.appendChild(section);
    }
}

const url = new URL(document.location);
const searchParams = url.searchParams;

if (searchParams.has('categorie')) {
    genererPageVideo(searchParams.get('categorie'), cate);
}
else if (searchParams.has('formation')) {
    genererPageVideo(searchParams.get('formation'), formation);
}
