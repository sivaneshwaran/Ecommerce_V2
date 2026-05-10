import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Page from './component/Page.jsx'
import Footer from "./component/Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Page />
    <Footer/>
  </StrictMode>,
)
