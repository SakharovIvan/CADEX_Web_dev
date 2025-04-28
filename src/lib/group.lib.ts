import * as THREE from "three";
export type Coordinates = {
  x: number;
  y: number;
  z: number;
};

export interface MyGroup {
  userNumber: number;
  position: Coordinates;
  color: ColorArray;
  id: number;
  type: GROUPTYPES;
  size: Size;
}

export interface MyGroupForm {
  userNumber: number;
  type: GROUPTYPES;
  size: Size;
  color: ColorArray
}

export type ColorArray =[
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];
export interface MyGroupContextValue {
  groups: MyGroup[];
  addGroup: (groupArray: MyGroupForm[]) => void;
  toggle:number|null;
  toggleGroup: (id: number|null) => void;
  clearGroups: () => void;
}

export type Size = {
  Length: number;
  Width: number;
  Height: number;
};

export enum GROUPTYPES {
  BOX = "Box",
  PYRAMID = "Pyramid",
}
