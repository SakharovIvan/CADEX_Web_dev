import { Coordinates, Size } from "./group.lib";

export function RandomCoordinates(min: number, max: number): Coordinates {
  const x = Math.floor(Math.random() * (max - min + 1)) + min;
  const y = Math.floor(Math.random() * (max - min + 1)) + min;
  const z = Math.floor(Math.random() * (max - min + 1)) + min;

  return { x, y, z };
}

export function RandomSize(min: number, max: number): Size {
  const randomSizes = RandomCoordinates(min, max);
  return { Length: randomSizes.x, Width: randomSizes.y, Height: randomSizes.z };
}
