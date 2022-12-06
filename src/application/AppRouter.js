import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from '../pages/startPage/Start';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Start />}/>
          <Route path="*" element={()=> <div>404</div>}/>
        </Routes>
    </Router>
  )
}
