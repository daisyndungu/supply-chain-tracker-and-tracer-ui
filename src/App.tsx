import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import LandingPage from './component/LandingPage';
import { isAuthenticated } from './utils/Auth'
import Dashboard from './component/Dashboard';

const ProtectedRoute = ({ children }: { children: React.ReactNode })  => {
  return isAuthenticated() ?<> {children}</> : <Navigate to="/" />;
};

const  App: React.FC = () => {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
