import * as THREE from "three";
import { MyCube, MyPyramid } from "./Primitives";
import { MyGroup } from "../../lib/group.lib";
import { GROUPTYPES } from "../../lib/group.lib";
export default function MyGeometry(group: MyGroup) {
  const { position,size } = group;

  const positions = [];
  const normals = [];
  const uvs = [];
  switch(group.type){
    case GROUPTYPES.BOX:
      for (const vertex of MyCube(size.Length, size.Width, size.Height)) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
      }
    break

    case GROUPTYPES.PYRAMID:
      for (const vertex of MyPyramid(size.Length, size.Width, size.Height)) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
      }
    break
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
  //geometry.setAttribute(
  //  "color",
  //  new THREE.BufferAttribute(new Float32Array(colors), colorNumComponents)
  //);

  const material = new THREE.LineBasicMaterial({
    color: group.color
  });

  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(position.x, position.y, position.z);
  return cube;
}
