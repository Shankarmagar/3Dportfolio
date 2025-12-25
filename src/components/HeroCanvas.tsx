import { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import CanvasLoader from "./Loader"
import Model from "./Model"

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand" // ✅ reduces GPU load
      dpr={[1, 1.5]}     // ✅ avoids high DPI crashes
      camera={{
        position: isMobile ? [7, 4, 7] : [-20, 25, 20],
        fov: isMobile ? 55 : 45,
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={0.6} groundColor="black" />
        <directionalLight position={[10, 20, 10]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />

        <Model isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
