import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        Year: "Year",
        Color: "Color",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.Year = action.payload},
        chooseColor: (state, action) => { state.Color = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor} = rootSlice.actions