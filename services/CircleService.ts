import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CircleState {
    index: number
}

const initialState = { index: 0 } as CircleState

const circleStateSlice = createSlice({
    name: 'circleState',
    initialState,
    reducers: {
        circleIndexIncrement(state) {
            state.index++;
        },
        circleIndexDecrement(state) {
            state.index--;
        },
        setCircleIndex(state, action: PayloadAction<number>) {
            state.index = action.payload;
        },
    },
})

export const { circleIndexIncrement, circleIndexDecrement, setCircleIndex } = circleStateSlice.actions
export default circleStateSlice.reducer