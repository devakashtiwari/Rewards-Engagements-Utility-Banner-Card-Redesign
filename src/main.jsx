import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './styles/index.css'
import App from './App.jsx'

/**
 * Application entrypoint: mounts the root React tree to the DOM with StrictMode.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
