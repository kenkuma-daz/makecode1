scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
	
})
function setStatusBar (aSprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(aSprite, 10, 0)
}
let statusbar: StatusBarSprite = null
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . f f e 4 1 f d d f 1 4 e f . . 
    f d f f e 4 d d d d 4 e f e . . 
    f b f e f 2 2 2 2 e d d 4 e . . 
    f b f 4 f 2 2 2 2 e d d e . . . 
    f c f . f 4 4 5 5 f e e . . . . 
    . f f . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.vy = 200
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 48))
setStatusBar(mySprite)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.stairNorth)) {
        if (controller.up.isPressed()) {
            mySprite.vy = -200
        } else if (controller.down.isPressed()) {
            mySprite.vy = 200
        } else {
            mySprite.vy = 0
        }
    } else {
        if (controller.A.isPressed()) {
            mySprite.vy = -200
        } else {
            mySprite.vy = 200
        }
    }
})
