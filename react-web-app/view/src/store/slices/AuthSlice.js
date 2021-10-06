import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
const initialState = {
  data:[],
  assignee:[],
  wbs: [],
  status:'idle',
  error:''
}


export const fetchWbsThunk = createAsyncThunk('wbs/createWbsThunk', async (data) => {
  const response = await JsonClient.post('wbs/create/', data)
  // console.log("wbs/create/", response.data)
  return response.data
})

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchProjectsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProjectsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = action.payload
    },
    [fetchProjectsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchProjectsAssigneeThunk.fulfilled]: (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.assignee = action.payload
    },
    [fetchWbsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.wbs = action.payload
  },
  }
})

// Action creators are generated for each case reducer function

export default projectsSlice.reducer
