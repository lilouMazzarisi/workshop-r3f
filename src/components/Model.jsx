import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react';
import * as THREE from 'three';

export default function Model({ z }) {
    const ref = useRef();

    const { nodes, materials } = useGLTF('models/ring-v2-transformed.glb')
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height),
        rX: Math.random() * Math.PI,
        rY: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });

    useFrame((state) => {
        ref.current.position.set(data.x * width, (data.y += 0.01), z);
        ref.current.rotation.set((data.rX += 0.007), (data.rY -= 0.01), (data.rZ -= 0.02));
        if (data.y > height) data.y = -height
    })

    return (
        <mesh ref={ref} geometry={nodes.ring.geometry} material={materials.skin} scale={80}></mesh>
    )
};


