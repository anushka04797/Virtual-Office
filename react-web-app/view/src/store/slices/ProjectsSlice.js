import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from '../../Config'
import sortBy from 'lodash/sortBy';

const initialState = {
  data:[],
  pm_projects:[],
  filtered_pm_projects:[],
  tdo_list:[],
  assignee:[],
  wbs: [],
  status:'idle',
  error:''
}

export const fetchProjectsThunk = createAsyncThunk('projects/fetchProjectsThunk', async (user_id) => {
  const response = await JsonClient.get('project/assigned/all/'+user_id+'/')
  return response.data
})
export const fetchProjectsForPMThunk = createAsyncThunk('projects/fetchProjectsForPMThunk', async (user_id) => {
  const response = await JsonClient.get('project/all/'+user_id+'/')
  console.log("pm projects", response.data)
  return response.data
})

export const fetchProjectsAssigneeThunk = createAsyncThunk('projects/fetchProjectsAssigneeThunk', async (work_package_number) => {
    const response = await JsonClient.get('project/assignee/list/'+work_package_number+'/')
    // console.log('thunk result',response.data)
    let projectAssignee = []
    response.data.map((item)=> {
        if(!projectAssignee.find(assignee => assignee.id == item.assignee.id)){
            projectAssignee.push(item.assignee)
        }
    })
    return projectAssignee
  })

export const fetchWbsThunk = createAsyncThunk('wbs/createWbsThunk', async (data) => {
  const response = await JsonClient.post('wbs/create/', data)
  // console.log("wbs/create/", response.data)
  return response.data
})


export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    push_item: (state,val) => {
      console.log('dispatching ----- ',val)
      state.tdo_list = [...state.tdo_list,val.payload]
    },
    filter_pm_projects: (state,tdos) => {
      if(tdos.length>0){
        state.filtered_pm_projects= state.pm_projects.filter((item)=> {tdos.find(tdo=>tdo.id==item.project.task_delivery_order.id)})
      }
      else{
        state.filtered_pm_projects=state.pm_projects
      }
    },
    reset_filter_pm_projects: (state) => {
      state.filtered_pm_projects=[]
    },
  },
  extraReducers: {
    [fetchProjectsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProjectsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.data = sortBy(action.payload, 'sub_task')
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
    [fetchProjectsForPMThunk.fulfilled]: (state, action) => {
      //state.status = 'succeeded'
      // Add any fetched posts to the array
      state.pm_projects = action.payload
      // if(action.payload.length>0){
      //   let temp = action.payload.filter((value, index, array) => array.findIndex((t) => t.task_delivery_order.id === value.task_delivery_order.id) === index); 
      //   let tdo_temp=[]
      //   temp.forEach((tdo,idx)=>{
      //     tdo_temp.push({value:tdo.task_delivery_order.title,label:tdo.task_delivery_order.title})
      //   })
      //   console.log('tod',tdo_temp)
      //   state.tdo_list= tdo_temp
      // }
    },
  }
})
//const get_projects_by_tdos = (state,tdos) => state.pm_projects.filter(item=>item.project.task_delivery_order.id==4)
// Action creators are generated for each case reducer function
export const { push_item,filter_pm_projects,reset_filter_pm_projects} = projectsSlice.actions
export default projectsSlice.reducer
