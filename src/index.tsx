import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { counterSlice } from './App';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
