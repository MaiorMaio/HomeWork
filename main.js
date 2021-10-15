document.addEventListener('DOMContentLoaded', () => {
    const attack = function(name){
        console.log(name + " Fight...")
    }
    let player1 = {
        name : 'SCORPION',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack() {
            attack(this.name)
        }
    }
    let player2 = {
        name : 'KITANA',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        weapon: [],
        attack(){
            attack(this.name)
        }
    }

    function createPlayer(className, player){
        let div = document.createElement('div')
            div.classList.add(className)

        let progressbar  = document.createElement('div')
            progressbar.classList.add('progressbar')

        let divLife  = document.createElement('div')
            divLife.classList.add('life')
            divLife.style.width = player.hp+'%'

        let divName  = document.createElement('div')
            divName.classList.add('name')
            divName.innerHTML = player.name

        progressbar.appendChild(divLife)
        progressbar.appendChild(divName)
    
        let character  = document.createElement('div')
            character.classList.add('character')

        let img = document.createElement('img')
            img.setAttribute('src', player.img)
        character.appendChild(img)

        div.appendChild(progressbar)
        div.appendChild(character)

        document.querySelector('.arenas').appendChild(div)
    } 
    createPlayer('player1', player1)
    createPlayer('player2', player2)

})