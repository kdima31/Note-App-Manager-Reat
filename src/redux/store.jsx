import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./NoteSlice";
const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
