import { createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "./../node_modules/react-redux/es/components/connect";

const initializeState = createSlice({
  name: "nav",
  initialState: {
    origin: null,
    destination: null,
    travelTimeInformation: null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  initializeState.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

//Reducer
export default initializeState.reducer;
