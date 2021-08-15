import { configureStore } from '@reduxjs/toolkit'
import ConfigSlice from './slices/ConfigSlice'
import DrawerSlice from './slices/DrawerSlice'

export default configureStore({
  reducer: {
    drawer: DrawerSlice,
    config: ConfigSlice
  },
})