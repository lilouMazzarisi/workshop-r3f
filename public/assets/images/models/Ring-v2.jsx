/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ring-v2.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ring-v2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.ring.geometry} material={materials.skin} rotation={[1.62, 0, 0.09]} />
    </group>
  )
}

useGLTF.preload('/ring-v2-transformed.glb')
