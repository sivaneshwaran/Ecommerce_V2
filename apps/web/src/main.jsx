import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav_bar from './component/Nav_bar.jsx'
import Page from './component/Page.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav_bar />
    <Page />
  </StrictMode>,
)
