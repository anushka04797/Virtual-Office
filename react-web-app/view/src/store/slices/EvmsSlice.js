import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'

const initialState ={
    data: [],
    status: 'idle',
    error: ''
}

export const fetchEvmsUpdateThunk = createAsyncThunk('evms/createEvmsThunk',async (data)=>{
    const response =await JsonClient.post('evms/create/',data)
    console.log('evms create response',response.data)
    return response.data
}

)
  export const evmsSlice = createSlice({
name:'evms',
initialState
  })
