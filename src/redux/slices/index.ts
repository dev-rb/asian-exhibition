import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Art {
    image: string,
    text: string
}

export interface Exhibition {
    name: string,
    selected: boolean,
    art?: Art[],
    design?: string
}

export interface ExhibitionState {
    exhibits: Exhibition[],
    selectedExhibit: Exhibition
}

const initState: ExhibitionState = {
    exhibits: [{ name: 'Japanese', selected: true }, { name: 'Chinese', selected: false }, { name: 'Indian', selected: false }, { name: 'Filipino', selected: false }],
    selectedExhibit: { name: 'Japanese', selected: true }
}

export const exhibitionSlice = createSlice({
    name: 'ExhibitionSlice',
    initialState: initState,
    reducers: {
        setSelectedExhibit: (state: ExhibitionState, { payload }: PayloadAction<number>) => {
            state.selectedExhibit = state.exhibits[payload];
        }
    }
});

export const {
    setSelectedExhibit
} = exhibitionSlice.actions