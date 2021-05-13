import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { fragmentShader } from "./shaders/fragmentShader"
import { vertexShader } from "./shaders/vertextShader"

const Circle = () => {
  const mesh = useRef()
  const material = useRef()

  useFrame(({ clock, camera, mouse }) => {
    material.current.uniforms.uTime.value = clock.elapsedTime
    camera.lookAt(mesh.current.position)

    const mouseAdjusted = new THREE.Vector2(
      (mouse.x + 1) / 2,
      (mouse.y + 1) / 2
    )

    material.current.uniforms.uBaseCol.value = mouseAdjusted
  })

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 100, 100]} />
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uNoiseDistortion: { value: 2.0 },
          uSpeed: { value: 0.5 },
          uTime: { value: 0 },
          uBaseCol: { value: new THREE.Vector2(0, 0) },
        }}
        transparent
      />
    </mesh>
  )
}

export default Circle
