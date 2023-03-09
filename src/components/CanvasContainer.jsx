import { Canvas } from "@react-three/fiber";

export default function CanvasContainer() {
    return (
        <Canvas>
            <mesh>
                <boxBufferGeometry />
                <meshBasicMaterial color={"blue"} />
            </mesh>
        </Canvas>
    )
}