import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initalState, reducer } from './reducers/countReducer.js'

// creation du context
export const CountContext = React.createContext()

//creation du Provider = sert à dire à quelles partie ud programme on donne accès au context
const CountProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initalState)
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
