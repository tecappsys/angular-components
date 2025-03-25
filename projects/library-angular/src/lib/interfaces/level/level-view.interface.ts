import { Operation } from "./level-operation.interface";

export interface View {
    id: number;
    name: string;
    viewClass: string;
    appViewName: string | null;
    baseUrl: string;
    operations: Operation[];
    searchView: boolean;
    saveView: boolean;
    exportView: boolean;
    helpView: string | null;
    appType: string | null;
    hasStyles: boolean | null;
}