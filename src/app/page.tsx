"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Hotel } from "./hotel";
import * as THREE from "three";

export const cameraPositions = {
  view1: { position: [-28, 34.4, -19], target: [0, 0, 0] },
  view2: { position: [4, 2, 4], target: [0, 0, 0] },
};

export const Page = () => {
  const [cameraPosition, setCameraPosition] = useState({
    position: new THREE.Vector3(-24, 30, -16.5),
    target: new THREE.Vector3(0, 0, 0),
  });
  const cameraRef = useRef();

  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={(e) => setOpacity(e.target.value)}
      />
      <Canvas>
        <PerspectiveCamera
          makeDefault
          ref={cameraRef}
          position={cameraPosition.position.toArray()}
          fov={45}
        />
        <Environment preset="city" background={false} blur={1} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Hotel visible={visible} opacity={opacity} position={[0, -5, 0]} />
        <axesHelper args={[50]} />
      </Canvas>
    </div>
  );
};

export default Page;
