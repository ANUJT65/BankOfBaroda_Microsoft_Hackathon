import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
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
import SingleApplicationPL from './pages/SinglePageApplicationPL';
import Login3 from './pages/Login3';
import NewHome from './pages/NewHome';
import BankMails2 from './pages/BankMails2';
import NewApplicationMenu from './components/NewApplicationMenu';
import PageNotFound from './pages/PageNotFound';
import Emails from './pages/Emails';
import EmailMarketing from './pages/EmailMarketing';
import Datavis from './pages/Datavis';
import Home2 from './pages/Home2';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login3 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/application" element={<Application />} />
          <Route path="/bankdashboard" element={<BankDashboard />} />
          <Route path="/bankmails" element={<BankMails2 />} />
          <Route path="/datachat" element={<DataChat />} />
          <Route path="/newcustdb" element={<CustDash2 />} />
          <Route path="/dashboardPL" element={<DashboardPL />} />
          <Route path="/singleapplication/:applicationId" element={<SingleApplication />} /> {/* Update this line */}
          <Route path="/newbankdb" element={<BankDash2 />} />
          <Route path="/singleapplicationPL/:applicationId" element={<SingleApplicationPL />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/emailmarketing" element={<EmailMarketing />} />
          <Route path="/datavis" element={<Datavis />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
