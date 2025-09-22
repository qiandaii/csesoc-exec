import { useState } from 'react'
import './App.css'

import {
  Routes,
  Route,
  Navigate,
  useLocation,
  matchPath,
} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </>
  )
}

export default App
