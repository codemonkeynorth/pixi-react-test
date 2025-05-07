//import "pixi.js/app"
//import "pixi.js/filters"
//import "pixi.js/graphics"

import { useRef } from "react"

import { Sprite } from "pixi.js"

import { Application, extend } from "@pixi/react"

import RotatingBunny from "./Bunny"

import type { ApplicationRef } from "@pixi/react"

extend({
  Sprite,
})

const PixiImage = () => {
  //
  const appRef = useRef<ApplicationRef | null>(null)

  const onAppInit = () => {
    console.log("onAppInit::")
  }

  return (
    <div>
      <Application
        ref={appRef}
        width={800}
        height={600}
        onInit={onAppInit}
        //manageImports={false}
      >
        <RotatingBunny />
      </Application>
    </div>
  )
}

export default PixiImage
