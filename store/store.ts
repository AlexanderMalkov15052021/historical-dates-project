import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dateAPI } from "services/DateService";
import circleStateSlice from 'services/CircleService'

const rootReducer = combineReducers({
    [dateAPI.reducerPath]: dateAPI.reducer,
    circleState: circleStateSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(dateAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];