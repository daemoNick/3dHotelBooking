"use client";

import React, { useState, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { Hotel } from "./components/hotel";
import {
  CameraController,
  MoveCameraToFunction,
} from "./components/CameraController";

export const cameraPositions = {
  default: {
    position: new THREE.Vector3(-25.0, 31.38, -12.51),
    rotation: new THREE.Euler(-2.07, -0.61, -2.33),
    visibleMeshGroups: [],
  },
  view1: {
    position: new THREE.Vector3(11.72, 13.96, -2.5),
    rotation: new THREE.Euler(-1.74, 0.7, 1.84),
    visibleMeshGroups: ["third"],
  },
  view2: {
    position: new THREE.Vector3(6.94, 7.33, 13.84),
    rotation: new THREE.Euler(-0.48, 0.46, 0.24),
    visibleMeshGroups: ["second"],
  },
  view3: {
    position: new THREE.Vector3(-11.6, 1.73, 13.21),
    rotation: new THREE.Euler(-0.13, -0.71, -0.08),
    visibleMeshGroups: ["first"],
  },
  view4: {
    position: new THREE.Vector3(-15.47, -3.19, -9.12),
    rotation: new THREE.Euler(3.11, -0.97, 3.12),
    visibleMeshGroups: ["ground"],
  },
};

export const Page: React.FC = () => {
  const [moveCameraTo, setMoveCameraTo] = useState<MoveCameraToFunction | null>(
    null
  );
  const [visibleMeshGroups, setVisibleMeshGroups] = useState<string[]>(
    cameraPositions.default.visibleMeshGroups
  );
  const currentViewIndex = useRef(0);
  const orbitControlsRef = useRef<any>(null);

  const handleControllerReady = useCallback(
    (moveCameraToFunc: MoveCameraToFunction) => {
      setMoveCameraTo(() => moveCameraToFunc);
    },
    []
  );

  const handleMoveCamera = () => {
    if (moveCameraTo && orbitControlsRef.current) {
      const views = Object.values(cameraPositions);
      currentViewIndex.current = (currentViewIndex.current + 1) % views.length;
      const nextView = views[currentViewIndex.current];

      moveCameraTo(nextView.position, nextView.rotation, 1);

      orbitControlsRef.current.target.set(0, 0, 0);

      setVisibleMeshGroups(nextView.visibleMeshGroups);

      console.log(`Moving camera to ${currentViewIndex.current}`);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={handleMoveCamera}>Move Camera</button>
      <Canvas>
        <CameraController onControllerReady={handleControllerReady} />
        <PerspectiveCamera
          makeDefault
          position={cameraPositions.default.position}
          rotation={cameraPositions.default.rotation}
          fov={45}
        />
        <Environment preset="city" background={false} blur={1} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls ref={orbitControlsRef} makeDefault />
        <Hotel
          visibleMeshGroups={visibleMeshGroups}
          currentView={Object.keys(cameraPositions)[currentViewIndex.current]}
          position={[0, -5, 0]}
        />
        <axesHelper args={[50]} />
      </Canvas>
    </div>
  );
};

export default Page;
