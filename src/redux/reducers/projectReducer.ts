import { FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, Project, ProjectActionTypes } from "@/types";

interface ProjectState {
    loading: boolean;
    projects: Project[];
    error: string | null;
}

const initialState: ProjectState = {
    loading: false,
    projects: [],
    error: null
};

export const projectReducer = (
    state = initialState,
    action: ProjectActionTypes
): ProjectState => {
    switch (action.type) {
        case FETCH_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.payload
            };
        case FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
