import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data: [],
  status: 'idle',
  error: ''
}

export const fetchWbsThunk = createAsyncThunk('wbs/fetchWbsThunk', async (user_id) => {
  const response = await JsonClient.get('wbs/all/' + user_id)
  console.log("response.data", response.data)
  return response.data
})

export const fetchWbsUpdateThunk = createAsyncThunk('wbs/createWbsThunk', async (data) => {
  const response = await JsonClient.post('wbs/create/', data)
  console.log(response.data)
  return response.data
})

export const wbsSlice = createSlice({
  name: 'wbs',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchWbsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchWbsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchWbsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  }
})

// Action creators are generated for each case reducer function

export default wbsSlice.reducer
