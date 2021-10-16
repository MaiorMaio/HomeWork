document.addEventListener('DOMContentLoaded', () => {
    let arenas = document.querySelector('.arenas')
    let button = document.querySelector('.button')

    const attack = function (name) {
        console.log(name + " Fight...")
    }
    let player1 = {
        player: 1,
        name: 'SCORPION',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack() {
            attack(this.name)
        }
    }
    let player2 = {
        player: 2,
        name: 'KITANA',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
        weapon: [],
        attack() {
            attack(this.name)
        }
    }
    let getRandomNumber = () => {
        return Math.ceil(Math.random() * 20)
    }
    let changeHP = (player) => {
        let playerLive = document.querySelector('.player' + player.player + ' .life')
        player.hp -= getRandomNumber()
        if (player.hp <= 0) {
            player.hp = 0
        }
        playerLive.style.width = player.hp + '%'        
    }
    // let playerLose = (name) => {
    //     let loseTitle = createElement('div', 'loseTitle')
    //         loseTitle.innerHTML = name + ' LOSE! '
    //     arenas.appendChild(loseTitle)
    //     button.disabled = true
    // }
    let playerWins = (name) => {
        let loseTitle = createElement('div', 'loseTitle')
            name ? (loseTitle.innerHTML = name + ' WIN') : (loseTitle.innerHTML = 'РАУНД ВНИЧЬЮ')
        button.disabled = true
        arenas.appendChild(loseTitle)
    }
   
    button.addEventListener('click', () => {
        changeHP(player1)
        changeHP(player2)

        if (player1.hp === 0 || player2.hp === 0) {
            if(player1.hp === player2.hp){
                playerWins()
            } else {
                player1.hp === 0 ? playerWins(player2.name) : playerWins(player1.name)
            }
        }
      
    })
    let createElement = (el, className) => {
        let element = document.createElement(el)
        className && element.classList.add(className)
        return element
    }
    function createPlayer(player) {
        let div = createElement('div', 'player' + player.player)
        let progressbar = createElement('div', 'progressbar')
        let divLife = createElement('div', 'life')
            divLife.style.width = player.hp + '%'

        let divName = createElement('div', 'name')
            divName.innerHTML = player.name

        progressbar.appendChild(divLife)
        progressbar.appendChild(divName)

        let character = createElement('div', 'character')

        let img = createElement('img')
            img.setAttribute('src', player.img)

        character.appendChild(img)
        div.appendChild(progressbar)
        div.appendChild(character)

        arenas.appendChild(div)
    }
    createPlayer(player1)
    createPlayer(player2)

})