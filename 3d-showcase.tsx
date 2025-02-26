"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PresentationControls, Environment, useGLTF, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Model({ scale, position, rotation, exploded }) {
  // This is a placeholder - in a real app, you'd use a real 3D model
  // For this example, we'll use the sample duck model
  const { nodes, materials } = useGLTF("/assets/3d/duck.glb")

  // Apply explosion effect if enabled
  const explodedPosition = exploded ? [position[0] * 1.5, position[1] * 1.5, position[2] * 1.5] : position

  return (
    <group dispose={null} scale={scale} position={explodedPosition} rotation={rotation}>
      <mesh castShadow receiveShadow geometry={nodes.duck.geometry} material={materials.default} />
    </group>
  )
}

function ProductViewer() {
  const [exploded, setExploded] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [activeColor, setActiveColor] = useState("yellow")

  const colors = {
    yellow: "#FFD700",
    blue: "#4169E1",
    red: "#DC143C",
    green: "#2E8B57",
  }

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 relative">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <PresentationControls
            global
            zoom={zoom}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model scale={[zoom, zoom, zoom]} position={[0, 0, 0]} rotation={[0, 0, 0]} exploded={exploded} />
          </PresentationControls>
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} />

          <Html position={[1.5, 0, 0]}>
            <div className="bg-card p-4 rounded-lg shadow-lg border w-64">
              <h3 className="font-bold text-lg mb-2">Product Details</h3>
              <p className="text-sm text-muted-foreground mb-4">
                This premium rubber duck is perfect for debugging your code and keeping you company during long coding
                sessions.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">$19.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </Html>
        </Canvas>
      </div>

      <div className="bg-background border-t p-4">
        <Tabs defaultValue="view" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="view">View Options</TabsTrigger>
            <TabsTrigger value="color">Color</TabsTrigger>
            <TabsTrigger value="info">Information</TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Zoom</label>
                <span className="text-sm text-muted-foreground">{zoom.toFixed(1)}x</span>
              </div>
              <Slider value={[zoom]} min={0.5} max={2} step={0.1} onValueChange={(value) => setZoom(value[0])} />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Exploded View</span>
              <Button variant={exploded ? "default" : "outline"} onClick={() => setExploded(!exploded)} size="sm">
                {exploded ? "Enabled" : "Disabled"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="color">
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(colors).map(([name, hex]) => (
                <button
                  key={name}
                  className={`w-full aspect-square rounded-md border-2 transition-all ${
                    activeColor === name ? "border-primary scale-105" : "border-transparent"
                  }`}
                  style={{ backgroundColor: hex }}
                  onClick={() => setActiveColor(name)}
                  aria-label={`Select ${name} color`}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="info">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-1">
                <span className="text-sm font-medium">Material</span>
                <span className="text-sm">Premium Rubber</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-sm font-medium">Dimensions</span>
                <span className="text-sm">10cm x 8cm x 9cm</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-sm font-medium">Weight</span>
                <span className="text-sm">120g</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="text-sm font-medium">Warranty</span>
                <span className="text-sm">1 Year</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  return <ProductViewer />
}

