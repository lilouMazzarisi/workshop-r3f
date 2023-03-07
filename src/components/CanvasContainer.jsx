import { Canvas, useFrame } from "@react-three/fiber";
import { useRef} from "react"
export default function CanvasContainer() {
  return (
      <Canvas className={"canvas"}>
        <Box/>
      </Canvas>
  )
}

function Box() {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  })
  return (
  <mesh ref={ref}>
    <boxGeometry/>
    <meshBasicMaterial color={"blue"}/>
  </mesh>
  )
}