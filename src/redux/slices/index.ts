import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChineseArt, FilipinoArt, IndianArt, JapaneseArt } from "../../images";

export interface Art {
    image: string,
    text: string,
    index: number
}

export interface Exhibition {
    name: string,
    selected: boolean,
    art: Art[],
    design?: string
}

export interface ExhibitionState {
    exhibits: Exhibition[],
    selectedExhibit: Exhibition
}

const initState: ExhibitionState = {
    exhibits: [{ name: 'Chinese', selected: true, art: ChineseArt, design: 'cExhibitWH.jpg' }, { name: 'Japanese', selected: false, art: JapaneseArt, design: 'jExhibitWH.jpg' }, { name: 'Indian', selected: false, art: IndianArt, design: 'iExhibitWH.jpg' }, { name: 'Filipino', selected: false, art: FilipinoArt, design: 'fExhibitWH.jpg' }],
    selectedExhibit: { name: 'Chinese', selected: true, art: ChineseArt, design: 'cExhibitWH.jpg' }
}

export const exhibitionSlice = createSlice({
    name: 'ExhibitionSlice',
    initialState: initState,
    reducers: {
        setSelectedExhibit: (state: ExhibitionState, { payload }: PayloadAction<number>) => {
            state.exhibits.forEach((item, index) => {
                if (index !== payload) {
                    item.selected = false;
                } else {
                    item.selected = true;
                }
            })
            state.selectedExhibit = state.exhibits[payload];
        }
    }
});

export const {
    setSelectedExhibit
} = exhibitionSlice.actions