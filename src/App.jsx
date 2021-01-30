import React from 'react'
import Router from './Router'
import "./assets/reset.css"
//import "./assets/style.css"
import {Header} from "./components/Header";
import "./assets/sample.css";


const App = () => {
  return(
    <>
      
    <main className="c-main">
      <Router />
    </main>
    </>
    
  )
}

export default App;