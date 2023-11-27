import type { PageData } from "$lib/data/PageData";
import type { BuildingInfo } from "./BuildingInfo";

export interface MapPageData extends PageData {
    buildings: BuildingInfo[];
}