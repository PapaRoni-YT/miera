input.onButtonPressed(Button.A, function () {
    if (ESPRAIT.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        basic.pause(500)
        game.gameOver()
    }
})
let ESPRAIT: game.LedSprite = null
ESPRAIT = game.createSprite(2, 2)
basic.forever(function () {
    ESPRAIT.ifOnEdgeBounce()
    basic.pause(100)
    ESPRAIT.move(1)
})
