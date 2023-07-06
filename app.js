import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

const QuantumParticlesScene = () => {
  const particlesRef = useRef();

  // Function to generate random particle positions
  const generateRandomPosition = () => {
    return new THREE.Vector3(
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5
    );
  };

  // Function to create quantum particles
  const createQuantumParticles = () => {
    const particleCount = 100;
    const particles = new THREE.Group();

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      );

      particle.position.copy(generateRandomPosition());
      particles.add(particle);
    }

    particlesRef.current = particles;
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000); // Set background color
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group ref={particlesRef} />
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial color={0x0000ff} wireframe />
      </mesh>
      <fog attach="fog" args={[0x000000, 5, 15]} />
    </Canvas>
  );
};

export default QuantumParticlesScene;
