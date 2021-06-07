import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

const todayISO = today.toISOString();
const yesterdayISO = yesterday.toISOString();

export const loadChart = createAsyncThunk('chart/loadChart', async (coin) => {
  const data = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/${coin}/EUR/history?period_id=1HRS&time_start=${yesterdayISO}&time_end=${todayISO}`, {
      method: 'GET',
      headers: {
        'X-CoinAPI-Key': '47BEDCB8-219B-490D-9146-BDF6AD29ABED',
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip'
      }
    }
  );
  const json = await data.json();
  return json;
});

export const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    chart: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadChart.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadChart.fulfilled]: (state, action) => {
      state.chart = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadChart.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
});

export const selectChart = (state) => state.chart.chart;
export default chartSlice.reducer;
