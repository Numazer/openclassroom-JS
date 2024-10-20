const mots = ['cachalot', 'pétunia', 'serviette']
const phrases = ['pas de panique', 'ok lets go', 'on est bon']

let score = 0

   function afficherResultat(nbDeMotsProposés, score){
        console.log("votre score est de : " + score + " sur trois" + nbDeMotsProposés )
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

    let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);