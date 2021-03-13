function setStatusBar (aSprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(aSprite, 10, 0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 30))
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
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
