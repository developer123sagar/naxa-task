import { FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, Project, ProjectActionTypes } from "@/types";


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
