import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import  Home  from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Login2 from './pages/Login2';
import Application from './pages/Application';
import BankDashboard from './pages/BankDashboard';
import BankMails from './pages/BankMails';
import DataChat from './pages/DataChat';
import { UserProvider } from './contexts/userContext';
import CustDash2 from './pages/CustDash2';
import DashboardPL from './pages/DashboardPL';
import SingleApplication from './pages/SingleApplication';
import BankDash2 from './pages/BankDash2';

const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/application" element={<Application />} />
        <Route path="/bankdashboard" element={<BankDashboard />} />
        <Route path="/bankmails" element={<BankMails />} />
        <Route path="/datachat" element={<DataChat />} />
        <Route path="/newcustdb" element={<CustDash2 />} />
        <Route path="/dashboardPL" element={<DashboardPL />} />
        <Route path="/singleapplication" element={<SingleApplication />} />
        <Route path="/newbankdb" element={<BankDash2 />} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App