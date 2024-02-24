import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dateAPI } from "services/DateService";
import { createWrapper } from "next-redux-wrapper";
import circleStateSlice from 'services/CircleService'
import datesStateSlice from "services/SetDateService";

const rootReducer = combineReducers({
    [dateAPI.reducerPath]: dateAPI.reducer,
    circleState: circleStateSlice,
    datesState: datesStateSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(dateAPI.middleware)
    })
}

export const wrapper = createWrapper(setupStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];