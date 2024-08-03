export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export interface Project {
    id: number;
    category_title: string[];
    category_description: string[];
    focus_area: any[];
    photo: string;
    title: string;
    subtitle: string;
    clients: string;
    start_date: string;
    end_date: string;
    description: string;
    is_key_highlight: boolean;
    project_order: number;
    created_at: string;
    updated_at: string;
    ongoing: boolean;
    project_url: string | null;
    is_international_projects: boolean;
    category: number[];
}

export interface Category {
    id: number,
    category_of: string,
    title: string,
    description: string;
    order: number | null,
    icon: string | null,
    icon_thumbnail: string | null,
    highlight: boolean
}

export interface FetchProjectsRequest {
    type: typeof FETCH_PROJECTS_REQUEST;
}

export interface FetchProjectsSuccess {
    type: typeof FETCH_PROJECTS_SUCCESS;
    payload: Project[];
}

export interface FetchProjectsFailure {
    type: typeof FETCH_PROJECTS_FAILURE;
    error: string;
}

export interface FetchCategoryRequest {
    type: typeof FETCH_CATEGORY_REQUEST;
}

export interface FetchCategorySuccess {
    type: typeof FETCH_CATEGORY_SUCCESS;
    payload: Category[];
}

export interface FetchCategoryFailure {
    type: typeof FETCH_CATEGORY_FAILURE;
    error: string;
}

export type ProjectActionTypes =
    | FetchProjectsRequest
    | FetchProjectsSuccess
    | FetchProjectsFailure;

export type CategoryActionTypes =
    | FetchCategoryRequest
    | FetchCategorySuccess
    | FetchCategoryFailure;

export type ProjectCardProps = {
    title: string;
    subtitle: string;
    client: string;
    startDate: string;
    endDate: string;
    img: string;
    className?: string;
};
