const mots = ['cachalot', 'pétunia', 'serviette']
const phrases = ['pas de panique', 'ok lets go', 'on est bon']

let score = 0

   function afficherResultat(nbDeMotsProposés, score){
        console.log("votre score est de : " + score + " sur trois" + nbDeMotsProposés )
    }

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

    function lancerJeu(){
        let choisir = choisirMotsOuPhrases()
        let score = 0
        let nbDeMotsProposés = 0

        if (choisir === 'mots') {
            boucleDeJeu(mots)
            nbDeMotsProposés = mots.length
        } else {
            boucleDeJeu(phrases)
            nbDeMotsProposés = phrases.length
        }
        afficherResultat(score, nbDeMotsProposés)
    }

lancerJeu();