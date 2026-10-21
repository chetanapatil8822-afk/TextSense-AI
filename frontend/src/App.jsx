import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AnalyzePage from './pages/AnalyzePage';
import ExperimentsPage from './pages/ExperimentsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const { isLoggedIn, isGuest } = useAuth();
  const isAuthorized = isLoggedIn || isGuest;

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-500 selection:text-white transition-colors duration-200">
      
      {/* Top Navigation Bar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Routed Content */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'analyze' && (
          isAuthorized ? <AnalyzePage /> : <LoginPage setActivePage={setActivePage} redirectedFromAnalyze={true} />
        )}
        {activePage === 'experiments' && <ExperimentsPage />}
        {activePage === 'login' && <LoginPage setActivePage={setActivePage} />}
        {activePage === 'register' && <RegisterPage setActivePage={setActivePage} />}
      </main>

      {/* Clean Minimal Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
