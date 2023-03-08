import {useFrame, useThree} from "@react-three/fiber";
import {useRef, useState} from "react";
import * as THREE from "three";
import {Sparkles, useGLTF} from "@react-three/drei";


export default function Model({z}) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('assets/got-transformed.glb')
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
  const [data] = useState({
    x : THREE.MathUtils.randFloatSpread(2),
    y : THREE.MathUtils.randFloatSpread(height),
  })
  useFrame((state) => {
    ref.current.position.set(data.x * width, (data.y += 0.2), z)
    if(data.y > height) data.y = -height
  })

  return (
      <mesh ref={ref} geometry={nodes['Body_1_DefaultMaterial~1_0001'].geometry} material={materials.DefaultMaterial1} scale={100} z={z}/>
  )

}