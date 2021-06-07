import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from '../search/searchSlice';

export const favoriteCoinsSlice = createSlice({
  name: 'favoriteCoins',
  initialState: [],
  reducers: {
    addFavoriteCoin: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteCoin: (state, action) => {
      return state.filter((coin) =>
        coin.name !== action.payload.name
      );
    }
  }
});

export const {
  addFavoriteCoin,
  removeFavoriteCoin
} = favoriteCoinsSlice.actions;

export const selectFavoriteCoins = (state) => state.favoriteCoins;

export const selectFilteredFavoriteCoins = (state) => {
  const favoriteCoins = selectFavoriteCoins(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteCoins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export default favoriteCoinsSlice.reducer;
