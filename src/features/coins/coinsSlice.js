import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { selectSearchTerm } from '../search/searchSlice';

export const loadCoins = createAsyncThunk("coins/loadCoins", async (page) => {
const data = await fetch(
  `https://api.nomics.com/v1/currencies/ticker?key=0aa8128853e82ab1ac0366ba9e0416bf986d0425&interval=1d&convert=EUR&sort=rank&per-page=100&page=${page}`
);
  const json = await data.json();
  return json;
});

export const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadCoins.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadCoins.fulfilled]: (state, action) => {
      state.coins = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadCoins.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectCoins = (state) => state.coins.coins;

export const selectFilteredCoinCards = (state) => {
  const coins = selectCoins(state);
  const searchTerm = selectSearchTerm(state);

  return coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default coinsSlice.reducer;
