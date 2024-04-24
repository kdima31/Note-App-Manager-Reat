import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    edit: (state, action) => {
      state[Number(action.payload.params)] = action.payload.values;
      console.log(action.payload);
    },
    del: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
export const { add, edit, del } = NoteSlice.actions;
export default NoteSlice.reducer;
