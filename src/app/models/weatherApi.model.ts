import { Coordinate } from "./sub-model/coordinate.model";
import { Weather } from "./sub-model/weather.model";
import { Main } from "./sub-model/main.model";
import { Wind } from "./sub-model/wind.model";
import { Clouds } from "./sub-model/clouds.model";
import { Sys } from "./sub-model/sys.model";

export class WeatherApi {
    coord:Coordinate;
    weather:Weather[];
    base:string;  
    main:Main;
    visibility:number;
    wind:Wind;
    clouds:Clouds;
    dt:number;
    sys:Sys;
    id: number;
    name: string;          
}
