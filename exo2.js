class Tueur {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

class Survivant {
    constructor(name, cliché, Caractéristique) {
        this.name = name
        this.cliché = cliché
        this.Caractéristique = Caractéristique
    }
}

class Caractéristique {
    constructor(ProbaDie, ProbaDamage, ProbaDieDamage) {
        this.ProbaDie = ProbaDie
        this.ProbaDamage = ProbaDamage
        this.ProbaDieDamage = ProbaDieDamage
    }
}

let prenom = ["Pamela", "Brandon", "Jessica", "Bryan", "Myke", "Emily", "Ashley", "Matt", "Josh", "Jackson", "Noah", "Elia", "Mia"]

let cliche = ["nerd", "blonde", "conne", "sportif", "basketteur", "loveur", "artiste", "renfermé", "hypocrite"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function randBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let Survivants = []
let save = []

for (let i = 0; i < 5; i++) {

    let proba1 = randBetween(0, 100)
    let proba2 = randBetween(0, 100 - proba1)
    let proba3 = 100 - proba1 - proba2

    Survivants.push(new Survivant(prenom[getRandomInt(prenom.length)], cliche[getRandomInt(cliche.length)], new Caractéristique(proba1 / 100, proba2 / 100, proba3 / 100)))
}

Survivants.forEach(element => save.push(element));

console.log(save)

const Tueur1 = new Tueur("Jason", 100)

let personnage = []

while (Tueur1.hp > 0 && Survivants.length > 0) {

    let rand = Math.random()

    const perso = Survivants[0]

    if (rand <= perso.Caractéristique.ProbaDie) {
        console.log(Tueur1.name + " a tué " + perso.name)
        personnage.push(Survivants[0].name)
        Survivants.shift()
    } else if (rand > perso.Caractéristique.ProbaDie && rand <= perso.Caractéristique.ProbaDie + perso.Caractéristique.ProbaDamage) {
        Tueur1.hp -= 10
        console.log(perso.name + " a infligé 10 points de dégats et le tueur a " + Tueur1.hp)
    } else {
        Tueur1.hp -= 15
        console.log(Tueur1.name + " a tué " + perso.name + ". " + Tueur1.name + " a " + Tueur1.hp + " de points de vie.")
        personnage.push(Survivants[0].name)
        Survivants.shift()
    }


    if (Tueur1.hp <= 0) {
        console.log("Les survivants ont gagné mais RIP à " + personnage)
    }
    
    if (Survivants.length == 0) {
        console.log("Jason a tué tout le monde")
    }
}

