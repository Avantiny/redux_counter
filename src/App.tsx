import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import galaxy from './Galaxy.jpg'

const Button = styled.button`
  background-color: #083e639d;
  border: 2px solid black;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  /* flex-shrink: 0; */
  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 500;
  margin-left: 10px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
  box-shadow: rgba(80, 63, 205, 0.863) 0 5px 40px;
  transition-duration: .1s;
  }
  @media (max-width: 870px)  {
    font-size: 20px !important;
    margin-top: 10px;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  align-content: center;
  @media (max-width: 870px)  {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

`

const MainDiv = styled.div`
  align-self: center;
  width: 100%;
  height: 100vh;
  align-items: center !important;
  align-content: center;
  margin: 0px;
  padding: 0px;
  background: url(${galaxy});
  background-size: 100% 100%
`

const CounterDiv = styled.div`
display: flex;
align-self: center;
opacity: 0.8;
justify-content: center;
flex-direction: row;
color: white;
font-size: 50px;
font-family: "Inter UI","SF Pro Display";
text-shadow: 2px 2px 8px black;

`

const Span = styled.span`
text-shadow: rgb(89, 71, 219) 0 15px 40px, 2px 2px 8px black;

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
    <MainDiv>
      <CounterDiv>
        <h1 ><Span>{count}</Span></h1>
      </CounterDiv>
      <ButtonDiv>
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
      </ButtonDiv>
    </MainDiv>
  )
}

export default App
