import { configureStore } from "@reduxjs/toolkit";
import { exhibitionSlice } from "../slices";

export const store = configureStore(exhibitionSlice);