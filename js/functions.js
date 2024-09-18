const dice = document.querySelector('#dice')

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min
}

dice.addEventListener('click',() => {
    const randomizeNumber = getRandomIntNumberInRange(1,6)

    const diceImage = dice.querySelector('img');

    diceImage.src = `./kuvat/${randomizeNumber}.png` ;
})

