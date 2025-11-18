"use client";
import {
    Icosahedron,
    MeshDistortMaterial,
    OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Crystal = () => {
  return (
    <mesh>
      <Icosahedron args={[1, 6]} />
      <MeshDistortMaterial
        distort={0.5}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        color="#00E5FF"
      />
    </mesh>
  );
};

export const CyberCrystal = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas>
        {}
        <Suspense fallback={null}>
          {}
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />

          {}
          <Crystal />

          {}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.7}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
