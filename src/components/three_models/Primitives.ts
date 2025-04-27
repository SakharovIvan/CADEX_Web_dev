import * as THREE from "three";

export const MyCube = (x: number, z: number, y: number) => {

  return [
    //front
    { pos: [-x, -y, z], norm: [0, 0, 1], uv: [0, 0] },
    { pos: [x, -y, z], norm: [0, 0, 1], uv: [1, 0] },
    { pos: [-x, y, z], norm: [0, 0, 1], uv: [0, 1] },

    { pos: [-x, y, z], norm: [0, 0, 1], uv: [0, 1] },
    { pos: [x, -y, z], norm: [0, 0, 1], uv: [1, 0] },
    { pos: [x, y, z], norm: [0, 0, 1], uv: [1, 1] },
    // righx
    { pos: [x, -y, z], norm: [1, 0, 0], uv: [0, 0] },
    { pos: [x, -y, -z], norm: [1, 0, 0], uv: [1, 0] },
    { pos: [x, y, z], norm: [1, 0, 0], uv: [0, 1] },

    { pos: [x, y, z], norm: [1, 0, 0], uv: [0, 1] },
    { pos: [x, -y, -z], norm: [1, 0, 0], uv: [1, 0] },
    { pos: [x, y, -z], norm: [1, 0, 0], uv: [1, 1] },
    // bacx
    { pos: [x, -y, -z], norm: [0, 0, -1], uv: [0, 0] },
    { pos: [-x, -y, -z], norm: [0, 0, -1], uv: [1, 0] },
    { pos: [x, y, -z], norm: [0, 0, -1], uv: [0, 1] },

    { pos: [x, y, -z], norm: [0, 0, -1], uv: [0, 1] },
    { pos: [-x, -y, -z], norm: [0, 0, -1], uv: [1, 0] },
    { pos: [-x, y, -z], norm: [0, 0, -1], uv: [1, 1] },
    // lefx
    { pos: [-x, -y, -z], norm: [-1, 0, 0], uv: [0, 0] },
    { pos: [-x, -y, z], norm: [-1, 0, 0], uv: [1, 0] },
    { pos: [-x, y, -z], norm: [-1, 0, 0], uv: [0, 1] },

    { pos: [-x, y, -z], norm: [-1, 0, 0], uv: [0, 1] },
    { pos: [-x, -y, z], norm: [-1, 0, 0], uv: [1, 0] },
    { pos: [-x, y, z], norm: [-1, 0, 0], uv: [1, 1] },
    // top
    { pos: [x, y, -z], norm: [0, 1, 0], uv: [0, 0] },
    { pos: [-x, y, -z], norm: [0, 1, 0], uv: [1, 0] },
    { pos: [x, y, z], norm: [0, 1, 0], uv: [0, 1] },

    { pos: [x, y, z], norm: [0, 1, 0], uv: [0, 1] },
    { pos: [-x, y, -z], norm: [0, 1, 0], uv: [1, 0] },
    { pos: [-x, y, z], norm: [0, 1, 0], uv: [1, 1] },
    // bottox
    { pos: [x, -y, z], norm: [0, -1, 0], uv: [0, 0] },
    { pos: [-x, -y, z], norm: [0, -1, 0], uv: [1, 0] },
    { pos: [x, -y, -z], norm: [0, -1, 0], uv: [0, 1] },

    { pos: [x, -y, -z], norm: [0, -1, 0], uv: [0, 1] },
    { pos: [-x, -y, z], norm: [0, -1, 0], uv: [1, 0] },
    { pos: [-x, -y, -z], norm: [0, -1, 0], uv: [1, 1] },
  ];
};
export const MyPyramid = (x: number, y: number, z: number) => {
  const hpos = [0, y, 0];

  return [
    //front
    { pos: [-x, -y, z], norm: [0, 0, 1], uv: [0, 1] }, //left
    { pos: [x, -y, z], norm: [0, 0, 1], uv: [1, 0] }, //right
    { pos: hpos, norm: [0, 0, 1], uv: [1, 1] }, //top

    // righx

    { pos: [x, -y, z], norm: [1, 0, 0], uv: [0, 1] }, //left
    { pos: [x, -y, -z], norm: [1, 0, 0], uv: [1, 0] }, //right
    { pos: hpos, norm: [1, 0, 0], uv: [1, 1] }, //top
    // bacx

    { pos: [x, -y, -z], norm: [0, 0, -1], uv: [0, 1] },
    { pos: [-x, -y, -z], norm: [0, 0, -1], uv: [1, 0] }, //right
    { pos: hpos, norm: [0, 0, -1], uv: [1, 1] },
    // lefx

    { pos: [-x, -y, -z], norm: [-1, 0, 0], uv: [0, 1] },
    { pos: [-x, -y, z], norm: [-1, 0, 0], uv: [1, 0] }, //right
    { pos: hpos, norm: [-1, 0, 0], uv: [1, 1] },

    // bottom
    { pos: [x, -y, z], norm: [0, -1, 0], uv: [0, 0] }, //fr -right r -left
    { pos: [-x, -y, z], norm: [0, -1, 0], uv: [1, 0] },
    { pos: [x, -y, -z], norm: [0, -1, 0], uv: [0, 1] }, //r-right

    { pos: [x, -y, -z], norm: [0, -1, 0], uv: [0, 1] },
    { pos: [-x, -y, z], norm: [0, -1, 0], uv: [1, 0] }, //fr -left
    { pos: [-x, -y, -z], norm: [0, -1, 0], uv: [1, 1] },
  ];
};
