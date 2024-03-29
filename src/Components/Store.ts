import { counterSlice } from './Slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
