import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Anime = ({isMobile}) => {
  // Load the Draco compressed GLTF model
  const animeGirl = useGLTF('./gaming_setup/scene_draco.gltf')

  return (
    <mesh>
      {/* Reduced light intensity for optimization */}
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1.5} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
      />
      <primitive 
        object={animeGirl.scene}
        scale={isMobile ? 0.2 : 0.5}
        position={isMobile ? [0,-2,-0.8] : [0,-3.1,-1]}
        rotation={[-0.01, -0.15, -0.1]} 
      /> 
    </mesh>
  )
}

const AnimeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      // Disable shadows for performance improvement
      shadows={false}
      // Set to frameloop "always" to ensure smooth rendering
      frameloop="always"
      camera={{ position: [20, 1, 5], fov: 20 }}
      // Disable antialiasing for performance gain
      gl={{ antialias: false, preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Anime isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default AnimeCanvas;
