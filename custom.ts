/**
 * Custom blocks
 */
//%block="山谷的故事" 
//% weight=100 color=#0fbc11 icon=""
namespace custom {


    //%blockid=customreturnaxe block="放好斧头"
    //%group="基础"
    export function returnAxe() {
        let brozenAxeSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . b . . e e . . . . . . . 
        . . . b f b e e e . . . . . . . 
        . . . b f f e b b b b b b b . . 
        . . . b f e f f f f f f f b . . 
        . . . b e f f f f f f f f b . . 
        . . . . e f f f f f f f f b . . 
        . . . . e f f f f f f f f b . . 
        . . . e e b f f f f f f f b . . 
        . . . e . . f f f f f f b . . . 
        . e e e . . . b b f f c . . . . 
        e e e . . . . . . b b . . . . . 
        e e . . . . . . . . . . . . . . 
        e e . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.BronzeAxe)
        tiles.placeOnTile(brozenAxeSprite, tiles.getTileLocation(4, 1))
    }

    //%blockid=custompreparescene block="准备农庄"
    //%group="基础"
    export function prepareScene() {
        tiles.setTilemap(tilemap`level1`)
        let homeSprite = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Home)
        tiles.placeOnTile(homeSprite, tiles.getTileLocation(1, 1))
    }

    //%blockid=customreturnfishingrod block="放好鱼竿"
    //%group="高级"
    export function returnFishingRod() {
        let fishingRodSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . e e f f . . . 
        . . . . . . . . . e . . f . . . 
        . . . . . . . . e e . . f . . . 
        . . . . . . . . e e . . f . . . 
        . . . . . . . e e . . . f . . . 
        . . . . . . . e e . . . f . . . 
        . . . . . . . e . . . . f . . . 
        . . . . . . e e . . . . f . . . 
        . . . . . . e e . . . . f . . . 
        . . . . . e e . . . . . f . . . 
        . . . . . e e . . . . . f . . . 
        . . . . . e . . . . . . f 2 2 . 
        . . . . e e . . . . . . . 2 2 1 
        . . . . e e . . . . . . . . 1 1 
        `, SpriteKind.钓鱼竿类型)
        tiles.placeOnTile(fishingRodSprite, tiles.getTileLocation(5, 1))
    }

    //%blockid=customreturnpickaxe block="放好镐"
    //%group="高级"
    export function returnPickaxe() {
        let pickaxeSprite = sprites.create(img`
            . . . . . . . . . . e e . . . .
            . . . . . . . . 1 1 1 e . . . .
            . . . . . 1 1 1 f f f 1 . . . .
            . . 1 1 1 f f f f f f f 1 1 . .
            . 1 f f f f f f e e f f f f 1 .
            1 f f f f f . . e e . . f f f 1
            f f . . . . . e e f . . . f f f
            f . . . . . . e e . . . . f f f
            . . . . . . . e f . . . . . f f
            . . . . . . e e . . . . . . f .
            . . . . . . e e . . . . . . . .
            . . . . . e e f . . . . . . . .
            . . . . . e e . . . . . . . . .
            . . . . . e f . . . . . . . . .
            . . . . e e . . . . . . . . . .
            . . . . e e . . . . . . . . . .
        `, SpriteKind.挖矿镐类型)
        tiles.placeOnTile(pickaxeSprite, tiles.getTileLocation(6, 1))
    }

    //%blockid=customplanttrees block="种好树"
    //%group="基础"
    export function plantTrees() {
        for (let 值 of tiles.getTilesByType(assets.tile`treeTile`)) {
            let treeSprite = sprites.create(img`
        ......cc66......
        .....c6576c.....
        ....c677576c....
        ....cc677666....
        ...cc6c6667cc...
        ..6c666777cc6c..
        ..c76666766776..
        ..c6777777776c..
        ..cc67777776cc..
        .c67cc76676676c.
        .c777666667777c.
        .c6777777777766.
        .cc7767776776666
        c676cc6766666776
        c777766666677776
        cc7777777777776c
        .c676777677767c.
        ..cc667666766c..
        ...ccc6c66ccc...
        .....cccccc.....
        .......ee.......
        ......eeee......
        .....eeeeee.....
        .......ee.......
        `, SpriteKind.tree)
            tiles.placeOnTile(treeSprite, 值)
        }
    }

    //%blockid=customplaceboulders block="布置矿脉"
    //%group="高级"
    export function placeBoulders() {
        for (let 值 of tiles.getTilesByType(assets.tile`boulderTile`)) {
            let boulderSprite = sprites.create(img`
                . . . . . . . . b b b b b . . .
                . . . . . . b b f f f f b b . .
                . . . . . b f f f f f f f c . .
                . . . . c f f f f f f f f c . .
                . . . c b f f f f f f f b c c .
                . . . c b b f f f f b c c c c .
                . . c c f b b b c c c c c c c .
                . . c c c f f f f c c f f f c c
                . c f b c c b b c c f f f f f c
                . c b f f b b b c c f f f f f c
                . c c b b b b f b c b f f f b c
                f b b f f f f f b b b b b c c c
                f f b b f f f f f f f f f f b c
                f f f f f f b b b b b c c c c c
                f f f f f f f b b b b b c c c c
                f f f f f f f f b b b b b c c c
            `, SpriteKind.矿脉类型)
            tiles.placeOnTile(boulderSprite, 值)
        }
    }

    //%blockid=customplacefishingplatform block="搭好钓鱼台"
    //%group="高级"
    export function placeFishingPlatform() {
        let fishingPlatformSprite = sprites.create(
            assets.image`myImage`, SpriteKind.钓鱼台类型
        )
        tiles.placeOnTile(fishingPlatformSprite, tiles.getTileLocation(6, 3))
    }

}
