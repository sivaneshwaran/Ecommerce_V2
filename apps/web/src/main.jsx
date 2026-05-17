import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Navbar from './component/Navbar.jsx'
import Page from './Page.jsx'
import Footer from "./component/Footer.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import userStore from './store/userStore.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={userStore}>
      <BrowserRouter>
        <Navbar />
        <Page />
        <Footer/>
      </BrowserRouter>
    </Provider> 
  </StrictMode>
);
