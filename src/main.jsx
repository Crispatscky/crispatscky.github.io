import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { decodeCanvasRequest } from './canvasUtils'

let canvasContext = null

// Salesforce injects the Canvas form
const form = document.forms[0]
const signedRequest = form?.signed_request?.value

if (signedRequest) {
  canvasContext = decodeCanvasRequest(signedRequest)
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App canvasContext={canvasContext} />
  </React.StrictMode>
)
