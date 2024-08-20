import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function Hotel({
  visible,
  visibleMeshGroups,
  currentView,
  ...props
}: any) {
  const { nodes, materials } = useGLTF("/testhotel.glb");

  // const camera = useThree((state) => state.camera);

  // function logCameraPosition() {
  // }
  // window.addEventListener("click", logCameraPosition);

  console.log(currentView);

  const isDefaultView = currentView === "default";
  console.log(isDefaultView);

  return (
    <group {...props} dispose={null}>
      <mesh
        name="chair004"
        castShadow
        receiveShadow
        geometry={nodes.chair004.geometry}
        material={nodes.chair004.material}
        position={[0.959, 11.057, -1.455]}
        scale={0.219}
        material-transparent={true}
        material-opacity={
          isDefaultView || visibleMeshGroups.includes("chair004") ? 1 : 0.3
        }
      />
      <mesh
        name="chair005"
        castShadow
        receiveShadow
        geometry={nodes.chair005.geometry}
        material={nodes.chair005.material}
        position={[0.959, 7.724, -1.455]}
        scale={0.219}
        material-transparent={true}
        material-opacity={
          isDefaultView || visibleMeshGroups.includes("chair005") ? 1 : 0.3
        }
      />
      <mesh
        name="chair006"
        castShadow
        receiveShadow
        geometry={nodes.chair006.geometry}
        material={nodes.chair006.material}
        position={[0.959, 4.162, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair006")}
      />
      <mesh
        name="chair007"
        castShadow
        receiveShadow
        geometry={nodes.chair007.geometry}
        material={nodes.chair007.material}
        position={[0.959, 0.688, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair007")}
      />
      <mesh
        name="chair008"
        castShadow
        receiveShadow
        geometry={nodes.chair008.geometry}
        material={nodes.chair008.material}
        position={[-4.188, 11.057, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair008")}
      />
      <mesh
        name="chair009"
        castShadow
        receiveShadow
        geometry={nodes.chair009.geometry}
        material={nodes.chair009.material}
        position={[-4.188, 7.724, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair009")}
      />
      <mesh
        name="chair010"
        castShadow
        receiveShadow
        geometry={nodes.chair010.geometry}
        material={nodes.chair010.material}
        position={[-4.188, 4.162, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair010")}
      />
      <mesh
        name="chair011"
        castShadow
        receiveShadow
        geometry={nodes.chair011.geometry}
        material={nodes.chair011.material}
        position={[-4.188, 0.688, -1.455]}
        scale={0.219}
        material-transparent={true}
        visible={visible && visibleMeshGroups.includes("chair011")}
      />
      <mesh
        name="chair001"
        castShadow
        receiveShadow
        geometry={nodes.chair001.geometry}
        material={nodes.chair001.material}
        position={[1.682, 11.057, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair002"
        castShadow
        receiveShadow
        geometry={nodes.chair002.geometry}
        material={nodes.chair002.material}
        position={[1.682, 7.724, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair003"
        castShadow
        receiveShadow
        geometry={nodes.chair003.geometry}
        material={nodes.chair003.material}
        position={[1.682, 4.162, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair012"
        castShadow
        receiveShadow
        geometry={nodes.chair012.geometry}
        material={nodes.chair012.material}
        position={[1.682, 0.688, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair013"
        castShadow
        receiveShadow
        geometry={nodes.chair013.geometry}
        material={nodes.chair013.material}
        position={[-3.464, 11.057, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair014"
        castShadow
        receiveShadow
        geometry={nodes.chair014.geometry}
        material={nodes.chair014.material}
        position={[-3.464, 7.724, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair015"
        castShadow
        receiveShadow
        geometry={nodes.chair015.geometry}
        material={nodes.chair015.material}
        position={[-3.464, 4.162, 6.955]}
        scale={0.219}
      />
      <mesh
        name="chair016"
        castShadow
        receiveShadow
        geometry={nodes.chair016.geometry}
        material={nodes.chair016.material}
        position={[-3.464, 0.688, 6.955]}
        scale={0.219}
      />
      <group
        name="ground"
        position={[0.003, 3.53, 2.781]}
        scale={[0.125, 1, 1]}
      >
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.ground}
          material-transparent={true}
          material-opacity={
            isDefaultView || !visibleMeshGroups.includes("ground") ? 1 : 0.3
          }
        />
        <mesh
          name="Plane_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.floor}
          material-transparent={true}
          material-opacity={1}
        />
      </group>
      <group
        name="first"
        position={[0.003, 7.061, 2.781]}
        scale={[0.125, 1, 1]}
      >
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.first}
          material-transparent={true}
          material-opacity={
            isDefaultView || !visibleMeshGroups.includes("first") ? 1 : 0.3
          }
        />
        <mesh
          name="Plane002_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.floor}
          material-transparent={true}
          material-opacity={1}
        />
      </group>
      <group
        name="second"
        position={[0.003, 10.591, 2.781]}
        scale={[0.125, 1, 1]}
      >
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.second}
          material-transparent={true}
          material-opacity={
            isDefaultView || !visibleMeshGroups.includes("second") ? 1 : 0.3
          }
        />
        <mesh
          name="Plane003_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.floor}
          material-transparent={true}
          material-opacity={1}
        />
      </group>
      <group
        name="third"
        position={[0.003, 14.122, 2.781]}
        scale={[0.125, 1, 1]}
      >
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.third}
          material-transparent={true}
          material-opacity={
            isDefaultView || !visibleMeshGroups.includes("third") ? 1 : 0.3
          }
        />
        <mesh
          name="Plane004_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.floor}
          material-opacity={1}
        />
      </group>
      <mesh
        name="third_roof"
        castShadow
        receiveShadow
        geometry={nodes.third_roof.geometry}
        material={materials.third}
        position={[0.003, 14.122, 2.781]}
        scale={[0.125, 1, 1]}
        visible={visible}
        material-transparent={true}
        material-opacity={
          isDefaultView || !visibleMeshGroups.includes("third") ? 1 : 0.3
        }
      />
    </group>
  );
}

useGLTF.preload("/testhotel.glb");
