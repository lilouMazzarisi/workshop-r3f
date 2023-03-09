import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing"
import Model from "./Model";
import { AmbientLight } from "three";

export default function CanvasContainer({ count = 70, depth = 65, z }) {
    return (
        <>
            <div className={"title"}>
                <h1>Lengendary</h1>
                <h2>Landing Page</h2>
            </div>
            <div className={"paragraph"}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro deleniti molestiae error magnam aspernatur voluptas totam quod, architecto voluptatibus aliquid ratione inventore cumque, dolorem debitis, animi sit tempore minus?
                </p>
            </div>
            <Canvas className={"canvas"} camera={{ near: 0.001, far: 100, fov: 24 }} dpr={2}>
                <Suspense fallback={null}>
                    <color attach={"background"} args={["#89633c"]} />
                    <ambientLight intensity={0.5} />
                    {Array.from({ length: count }, (_, i) => (
                        <Model key={i} z={(-i / count) * depth} />
                    ))}
                    <Environment preset={'warehouse'} blur={0.5} />
                    <EffectComposer>
                        <DepthOfField target={(0, 0, depth / 2)} focalLength={0.4} bokehScale={12} height={800} />
                    </EffectComposer>
                </Suspense>
            </Canvas >
        </>
    )
}