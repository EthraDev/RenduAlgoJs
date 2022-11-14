class Personnage {
    constructor(name, mentalHealth) {
        this.name = name
        this.mentalHealth = mentalHealth
    }

}

let music = ["Anissa - Wejdene", "Enemy - Imagine Dragons", "Feel Good Inc. - Gorillaz", "Sunshine - OneRepublic", "Get Lucky - Daft Punk"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}



let Personnage1 = new Personnage("Celian", 10)

feux = 30

while (feux > 0) {
    
    feux -= 1

    const song = music[getRandomInt(music.length)]

    console.log(song)

    if (song == music[0]) {
        Personnage1.mentalHealth -= 1
        console.log(Personnage1.name + " a " + Personnage1.mentalHealth + " de santé mentale.")
    } else {
        console.log(Personnage1.name + " a " + Personnage1.mentalHealth + " de santé mentale.")
    } 
    
    if (Personnage1.mentalHealth == 0) {
        console.log("EXPLOSION")
        break
    }

}