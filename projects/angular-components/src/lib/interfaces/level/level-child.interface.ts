import { Module } from "./level-module.interface";

export interface LevelChild {
    id: number;
    text: string;
    leaf: boolean;
    active: boolean;
    icon?: string;
    iconCustom?: string;
    function?: string;
    inicio?: any;
    dashboard?: any;
    key?: string;
    children?: LevelChild[];
    module?: Module;
    funcionSU?: string;
    tipoPantalla?: string;
    screen?: string;
    path?: string;
}