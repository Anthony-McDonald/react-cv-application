import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <leftSide className="sidebar">
      sidebar
    </leftSide>
    <rightSide className="mainarea">
    mainarea
    </rightSide>
    {/* <App></App> */}
  </React.StrictMode>,
)
