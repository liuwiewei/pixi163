import createSprite from './createSprite'
import {part2Biao} from './static'
const Part2 = () => {
  const part2Container = new PIXI.Container()
  part2Container.x = 500
  part2Container.y = 0
  part2Container.width = 3408
  part2Container.height = 300
  part2Container.backgroundColor = '#000'

  const part2BiaoCont = new PIXI.Container()
  part2BiaoCont.x = 0
  part2Container.y = 205
  const part2BiaoBg = createSprite(part2Biao, {
          x: 0,
          y: 0
        })
  return part2Container
}
export default Part2