import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { decodeCanvasRequest } from './canvasUtils'

let canvasContext = null

const form = document.forms[0]
const signedRequest = form?.signed_request?.value

if (signedRequest) {
  canvasContext = decodeCanvasRequest(signedRequest)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App canvasContext={canvasContext} />
  </React.StrictMode>
)
