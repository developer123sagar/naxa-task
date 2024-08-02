import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "@reduxjs/toolkit";

import { projectReducer } from "@/redux/reducers/projectReducer";
import { rootSaga } from '@/redux/sagas';

const rootReducer = combineReducers({
    project: projectReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
sagaMiddleware.run(rootSaga)
export default store