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
      scale={isMobile ? 0.7 : 2}
      position={isMobile ? [-13, 4, 0] : [8, -8, 4]}
      rotation={[0, 3.9, 0.5]}
    />
  )
}

useGLTF.preload("/gaming_desktop_pc/scene.gltf")

export default Model
