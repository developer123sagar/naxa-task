import { MapActionTypes, UPDATE_MAP_CENTER, UPDATE_MAP_ZOOM } from "@/types";

export interface MapState {
    center: number[];
    zoom: number;
}

const initialState: MapState = {
    center: [84.124, 28.3949],
    zoom: 6,
};

export const mapReducer = (
    state = initialState,
    action: MapActionTypes
): MapState => {
    switch (action.type) {
        case UPDATE_MAP_CENTER:
            return {
                ...state,
                center: action.payload as number[]
            };
        case UPDATE_MAP_ZOOM:
            return {
                ...state,
                zoom: action.payload as number,
            };
        default:
            return state;
    }
};
