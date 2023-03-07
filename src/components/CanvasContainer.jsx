import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {useRef, useState} from "react"
import * as THREE from "three";
export default function CanvasContainer({count = 100}) {
  return (
      <Canvas className={"canvas"}>
        {Array.from({length: count}, (_, i) => (
            <Box key={i} z={-i}/>
        ))}
      </Canvas>
  )
}

function Box({z}) {
  const { viewport, camera } = useThree()
  const ref = useRef()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  })



  useFrame((state) => {
    ref.current.position.set(data.x * width ,(data.y += 0.3), z)
    if (data.y > height / 1.5)  {
      data.y = -height / 1.5
    }
  })
  return (
  <mesh ref={ref}>
    <boxGeometry/>
    <meshBasicMaterial color={"blue"}/>
  </mesh>
  )
}