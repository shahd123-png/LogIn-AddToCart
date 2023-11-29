import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './AppRouter';
import Header from '../components/common/Header/Header';
const RouterRoutes = () => {
  return (
    <Router>
      <AppRouter/>
    </Router>
  )
}

export default RouterRoutes
