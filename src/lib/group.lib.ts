import * as THREE from "three";
export type Coordinates={
    x:number,
    y:number,
    z:number
}

export interface MyGroup {
    userNumber:number,
    position:Coordinates,
    color: THREE.Color,
    id:number,
    type:GROUPTYPES,
    size:Size
}

export interface MyGroupForm {
    userNumber:number,
    type:GROUPTYPES,
    size:Size,
    color: THREE.Color
}

export interface MyGroupContextValue{
    groups:MyGroup[];
    addGroup:({userNumber,type,size,color}:MyGroupForm)=>void;
    toggleGroup: (id: number) => void;
    clearGroups:()=>void;

}

export type Size={
    Length:number,
    Width:number,
    Height:number
}

export  enum GROUPTYPES{
    BOX="Box",
    PYRAMID="Pyramid"
}