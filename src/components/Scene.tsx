import * as THREE from "three";
import React, { useLayoutEffect, useRef, useContext, useState } from "react";
import {
  DirectionalLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import MyGeometry from "./three_models/geometry";
import { MyGroupContext } from "../Context";

export default function MyScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { groups } = useContext(MyGroupContext);
  const [cameraPos, setcamerPos] = useState({ x: 40, y: 40, z: 40 });
  useLayoutEffect(() => {
    const renderer = new WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });

    const threescreen = document.body.querySelector(".TreeScreen");
    if (!threescreen) {
      return;
    }
    const screen_width = threescreen?.clientWidth || 1;
    const screen_height = threescreen?.clientHeight || 1;
    const camera = new PerspectiveCamera(
      45, // fov
      screen_width / screen_height,
      0.1, // near
      1000 // far
    );

    camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);

    const scene = new Scene();

    renderer.setClearColor(0xffffff, 3);

    groups.forEach((el) => {
      const cube = MyGeometry(el);
      scene.add(cube);
    });

    renderer.setAnimationLoop(() => {
      const newCameraPos = camera.position;
      setcamerPos(newCameraPos);
      renderer.render(scene, camera);
    });

    renderer.setSize(screen_width, screen_height);

    const onResize = () => {
      camera.aspect = screen_width / screen_height;
      camera.updateProjectionMatrix();

      renderer.setSize(screen_width, screen_height);
    };

    threescreen.addEventListener("resize", onResize, false);

    new OrbitControls(camera, renderer.domElement);

    return () => {
      threescreen.removeEventListener("resize", onResize);
    };
  }, [groups]);

  return <canvas ref={canvasRef} />;
}
