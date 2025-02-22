import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { CursorHoverProvider } from './sections/contexts/cursorHoverContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CursorHoverProvider>
      <App />
    </CursorHoverProvider>
  </StrictMode>,
)
