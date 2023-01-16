import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TheContextProvider} from './context/TheContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TheContextProvider>
      <App />
    </TheContextProvider>
  </React.StrictMode>,
)
