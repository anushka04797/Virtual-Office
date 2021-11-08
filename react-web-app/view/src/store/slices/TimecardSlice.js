import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'

const initialState ={
    data:[],
    // pm_timecards:[],
    status:'idle',
    error:''
}
export const fetchTimecardThunk =createAsyncThunk('timecard/fetchTimeCardThunk',async(user_id) =>{
    const response = await JsonClient.get('time-card/list/' +user_id+'/')
    console.log('time card for user',response)
    return response.data
})

export const timecardSlice = createSlice({
    name:'timecardList',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchTimecardThunk.pending]:(state,action) =>{
            state.status = 'loading'
        },
        [fetchTimecardThunk.fulfilled]:(state,action) =>{
            state.status = 'succeeded'
            state.data = action.payload
        },
        [fetchTimecardThunk.rejected]:(state,action) =>{
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})
export default timecardSlice.reducer