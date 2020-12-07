import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AAPI, ChineseArt, FilipinoArt, IndianArt, JapaneseArt } from "../../images";

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
    exhibits: [{ name: 'Filipino', selected: true, art: FilipinoArt, design: 'fExhibitWH.jpg' }, { name: 'Japanese', selected: false, art: JapaneseArt, design: 'jExhibitWH.jpg' }, { name: 'Indian', selected: false, art: IndianArt, design: 'iExhibitWH.jpg' }, { name: 'Chinese', selected: false, art: ChineseArt, design: 'cExhibitWH.jpg' }, { name: 'AAPI', selected: false, art: AAPI, design: 'aapiExhibitWH.jpg' }],
    selectedExhibit: { name: 'Filipino', selected: true, art: FilipinoArt, design: 'fExhibitWH.jpg' }
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