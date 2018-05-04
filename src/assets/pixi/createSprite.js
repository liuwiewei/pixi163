const createSprite = (name, option) => {
  const newSprite = new PIXI.Sprite.fromImage(name)
  // const newSprite = new PIXI.Sprite(
  //   PIXI.loader.resources[name].texture
  // )
  if (option) {
    for (let key in option) {
      newSprite[key] = option[key]
    }
  }
  return newSprite
}
export default createSprite