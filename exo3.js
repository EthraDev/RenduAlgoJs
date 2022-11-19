let div = document.getElementById("baton")
let nbrBaton = 20
let divbaton = document.getElementById("divbaton")
let x = 0


for (i = 0; i < nbrBaton; i++) {
    div.innerHTML += "<div id='divbaton'></div>"
}


div.addEventListener("click", function(){

    console.log(x)

    if (x < 3) {

        nbrBaton -= 1

        div.innerHTML = ""
        
        for (i = 0; i < nbrBaton; i++) {

            div.innerHTML += "<div id='divbaton'></div>"
            
            console.log(nbrBaton)

        }

        x += 1

    }

})

function passer() {
    if (x >= 3) {
        x = 0
    }
}