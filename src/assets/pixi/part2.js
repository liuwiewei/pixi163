import createSprite from './createSprite'
import {part2Biao} from './static'

const part2Container = new PIXI.Container()
part2Container.x = 0
part2Container.y = 0
part2Container.width = 3408
part2Container.height = 300
part2Container.backgroundColor = '#000'

const part2BiaoCount = new PIXI.Container()
part2BiaoCount.x = 0
part2BiaoCount.y = 0
const part2BiaoBg = createSprite(part2Biao, {
        x: 0,
        y: 300
      })


part2BiaoCount.addChild(part2BiaoBg)
part2Container.addChild(part2BiaoCount)

export default part2Container