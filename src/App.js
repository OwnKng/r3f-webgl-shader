import "./App.css"
import Circle from "./Circle"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { NoToneMapping } from "three/src/Three"

function App() {
  return (
    <div className='App'>
      <Canvas
        camera={{ fov: 75, position: [0, -4, 10] }}
        onCreated={({ gl }) => {
          gl.toneMapping = NoToneMapping
        }}
      >
        <Suspense fallback={null}>
          <color attach='background' args={["#151B26"]} />
          <ambientLight intensity={0.1} />
          <directionalLight color='red' position={[0, 0, 5]} />
          <Circle />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
