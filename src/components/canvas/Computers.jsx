import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3.2, -2.0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Fallback component for mobile devices when 3D fails to load
const MobileFallback = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full flex items-end justify-center pb-20">
        <div className="text-center">
          <div className="relative w-64 h-64 mx-auto mb-4">
            {/* Animated gradient circle as fallback */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-8 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            {/* Computer icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-32 h-32 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    // Support for both newer and older browser versions
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange); // Fallback for older browsers
    }

    // Remove the listener when the component is unmounted
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange); // Fallback for older browsers
      }
    };
  }, []);

  // Set loading timeout for mobile devices
  useEffect(() => {
    if (isMobile) {
      const timeout = setTimeout(() => {
        if (isLoading) {
          setHasError(true);
          setIsLoading(false);
        }
      }, 8000); // 8 second timeout for mobile

      return () => clearTimeout(timeout);
    }
  }, [isMobile, isLoading]);

  // Error boundary handler
  useEffect(() => {
    const handleError = (event) => {
      if (isMobile && (event.message?.includes('WebGL') || event.message?.includes('three'))) {
        setHasError(true);
        setIsLoading(false);
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [isMobile]);

  // Show fallback on mobile if there's an error or loading takes too long
  if (isMobile && hasError) {
    return <MobileFallback />;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={() => setIsLoading(false)}
      onError={() => {
        if (isMobile) {
          setHasError(true);
          setIsLoading(false);
        }
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
