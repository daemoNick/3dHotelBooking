import React, { useRef, useCallback, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export type MoveCameraToFunction = (
  newPosition: THREE.Vector3,
  newRotation: THREE.Euler,
  duration?: number
) => void;

interface CameraControllerProps {
  onControllerReady: (moveCameraToFunc: MoveCameraToFunction) => void;
}

export function CameraController({ onControllerReady }: CameraControllerProps) {
  const { camera } = useThree();
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const moveCameraTo: MoveCameraToFunction = useCallback(
    (newPosition, newRotation, duration = 1) => {
      if (timeline.current) {
        timeline.current.kill();
      }

      timeline.current = gsap.timeline();

      timeline.current.to(camera.position, {
        x: newPosition.x,
        y: newPosition.y,
        z: newPosition.z,
        duration: duration,
        ease: "power2.inOut",
      });

      timeline.current.to(
        camera.rotation,
        {
          x: newRotation.x,
          y: newRotation.y,
          z: newRotation.z,
          duration: duration,
          ease: "power2.inOut",
        },
        "<"
      );
    },
    [camera]
  );

  useEffect(() => {
    onControllerReady(moveCameraTo);
  }, [onControllerReady, moveCameraTo]);

  return null;
}
