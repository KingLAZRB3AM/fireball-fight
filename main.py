@namespace
class SpriteKind:
    OtherPlayer = SpriteKind.create()
    OtherProjectile = SpriteKind.create()

def on_player2_button_a_pressed():
    global projectile2
    projectile2 = sprites.create_projectile_from_sprite(img("""
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
        """),
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)),
        direction,
        randint(-10, 10))
    pause(500)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_on_overlap(sprite, otherSprite):
    mp.game_over_player_win(mp.player_selector(mp.PlayerNumber.TWO))
    mp.change_player_state_by(mp.player_selector(mp.PlayerNumber.ONE),
        MultiplayerState.score,
        1)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_player2_button_right_pressed():
    global direction
    direction = 50
controller.player2.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_right_pressed)

def on_player2_button_left_pressed():
    global direction
    direction = -50
controller.player2.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_left_pressed)

def on_player1_button_right_pressed():
    global direction2
    direction2 = 50
controller.player1.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_right_pressed)

def on_player1_button_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)),
        direction2,
        randint(-10, 10))
    projectile.set_kind(SpriteKind.OtherProjectile)
    pause(500)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_on_overlap2(sprite2, otherSprite2):
    mp.game_over_player_win(mp.player_selector(mp.PlayerNumber.ONE))
    mp.change_player_state_by(mp.player_selector(mp.PlayerNumber.TWO),
        MultiplayerState.score,
        1)
sprites.on_overlap(SpriteKind.OtherPlayer,
    SpriteKind.OtherProjectile,
    on_on_overlap2)

def on_player1_button_left_pressed():
    global direction2
    direction2 = -50
controller.player1.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_left_pressed)

projectile: Sprite = None
direction2 = 0
direction = 0
projectile2: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.ONE),
    sprites.create(img("""
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
        """),
        SpriteKind.player))
mp.set_player_sprite(mp.player_selector(mp.PlayerNumber.TWO),
    sprites.create(img("""
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
        """),
        SpriteKind.OtherPlayer))
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.ONE), 100, 100)
mp.move_with_buttons(mp.player_selector(mp.PlayerNumber.TWO), 100, 100)
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_position(150, 57)
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_position(10, 57)
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).set_stay_in_screen(True)
mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).set_stay_in_screen(True)

def on_forever():
    scene.center_camera_at((mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).x + mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).x) / 2,
        (mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.ONE)).y + mp.get_player_sprite(mp.player_selector(mp.PlayerNumber.TWO)).y) / 2)
forever(on_forever)
