import { configureStore, createSlice } from '@reduxjs/toolkit'

const darkMode = createSlice({
    name : 'darkMode',
    initialState : {
        value : false,
    },
    reducers : {
        changeMode : (state) => {
            state = !state
        }
    }
})

export let { changeMode } = darkMode.actions;


export default configureStore({
    reducer : {
        darkMode : darkMode.reducer,
    },
})
