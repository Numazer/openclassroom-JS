const mots = ['cachalot', 'pétunia', 'serviette']
const phrases = ['pas de panique', 'ok lets go', 'on est bon']

let score = 0

let choisir = prompt(" voulez vous un succcession de phrases ou de mots ? ")
    while(choisir !== "mots" && choisir !== "phrases"){
        let choisir = prompt(" voulez vous un succcession de phrases ou de mots ? ")
    }

console.log("choix")

if(choisir === "mots") {
    for (let i = 0; i < mots.length; i++) {
        let motsutilisateur = prompt("entrez le mot : " + mots[i])
        if (motsutilisateur === mots[i]) {
            score++
        }
    }
    
}

if(choisir ==="phrases"){
    for (let i = 0; i < phrases.length; i++) {
        let phrasesutilisateur = prompt("entrez le phrase : " + phrases[i])
        if (phrasesutilisateur === phrases[i]) {
            score++
        }
    }
}


    console.log("votre score est de : " + score + " sur trois")