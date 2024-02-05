// import React from 'react'
import * as THREE from "three";
import { Vector3, useLoader } from "@react-three/fiber";
import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useTexture } from "@react-three/drei";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { TextureLoader } from "three";
// import { SphereGeometry } from "three";

const MarsModel = () => {
  const name = (type: string) => `/mars_texture/${type}.jpg`;
  const goLoRef = useRef<THREE.Mesh>(null!);

  //   Bump - Displacement - Normal - Roughness - AO - BaseColor

  const [colorMap, surface_diff, surface_norm] = useLoader(THREE.TextureLoader, [
    name("2k_mars"),
    // name("surface_bump"),
    name("surface_diff"),
    name("surface_norm"),
    // name(),
    // name(),
  ]);

  // useFrame((_, delta) => {
  //   // meshRef.current.rotation.x += delta
  //   goLoRef.current.rotation.y += 0.5 * delta;
  // });

  const position: Vector3 | [number, number, number] = [0, 0, 0];
  return (
    <mesh
      position={position}
      ref={goLoRef}
      castShadow
      // rotation={[Math.PI / 2, 0, 0]}
      scale={1.2}
    >
      <sphereGeometry args={[1.3, 55, 55]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={surface_diff}
        normalMap={surface_norm}
      />
    </mesh>
  );
};

export default MarsModel;
