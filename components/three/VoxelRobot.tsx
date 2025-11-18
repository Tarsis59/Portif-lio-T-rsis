/* eslint-disable react-hooks/purity */

"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const COLORS = {
  primary: "#2a6ba5",
  secondary: "#3a7bb5",
  accent: "#4a8bc5",
  neon: "#00FFFF",
  metal: "#5a9bd5",
  dark: "#1a5b95",
  light: "#6aabd5",
  emissive: "#0088ff",
} as const;

const RobotHead: React.FC = () => {
  return (
    <group position={[0, 0.85, 0]}>
      {/* Cabeça Principal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.75, 0.65, 0.65]} />
        <meshStandardMaterial
          color={COLORS.primary}
          roughness={0.15}
          metalness={0.75}
        />
      </mesh>

      {/* Painel Frontal */}
      <mesh position={[0, 0.2, 0.33]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.1, 0.05]} />
        <meshStandardMaterial
          color={COLORS.secondary}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Olhos */}
      <mesh position={[-0.2, 0.05, 0.33]}>
        <planeGeometry args={[0.12, 0.12]} />
        <meshBasicMaterial
          color={COLORS.neon}
          toneMapped={false}
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh position={[0.2, 0.05, 0.33]}>
        <planeGeometry args={[0.12, 0.12]} />
        <meshBasicMaterial
          color={COLORS.neon}
          toneMapped={false}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Boca */}
      <mesh position={[0, -0.15, 0.33]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.08, 0.05]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.emissive}
          emissiveIntensity={0.6}
          metalness={0.6}
        />
      </mesh>

      {/* Antena */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
        <meshStandardMaterial
          color={COLORS.secondary}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color={COLORS.neon} toneMapped={false} />
      </mesh>

      {/* Detalhes Laterais */}
      <mesh position={[-0.38, 0, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.4, 0.05]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0.38, 0, 0.2]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.1, 0.4, 0.05]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.emissive}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const RobotBody: React.FC<{ pulseRef: React.RefObject<THREE.Mesh | null> }> = ({
  pulseRef,
}) => {
  return (
    <group position={[0, -0.1, 0]}>
      {/* Torso Principal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.0, 1.0, 0.7]} />
        <meshStandardMaterial
          color={COLORS.primary}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>

      {/* Painel Superior */}
      <mesh position={[0, 0.25, 0.36]}>
        <boxGeometry args={[0.7, 0.3, 0.05]} />
        <meshStandardMaterial
          color={COLORS.secondary}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>

      {/* Núcleo Pulsante */}
      <mesh ref={pulseRef} position={[0, 0.1, 0.36]}>
        <circleGeometry args={[0.22, 24]} />
        <MeshDistortMaterial
          speed={3.5}
          distort={0.35}
          radius={1.3}
          color={COLORS.neon}
          toneMapped={false}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Anel do Núcleo */}
      <mesh position={[0, 0.1, 0.355]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.24, 0.28, 32]} />
        <meshBasicMaterial
          color={COLORS.neon}
          toneMapped={false}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Painel Inferior */}
      <mesh position={[0, -0.35, 0.36]}>
        <planeGeometry args={[0.6, 0.2]} />
        <meshStandardMaterial
          color={COLORS.dark}
          emissive={COLORS.emissive}
          emissiveIntensity={0.5}
          metalness={0.7}
        />
      </mesh>

      {/* Grades Laterais */}
      <mesh position={[-0.52, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.15, 0.6, 0.05]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.emissive}
          emissiveIntensity={0.4}
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0.52, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.15, 0.6, 0.05]} />
        <meshStandardMaterial
          color={COLORS.accent}
          emissive={COLORS.emissive}
          emissiveIntensity={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Ventiladores Traseiros */}
      <mesh position={[-0.3, 0.2, -0.36]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 8]} />
        <meshStandardMaterial color={COLORS.metal} metalness={0.7} />
      </mesh>
      <mesh position={[0.3, 0.2, -0.36]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 8]} />
        <meshStandardMaterial color={COLORS.metal} metalness={0.7} />
      </mesh>
    </group>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120;

  const { positions, colors } = useMemo(() => {
    const positionsArray = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Posições
      positionsArray[i * 3 + 0] = (Math.random() - 0.5) * 3.2;
      positionsArray[i * 3 + 1] = Math.random() * 2.0 - 0.8;
      positionsArray[i * 3 + 2] = -0.8 - Math.random() * 1.3;

      const color = new THREE.Color();
      const hue = 0.55 + Math.random() * 0.1;
      const saturation = 0.7 + Math.random() * 0.3;
      const lightness = 0.6 + Math.random() * 0.3;
      color.setHSL(hue, saturation, lightness);

      colorsArray[i * 3 + 0] = color.r;
      colorsArray[i * 3 + 1] = color.g;
      colorsArray[i * 3 + 2] = color.b;
    }

    return {
      positions: positionsArray,
      colors: colorsArray,
    };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const t = clock.elapsedTime * 0.25;
    pointsRef.current.rotation.y = Math.sin(t) * 0.04;

    const geometry = pointsRef.current.geometry;
    if (geometry?.attributes.position) {
      const posAttribute = geometry.attributes.position;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const baseZ = positions[i3 + 2];
        const zOffset = Math.sin(t * 2.8 + i * 0.15) * 0.035;
        posAttribute.setZ(i, baseZ + zOffset);
      }
      posAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const VoxelRobot: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const rimRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Movimento Flutuante
    groupRef.current.position.y = -0.1 + Math.sin(t * 1.6) * 0.05;

    // Seguir Mouse
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    groupRef.current.rotation.y +=
      (mouseX * 0.45 - groupRef.current.rotation.y) * 0.09;
    groupRef.current.rotation.x +=
      (-mouseY * 0.18 - groupRef.current.rotation.x) * 0.09;

    // Animação do Núcleo
    if (pulseRef.current) {
      const scale = 1 + Math.sin(t * 4.5) * 0.05 + Math.sin(t * 14) * 0.018;
      pulseRef.current.scale.set(scale, scale, scale);
    }

    // Efeito de Borda
    if (rimRef.current) {
      const material = rimRef.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = 0.12 + Math.abs(Math.sin(t * 2.8)) * 0.15;
      }
    }
  });

  return (
    <Float speed={2.8} rotationIntensity={0.18} floatIntensity={0.45}>
      <group ref={groupRef} scale={0.9} position={[0, -0.05, 0]}>
        {/* Campo de Partículas */}
        <group position={[0, 0.2, -0.7]}>
          <ParticleField />
        </group>

        {/* Efeito de Borda */}
        <mesh ref={rimRef} position={[0, 0, 0]}>
          <boxGeometry args={[1.18, 1.28, 0.82]} />
          <meshBasicMaterial
            color={COLORS.neon}
            transparent={true}
            opacity={0.18}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        {/* Robô Principal */}
        <group>
          <RobotHead />
          <RobotBody pulseRef={pulseRef} />

          {/* Braços */}
          <mesh position={[-0.75, -0.15, 0]}>
            <boxGeometry args={[0.25, 0.9, 0.25]} />
            <meshStandardMaterial
              color={COLORS.primary}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
          <mesh position={[0.75, -0.15, 0]}>
            <boxGeometry args={[0.25, 0.9, 0.25]} />
            <meshStandardMaterial
              color={COLORS.primary}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>

          {/* Detalhes nos Braços */}
          <mesh position={[-0.75, -0.3, 0.13]}>
            <planeGeometry args={[0.08, 0.3]} />
            <meshBasicMaterial
              color={COLORS.neon}
              toneMapped={false}
              opacity={0.7}
              transparent
            />
          </mesh>
          <mesh position={[0.75, -0.3, 0.13]}>
            <planeGeometry args={[0.08, 0.3]} />
            <meshBasicMaterial
              color={COLORS.neon}
              toneMapped={false}
              opacity={0.7}
              transparent
            />
          </mesh>

          {/* Juntas dos Braços */}
          <mesh position={[-0.75, 0.3, 0]}>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial
              color={COLORS.secondary}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0.75, 0.3, 0]}>
            <sphereGeometry args={[0.15, 12, 12]} />
            <meshStandardMaterial
              color={COLORS.secondary}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>

          {/* Pernas */}
          <mesh position={[-0.3, -0.75, 0]}>
            <boxGeometry args={[0.3, 0.6, 0.4]} />
            <meshStandardMaterial
              color={COLORS.primary}
              metalness={0.6}
              roughness={0.25}
            />
          </mesh>
          <mesh position={[0.3, -0.75, 0]}>
            <boxGeometry args={[0.3, 0.6, 0.4]} />
            <meshStandardMaterial
              color={COLORS.primary}
              metalness={0.6}
              roughness={0.25}
            />
          </mesh>

          {/* Base */}
          <mesh position={[0, -1.1, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.9, 0.1, 8]} />
            <meshStandardMaterial
              color={COLORS.dark}
              emissive={COLORS.emissive}
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.15}
            />
          </mesh>

          {/* Luzes da Base */}
          <mesh position={[0.3, -1.05, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.06, 8]} />
            <meshBasicMaterial color={COLORS.neon} toneMapped={false} />
          </mesh>
          <mesh position={[-0.3, -1.05, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.06, 8]} />
            <meshBasicMaterial color={COLORS.neon} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </Float>
  );
};

export default VoxelRobot;
