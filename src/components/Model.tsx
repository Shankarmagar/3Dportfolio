import { useGLTF } from "@react-three/drei"
import type { FC } from "react"

interface ModelProps {
  isMobile: boolean
}

const Model: FC<ModelProps> = ({ isMobile }) => {
  const { scene } = useGLTF("/gaming_desktop_pc/scene.gltf")

  return (
    <primitive
      object={scene}
      scale={isMobile ? 1 : 1.2}
      position={isMobile ? [100, 100, 100] : [100, 100, 100]}
    />
  )
}

useGLTF.preload("/gaming_desktop_pc/scene.gltf")

export default Model
