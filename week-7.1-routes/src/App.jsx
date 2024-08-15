import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/dashboard'))
const Landing = React.lazy(() => import('./components/landing'))

function App() {

 //suspense API
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}></Route>
          <Route path="/" element={<Suspense falback={"Loading..."}><Landing/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
    
    
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>
        navigate("/")}> Landing Page</button>
    <button onClick={()=>
        navigate("/dashboard")}> Dashboard Page</button>
        
  </div>
}

export default App
