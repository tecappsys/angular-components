import { LevelChild } from "./level-child.interface";

export interface Level {
    text: string;
    active: boolean;
    children: LevelChild[];
    perfilUsuario: string;       
    codSistemaInfo?: string;
    codAplicacion?: string; 
    icon?: string;
    iconCustom?: string;
    path?: string;
}