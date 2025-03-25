import { View } from "./level-view.interface";

export interface Module {
    id: number;
    baseUrl: string;
    views: View[];
}