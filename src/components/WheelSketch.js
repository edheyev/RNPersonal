// src/components/WheelSketch.js

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const WheelSketch = () => {
  const mountRef = useRef(null);
  const clayRef = useRef(null); // Ref for clay mesh
  const originalPositions = useRef(null); // Ref to store original positions

  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [pushMode, setPushMode] = useState(false); // false: Carve, true: Push
  const [toolSize, setToolSize] = useState(1); // Tool size state

  useEffect(() => {
    // === THREE.JS CODE START ===
    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 200, 300);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);

    // Controls (Allows orbiting around the scene)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.enableDamping = true;

    // Lighting
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 200, 100);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Ground Plane (to receive shadows)
    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xdddddd });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -100;
    plane.receiveShadow = true;
    scene.add(plane);

    // Potter's Wheel
    const wheelRadius = 150;
    const wheelThickness = 20;
    const wheelGeometry = new THREE.CylinderGeometry(
      wheelRadius,
      wheelRadius,
      wheelThickness,
      64
    );
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.y = 0;
    wheel.castShadow = true;
    wheel.receiveShadow = true;
    scene.add(wheel);

    // Clay Object (Cylinder with Deformable Geometry)
    const clayHeight = 200;
    const clayRadius = 100;
    const clayGeometry = new THREE.CylinderGeometry(
      clayRadius,
      clayRadius,
      clayHeight,
      80,
      40,
      true
    );

    // Merge vertices using BufferGeometryUtils
    const mergedClayGeometry = mergeVertices(clayGeometry, 0.0001);

    const clayMaterial = new THREE.MeshStandardMaterial({
      color: 0xd2b48c,
      metalness: 0.3,
      roughness: 0.7,
      side: THREE.DoubleSide,
    });
    const clay = new THREE.Mesh(mergedClayGeometry, clayMaterial);
    clay.position.y = wheel.position.y + wheelThickness / 2 + clayHeight / 2;
    clay.castShadow = true;
    clay.receiveShadow = true;
    scene.add(clay);

    // Assign clay mesh to ref
    clayRef.current = clay;

    // Store original positions for reset
    const posArray = clay.geometry.attributes.position.array.slice();
    originalPositions.current = posArray;

    // Animation Loop

    const cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      cube.rotation.y += rotationSpeed * 2;

      // Rotate the wheel
      clay.rotation.y += rotationSpeed * 2;

      // Update controls
      // controls.update();

      renderer.render(scene, camera);
      console.log(wheel.rotation.y);
      // wheel.geometry.verticesNeedUpdate = true;
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Handle Mouse Events for Deformation
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();
    let isDragging = false;

    const onMouseDown = (event) => {
      isDragging = true;
      deformClay(event);
    };

    const onMouseMove = (event) => {
      if (isDragging) {
        deformClay(event);
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };
    const deformClay = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObject(clay);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        const intersectionPoint = intersect.point; // Point of intersection with the clay
        const positions = clay.geometry.attributes.position;

        // Convert intersection point to local space of the clay object
        clay.worldToLocal(intersectionPoint);

        // Loop through all vertices in the geometry
        for (let i = 0; i < positions.count; i++) {
          const vertex = new THREE.Vector3();
          vertex.fromBufferAttribute(positions, i);

          // Calculate the distance from the intersection point to the vertex
          const distance = vertex.distanceTo(intersectionPoint);

          // Only deform vertices within the radius defined by toolSize
          if (distance < toolSize * 10) {
            // Adjust the multiplication factor for radius size
            const direction = new THREE.Vector3();
            direction.subVectors(vertex, intersectionPoint).normalize(); // Direction from intersection point to vertex

            // Apply deformation based on distance (stronger closer to center, weaker further away)
            const deformStrength = pushMode ? 1 : -1;
            const strength =
              deformStrength * (1 - distance / (toolSize * 10)) * 3; // Influence falls off with distance
            vertex.x += direction.x * strength;
            vertex.y += direction.y * strength;
            vertex.z += direction.z * strength;

            // Update the vertex position
            positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
          }
        }

        // Mark the position attribute as needing an update
        positions.needsUpdate = true;

        // Recompute normals for proper lighting
        clay.geometry.computeVertexNormals();
      }
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("mouseleave", onMouseUp);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("mouseleave", onMouseUp);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      currentMount.removeChild(renderer.domElement);
    };
    // === THREE.JS CODE END ===
  }, [rotationSpeed, pushMode, toolSize]);

  // Reset Function
  const resetClay = () => {
    if (clayRef.current && originalPositions.current) {
      const positionAttribute = clayRef.current.geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        positionAttribute.setXYZ(
          i,
          originalPositions.current[i * 3],
          originalPositions.current[i * 3 + 1],
          originalPositions.current[i * 3 + 2]
        );
      }
      positionAttribute.needsUpdate = true;
      clayRef.current.geometry.computeVertexNormals();
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Three.js Canvas Mount Point */}
      <div
        ref={mountRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      ></div>

      {/* UI Controls */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <button onClick={() => setPushMode(!pushMode)}>
          {pushMode ? "Mode: Push" : "Mode: Carve"}
        </button>
        <button onClick={resetClay} style={{ marginLeft: "10px" }}>
          Reset
        </button>
        <div style={{ marginTop: "10px" }}>
          <label>Rotation Speed: </label>
          <input
            type="range"
            min="-0.05"
            max="0.05"
            step="0.001"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          />
          <span> {rotationSpeed.toFixed(3)}</span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Tool Size: </label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={toolSize}
            onChange={(e) => setToolSize(parseFloat(e.target.value))}
          />
          <span> {toolSize.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default WheelSketch;
