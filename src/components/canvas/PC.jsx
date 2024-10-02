import { Suspense, useEffect,useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Anime = ({isMobile}) => {
  //memo for static assets
  const gaming_setup = useMemo(() => useGLTF('./gaming_setup/scene.gltf'),[]);

  return (
    <mesh>
      {/* Reduced light intensity for optimization */}
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 10, 10]}
        angle={0.12}
        penumbra={1}
      />
      <primitive 
        object={gaming_setup.scene}
        scale={isMobile ? 0.3 : 0.5}
        position={isMobile ? [1,-2,-0.2] : [2,-2,0]}
        rotation={[0, -0.2, -0.15]} 
      /> 
    </mesh>
  )
}

const PCCanvas = () => {
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
      frameloop="demand"
      camera={{ position: [20, 2, 5], fov: 20 }}
      // Disable antialiasing for performance gain
      gl={{ antialias: false ,preserveDrawingBuffer: true }}
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

export default PCCanvas;
