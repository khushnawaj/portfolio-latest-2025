import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useSelector } from 'react-redux';

const AnimatedBlob = () => {
  const meshRef = useRef();
  const theme = useSelector((state) => state.theme.mode);
  
  const mainColor = theme === "dark" ? "#0891b2" : "#0284c7"; // Cyan to blue based
  const emissiveColor = theme === "dark" ? "#1d4ed8" : "#38bdf8";

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Mouse follow interaction
      const targetX = (state.mouse.x * Math.PI) / 4;
      const targetY = (state.mouse.y * Math.PI) / 4;
      
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color={mainColor}
          attach="material"
          distort={0.4}
          speed={4}
          roughness={0.1}
          metalness={0.9}
          emissive={emissiveColor}
          emissiveIntensity={0.6}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#06b6d4" />
        <AnimatedBlob />
      </Canvas>
    </div>
  );
}
