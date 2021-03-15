scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(true)
})
function setStatusBar (aSprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(aSprite, 10, 0)
}
function まぐまを表示 (行: number) {
    for (let index = 0; index <= 15; index++) {
        tiles.setTileAt(tiles.getTileLocation(index, 行), sprites.dungeon.hazardLava1)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 落下速度)
})
let まぐまの高さ = 0
let statusbar: StatusBarSprite = null
let 落下速度 = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
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
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 落下速度)
mySprite.setVelocity(0, 落下速度)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
setStatusBar(mySprite)
scene.cameraFollowSprite(mySprite)
落下速度 = 100
let textSprite = textsprite.create("あふん", 10, 2)
forever(function () {
    まぐまの高さ = まぐまの高さ + 1
    まぐまを表示(まぐまの高さ)
    pause(500)
})
