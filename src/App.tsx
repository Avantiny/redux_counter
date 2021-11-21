import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'

const Button = styled.button`
color: red;
`

const selectCount = (state: any) => state.counter.value
const INITIAL_VALUE = 0

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      value: INITIAL_VALUE,
  },
  reducers: {
      addOne: state => {
      state.value += 1;
      },
      addTwo: state => {
          state.value += 2;
      },
      subtractOne: state => {
        state.value -= 1;
        },
      subtractTwo: state => {
        state.value -= 2;
        },
      powTwo: state => {
          state.value = Math.pow(state.value,2)
      },
      powByItself: state => {
        state.value = Math.pow(state.value,state.value)
      },
      square: state => {
        state.value = Math.sqrt(state.value)
      },
      setInitial: state => {
        state.value = INITIAL_VALUE
      },
  },
});

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <>
      <div>
        Counter: {count}
      </div>
      <Button onClick = {() => dispatch(counterSlice.actions.addTwo())}>
        x + 1
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.addTwo())}>
        x + 2
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.subtractOne())}>
        x - 1
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.subtractTwo())}>
        x - 2
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.powTwo())}>
        x^2
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.powByItself())}>
        x^x
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.square())}>
        sqrt(x)
      </Button>
      <Button onClick = {() => dispatch(counterSlice.actions.setInitial())}>
        set to {INITIAL_VALUE}
      </Button>
    </>
  )
}

export default App
