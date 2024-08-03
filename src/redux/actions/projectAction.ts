import { Category, CategoryActionTypes, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, Project, ProjectActionTypes } from "@/types";


export const fetchProjectsRequest = (): ProjectActionTypes => ({
    type: FETCH_PROJECTS_REQUEST
});

export const fetchProjectsSuccess = (projects: Project[]): ProjectActionTypes => ({
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects
});

export const fetchProjectsFailure = (error: string): ProjectActionTypes => ({
    type: FETCH_PROJECTS_FAILURE,
    error
});

export const fetchCategoryRequest = (): CategoryActionTypes => ({
    type: FETCH_CATEGORY_REQUEST
});

export const fetchCategorySuccess = (category: Category[]): CategoryActionTypes => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: category
});

export const fetchCategoryFailure = (error: string): CategoryActionTypes => ({
    type: FETCH_CATEGORY_FAILURE,
    error
});
