scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(0, 落下速度)
})
function setStatusBar (aSprite: Sprite) {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(aSprite, 10, 0)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.Octuple)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 落下速度)
})
let statusbar: StatusBarSprite = null
let 落下速度 = 0
let myMinimap: minimap.Minimap = null
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
myMinimap = minimap.minimap()
let mapSprite = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 落下速度)
mySprite.setVelocity(0, 落下速度)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
setStatusBar(mySprite)
scene.cameraFollowSprite(mySprite)
落下速度 = 100
