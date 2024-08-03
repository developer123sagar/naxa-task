import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchCategory, fetchProjects } from "@/api";
import { fetchCategorySuccess, fetchProjectsFailure, fetchProjectsSuccess } from "@/redux/actions/projectAction";
import { Category, FETCH_CATEGORY_REQUEST, FETCH_PROJECTS_REQUEST, Project } from '@/types';


function* fetchProjectsSaga() {
    try {
        const res: Project[] = yield call(fetchProjects);
        yield put(fetchProjectsSuccess(res));
    } catch (error: any) {
        yield put(fetchProjectsFailure(error?.message));
    }
}

function* fetchCategorySaga() {
    try {
        const res: Category[] = yield call(fetchCategory);
        yield put(fetchCategorySuccess(res));
    } catch (error: any) {
        yield put(fetchProjectsFailure(error?.message));
    }
}

export function* watchProjectSaga() {
    yield takeLatest(FETCH_PROJECTS_REQUEST, fetchProjectsSaga);
    yield takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga)
}