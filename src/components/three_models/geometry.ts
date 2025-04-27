import * as THREE from "three";
import { MyCube, MyPyramid } from "./Primitives";
import { MyGroup } from "../../lib/group.lib";
import { GROUPTYPES } from "../../lib/group.lib";
export default function MyGeometry(group: MyGroup) {
  const { position, size } = group;

  const positions = [];
  const normals = [];
  const uvs = [];
  const colors = [];
  const color1 = [Math.random(), Math.random(), Math.random()];
  const color2 = [Math.random(), Math.random(), Math.random()];
  const color3 = [Math.random(), Math.random(), Math.random()];
  const color4 = [Math.random(), Math.random(), Math.random()];
  const color5 = [Math.random(), Math.random(), Math.random()];
  const color6 = [Math.random(), Math.random(), Math.random()];
  let i = 0;
  const randomColors = [color1, color2, color3, color4, color5, color6];
  switch (group.type) {
    case GROUPTYPES.BOX:
      for (const vertex of MyCube(size.Length, size.Width, size.Height)) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
        colors.push(...randomColors[Math.floor(i / 6)]);
        i++;
      }
      break;

    case GROUPTYPES.PYRAMID:
      for (const vertex of MyPyramid(size.Length, size.Width, size.Height)) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
        if (i <= 11) {
          colors.push(...randomColors[Math.floor(i / 3)]);
        } else {
          colors.push(...randomColors[4]);
        }
        i++;
      }
      break;
  }

  const geometry = new THREE.BufferGeometry();
  const positionNumComponents = 3;
  const normalNumComponents = 3;
  const uvNumComponents = 2;
  const colorNumComponents = 3;
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      new Float32Array(positions),
      positionNumComponents
    )
  );
  geometry.setAttribute(
    "normal",
    new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents)
  );
  geometry.setAttribute(
    "uv",
    new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents)
  );
  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(colors), colorNumComponents)
  );
  const material = new THREE.MeshBasicMaterial({ vertexColors: true });
  // const material = new THREE.LineBasicMaterial({
  //   color: group.color
  // });

  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(position.x, position.y, position.z);
  return cube;
}
