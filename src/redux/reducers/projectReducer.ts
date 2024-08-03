import { Category, CategoryActionTypes, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, Project, ProjectActionTypes } from "@/types";

export interface ProjectState {
    loading: boolean;
    projects: Project[];
    category: Category[];
    error: string | null;
}

const initialState: ProjectState = {
    loading: false,
    projects: [],
    category: [],
    error: null
};

export const projectReducer = (
    state = initialState,
    action: ProjectActionTypes | CategoryActionTypes
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
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.payload?.filter(item => item.category_of === 'Portfolio')
            };
        case FETCH_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
