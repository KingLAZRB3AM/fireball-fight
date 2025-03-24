namespace SpriteKind {
    export const OtherPlayer = SpriteKind.create()
    export const OtherProjectile = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Explosiondir2 = 70
    for (let index = 0; index < 4; index++) {
        Expdir2 = -50
        for (let index = 0; index < 7; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), Explosiondir2, Expdir2)
            projectile.setKind(SpriteKind.Projectile)
            Expdir2 += 15
        }
        pause(70)
    }
    pause(5000)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Dir2 = -50
    if (controller.left.isPressed()) {
        direction2 = -50
    } else if (controller.right.isPressed()) {
        direction2 = 50
    } else {
        direction2 = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), direction, Dir1)
    pause(500)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Dir1 = 50
    if (controller.player2.isPressed(ControllerButton.Left)) {
        direction = -50
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        direction = 50
    } else {
        direction = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Dir1 = -50
    if (controller.player2.isPressed(ControllerButton.Left)) {
        direction = -50
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        direction = 50
    } else {
        direction = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    direction = 50
    if (controller.player2.isPressed(ControllerButton.Up)) {
        Dir1 = 50
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        Dir1 = -50
    } else {
        Dir1 = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    direction = -50
    if (controller.player2.isPressed(ControllerButton.Up)) {
        Dir1 = 50
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
        Dir1 = -50
    } else {
        Dir1 = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    direction2 = 50
    if (controller.up.isPressed()) {
        Dir2 = 50
    } else if (controller.down.isPressed()) {
        Dir2 = -50
    } else {
        Dir2 = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), direction2, Dir2)
    projectile.setKind(SpriteKind.OtherProjectile)
    pause(500)
})
sprites.onOverlap(SpriteKind.OtherPlayer, SpriteKind.OtherProjectile, function (sprite2, otherSprite2) {
    mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.One))
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Explosiondir1 = -70
    for (let index = 0; index < 4; index++) {
        Expdir1 = -50
        for (let index = 0; index < 7; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), Explosiondir1, Expdir1)
            projectile.setKind(SpriteKind.OtherProjectile)
            Expdir1 += 15
        }
        pause(70)
    }
    pause(5000)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    direction2 = -50
    if (controller.up.isPressed()) {
        Dir2 = 50
    } else if (controller.down.isPressed()) {
        Dir2 = -50
    } else {
        Dir2 = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Dir2 = 50
    if (controller.left.isPressed()) {
        direction2 = -50
    } else if (controller.right.isPressed()) {
        direction2 = 50
    } else {
        direction2 = 0
    }
})
let Expdir1 = 0
let Explosiondir1 = 0
let Dir1 = 0
let direction = 0
let projectile2: Sprite = null
let direction2 = 0
let Dir2 = 0
let projectile: Sprite = null
let Expdir2 = 0
let Explosiondir2 = 0
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 180
}
tiles.setCurrentTilemap(tilemap`level2`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    ........................
    ........................
    ...........dd...........
    .........dd1d...........
    .....ddddddd...dd.......
    ...dd11d111dddd1d.......
    ..d11bdd11d11bdd........
    .d1db111111d11b..dd.....
    d1b1119ff55551dbd1d.....
    ddd115ff5555551dbdd.....
    db11555555555551db......
    .cbb31bb55555d555b..c...
    .c5333bb55ddddd55dccc...
    .c533b55ddddddddddbc....
    .c5555ddddb55bdddddccc..
    ..ccccbbbb555bdddddccc..
    ...cdcbc5555bddddddcc...
    ....ccbc55bcdddddddbcccc
    .....cbbccbd55dddddddddc
    .....ccbbbd555ddddddddbc
    ...ccbdcbb555ddbbdddbcc.
    ...cbdddcc55ddbbbbccc...
    ...cccccccbdddbccc......
    ........cd555ddc........
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    ........................
    ........................
    ...........996..........
    ...........9688.........
    .......998..6666611.....
    .......68666696999916...
    ........66991999919961..
    .....98..91999699196161.
    .....8669199555ff1599666
    ......6699955555ff559666
    ......999555555555555566
    ...cc.9955dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.OtherPlayer))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(150, 57)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(10, 57)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
mp.setPlayerIndicatorsVisible(true)
forever(function () {
    scene.centerCameraAt((mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x) / 2, (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y + mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y) / 2)
})
