import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../features/coins/coinsSlice";
import chartReducer from '../features/chart/chartSlice';
import searchReducer from '../features/search/searchSlice';
import favoriteCoinsReducer from '../features/favoriteCoins/favoriteCoinsSlice';
import newsReducer from '../features/news/newsSlice';

export default configureStore({
  reducer: {
    coins: coinsReducer,
    chart: chartReducer,
    search: searchReducer,
    favoriteCoins: favoriteCoinsReducer,
    news: newsReducer
  }
});
