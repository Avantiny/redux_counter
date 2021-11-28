import { Dispatch } from '@reduxjs/toolkit'
import { INITIAL_VALUE } from './Constants'
import { counterSlice } from './Slice'
import { Button } from './Styles'

type Props = {
  dispatch: Dispatch<any>
}

const Buttons = ({ dispatch }: Props) => {
  return (
    <>
      <Button onClick={() => dispatch(counterSlice.actions.addOne())}>x + 1</Button>
      <Button onClick={() => dispatch(counterSlice.actions.addTwo())}>x + 2</Button>
      <Button onClick={() => dispatch(counterSlice.actions.subtractOne())}>x - 1</Button>
      <Button onClick={() => dispatch(counterSlice.actions.subtractTwo())}>x - 2</Button>
      <Button onClick={() => dispatch(counterSlice.actions.powTwo())}>x^2</Button>
      <Button onClick={() => dispatch(counterSlice.actions.powByItself())}>x^x</Button>
      <Button onClick={() => dispatch(counterSlice.actions.square())}>sqrt(x)</Button>
      <Button onClick={() => dispatch(counterSlice.actions.setInitial())}>
        set to {INITIAL_VALUE}
      </Button>
    </>
  )
}

export default Buttons
