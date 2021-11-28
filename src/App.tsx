import { useSelector, useDispatch } from 'react-redux'
import Buttons from './Components/Buttons'
import { MainDiv, ButtonDiv, CounterDiv, Span } from './Components/Styles'

const selectCount = (state: any) => state.counter.value

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  return (
    <MainDiv>
      <CounterDiv>
        <h1>
          <Span>{Number.isInteger(count) ? count : count.toFixed(5)}</Span>
        </h1>
      </CounterDiv>
      <ButtonDiv>
        <Buttons dispatch={dispatch} />
      </ButtonDiv>
    </MainDiv>
  )
}

export default App
