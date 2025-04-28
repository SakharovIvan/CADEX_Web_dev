  import { ColorArray } from "./group.lib";
  export function getColor(r:number,g:number,b:number):string {
    //value from 0 to 1
    var rhue = ((1 - r) * 120).toString(10);
    var ghue = ((1 - g) * 120).toString(10);
    var bhue = ((1 - b) * 120).toString(10);
    return `color(srgb-linear ${r} ${g} ${b})`
  }

  export function generateColors():ColorArray{
    return [
      [Math.random(), Math.random(), Math.random()],
      [Math.random(), Math.random(), Math.random()],
      [Math.random(), Math.random(), Math.random()],
      [Math.random(), Math.random(), Math.random()],
      [Math.random(), Math.random(), Math.random()],
      [Math.random(), Math.random(), Math.random()],
    ]
  }