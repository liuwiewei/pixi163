const createSprite = (name, option) => {
  const newSprite = new PIXI.Sprite.fromImage(name)
  if (option) {
    for (let key in option) {
      newSprite[key] = option[key]
    }
  }
  return newSprite
}