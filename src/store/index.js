import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialConfState = { service: 0, budjet: 1 };

const configurationSlice = createSlice({
    name:'configuration',
    initialState: initialConfState,
    reducers: {
        setService(state, action){
            state.service = action.payload.service
        },
        setBudjet(state, action){
            state.budjet = action.payload.budjet
        }
    }
})


const store = configureStore({
    reducer: {
        configuration: configurationSlice.reducer
    }
})

export const configurationActions = configurationSlice.actions

export default store