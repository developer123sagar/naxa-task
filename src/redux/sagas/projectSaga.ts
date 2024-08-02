import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchProjects } from "@/api";
import { fetchProjectsFailure, fetchProjectsSuccess } from "@/redux/actions/projectAction";
import { FETCH_PROJECTS_REQUEST, Project } from '@/types';


function* fetchProjectsSaga(): Generator {
    try {
        const projects: Project[] = yield call(fetchProjects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error: any) {
        yield put(fetchProjectsFailure(error?.message));
    }
}

export function* watchProjectSaga() {
    yield takeEvery(FETCH_PROJECTS_REQUEST, fetchProjectsSaga);
}