import { useEffect, useState } from "react"

import { Assets, Graphics, Sprite, Ticker } from "pixi.js"

import { extend, useTick } from "@pixi/react"

extend({
  Graphics,
  Sprite,
})

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0)

  const [bunnyTexture, setBunnyTexture] = useState()

  useEffect(() => {
    const loadBunny = async () => {
      const b = await Assets.load("https://pixijs.com/assets/bunny.png")
      setBunnyTexture(b)
    }
    loadBunny()
  }, [])

  // Animate rotation
  useTick((t: Ticker) => {
    setRotation((r) => (r - 0.02 * t.deltaTime) % 360)
  })

  return <pixiSprite texture={bunnyTexture} width={100} height={100} anchor={0.5} x={200} y={200} rotation={rotation} />
}

export default RotatingBunny
