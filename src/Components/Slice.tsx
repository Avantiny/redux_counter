import { createSlice } from '@reduxjs/toolkit'
import { INITIAL_VALUE } from './Constants'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: INITIAL_VALUE,
  },
  reducers: {
    addOne: state => {
      state.value += 1
    },
    addTwo: state => {
      state.value += 2
    },
    subtractOne: state => {
      state.value -= 1
    },
    subtractTwo: state => {
      state.value -= 2
    },
    powTwo: state => {
      state.value = Math.pow(state.value, 2)
    },
    powByItself: state => {
      state.value = Math.pow(state.value, state.value)
    },
    square: state => {
      state.value = isNaN(Math.sqrt(state.value)) ? state.value : Math.sqrt(state.value)
    },
    setInitial: state => {
      state.value = INITIAL_VALUE
    },
  },
})
