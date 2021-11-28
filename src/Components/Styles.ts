import styled from 'styled-components'
import galaxy from '../Assets/Galaxy.jpg'

export const Button = styled.button`
  background-color: #083e639d;
  border: 2px solid black;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 500;
  margin-left: 10px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    box-shadow: rgba(80, 63, 205, 0.863) 0 5px 40px;
    transition-duration: 0.1s;
  }
  @media (max-width: 870px) {
    font-size: 20px !important;
    margin-top: 10px;
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  align-content: center;
  @media (max-width: 870px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`

export const MainDiv = styled.div`
  align-self: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  align-content: center;
  margin: 0px;
  padding: 0px;
  background: url(${galaxy});
  background-size: 100% 100%;
`

export const CounterDiv = styled.div`
  padding-top: 30vh;
  display: flex;
  align-self: center;
  opacity: 0.8;
  justify-content: center;
  flex-direction: row;
  color: white;
  font-family: 'Inter UI', 'SF Pro Display';
  text-shadow: 2px 2px 8px black;
  word-wrap: break-word;
`

export const Span = styled.span`
  font-size: 20vh;
  font-size: 9vw;
  text-shadow: rgb(89, 71, 219) 0 15px 40px, 2px 2px 8px black;
`
