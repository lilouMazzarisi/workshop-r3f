import { Canvas } from "@react-three/fiber";
import Model from "./Model.jsx";

export default function CanvasContainer({count = 60}) {
  return (
      <Canvas className={"canvas"}>
        {Array.from({length: count}, (_, i) => (
            <Model key={i} z={-i}/>
        ))}
      </Canvas>
  )
}