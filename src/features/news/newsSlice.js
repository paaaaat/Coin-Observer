import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadNews = createAsyncThunk(
  'news/loadNews',
  async (topic) => {
    const data = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${topic}&pageNumber=1&pageSize=8&autoCorrect=true`, {
    	"method": "GET",
    	"headers": {
    		"x-rapidapi-key": "50d9806ae4msh8b3c1a091e09fcdp1559b8jsnb3a51e08f24b",
    		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
    	}
    });
    const json = await data.json();
    return json;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: {
    [loadNews.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadNews.fulfilled]: (state, action) => {
      state.news = action.payload.value;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadNews.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectNews = (state) => state.news.news;
export default newsSlice.reducer;
