import { MapActionTypes, UPDATE_MAP_CENTER, UPDATE_MAP_ZOOM } from "@/types";

export const updateMapCenter = (center: number[]): MapActionTypes => ({
    type: UPDATE_MAP_CENTER,
    payload: center,
});

export const updateMapZoom = (zoom: number): MapActionTypes => ({
    type: UPDATE_MAP_ZOOM,
    payload: zoom
});
