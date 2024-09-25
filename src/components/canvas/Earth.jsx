import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const ship = useGLTF('./one_piece_-going_merry/scene.gltf')
  return(
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <primitive 
        object={ship.scene}
        scale={0.5}
        position={[0,-1.5,0]}
        rotation-y={0} 
    />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{ position: [20, 1, 5], fov: 10 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;