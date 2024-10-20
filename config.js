function choisirMotsOuPhrases(){
    let choisir = prompt(" voulez vous une succcession de phrases ou de mots ? ")
while(choisir !== "mots" && choisir !== "phrases"){
    let choisir = prompt(" voulez vous une succcession de phrases ou de mots ? ")
}
return choisir
}

function boucleDeJeu (listeProposition){
        for (let i = 0; i < listeProposition.length; i++) {
            let motsutilisateur = prompt("entrez le mot : " + listeProposition[i])
            if (motsutilisateur === listeProposition[i]) {
                score++
            }
    }
    return score
}
