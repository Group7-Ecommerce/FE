import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { HomepageType } from "../../types/Homepage";

interface StateType {
  cart: HomepageType[];
  loading: boolean;
  isLoggedIn: boolean;
}

const initialState: StateType = {
  cart: [],
  loading: true,
  isLoggedIn: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setCart, setLoading } = sliceState.actions;
export default reducer;
