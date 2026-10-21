import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import Tooltip from './Tooltip';
import ProfileModal from './ProfileModal';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  LogIn, 
  LogOut, 
  User, 
  ArrowRight,
  FileText,
  BarChart2
} from 'lucide-react';

export const Navbar = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, isGuest, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const navigateTo = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left Side: Brand Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 group text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-600 dark:bg-teal-500 flex items-center justify-center text-white shadow-sm shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  TextSense
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              <button
                onClick={() => navigateTo('home')}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activePage === 'home'
                    ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                Home
              </button>

              <Tooltip content="Enter text and analyze its language patterns." position="bottom">
                <button
                  onClick={() => navigateTo('analyze')}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    activePage === 'analyze'
                      ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <FileText className="w-4 h-4 opacity-70" />
                  <span>Analyze Text</span>
                </button>
              </Tooltip>

              <Tooltip content="View experimental evaluation results." position="bottom">
                <button
                  onClick={() => navigateTo('experiments')}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    activePage === 'experiments'
                      ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <BarChart2 className="w-4 h-4 opacity-70" />
                  <span>Experiments</span>
                </button>
              </Tooltip>
            </nav>
          </div>

          {/* Right Side: Theme Toggle & Authentication Status */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Day / Night Mode Toggle */}
            <Tooltip content="Switch between light and dark appearance." position="bottom">
              <button
                type="button"
                onClick={handleThemeToggle}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-150 focus:outline-none active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-slate-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>
            </Tooltip>

            {/* Auth State: Logged Out */}
            {!isLoggedIn && !isGuest && (
              <Tooltip content="Sign in to access your TextSense account." position="bottom">
                <button
                  onClick={() => navigateTo('login')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-700 shadow-sm transition-all duration-150 active:scale-[0.98]"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </Tooltip>
            )}

            {/* Auth State: Guest Mode */}
            {isGuest && (
              <div className="flex items-center gap-2">
                <Tooltip content="Click to view guest profile." position="bottom">
                  <button
                    onClick={() => setProfileModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-800/80 hover:bg-amber-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Guest Mode</span>
                  </button>
                </Tooltip>
                <Tooltip content="Sign in to save your history." position="bottom">
                  <button
                    onClick={() => navigateTo('login')}
                    className="px-3 py-1.5 text-xs font-medium rounded-xl text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Sign In
                  </button>
                </Tooltip>
              </div>
            )}

            {/* Auth State: Logged In */}
            {isLoggedIn && user && (
              <div className="flex items-center gap-2">
                <Tooltip content="View your profile details" position="bottom">
                  <button
                    onClick={() => setProfileModalOpen(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-200/60 dark:border-slate-700/60 hover:border-teal-500/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <span className="max-w-[120px] truncate">{user.name}</span>
                  </button>
                </Tooltip>

                <Tooltip content="Sign out of your account." position="bottom">
                  <button
                    onClick={() => {
                      logout();
                      navigateTo('home');
                    }}
                    className="p-2 rounded-xl text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                    aria-label="Logout"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </Tooltip>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => navigateTo('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                activePage === 'home'
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('analyze')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                activePage === 'analyze'
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              <span>Analyze Text</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
            <button
              onClick={() => navigateTo('experiments')}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                activePage === 'experiments'
                  ? 'bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300'
                  : 'text-slate-700 dark:text-slate-200'
              }`}
            >
              <span>Experiments</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              {isLoggedIn && user ? (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setProfileModalOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
                  >
                    <User className="w-4 h-4 text-teal-600" />
                    <span>Signed in as {user.name}</span>
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      navigateTo('home');
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : isGuest ? (
                <div className="space-y-2">
                  <div className="px-3 py-1.5 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 rounded-lg">
                    Guest Mode Active
                  </div>
                  <button
                    onClick={() => navigateTo('login')}
                    className="w-full text-center px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-900 text-white dark:bg-teal-600"
                  >
                    Sign In / Create Account
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => navigateTo('login')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-900 text-white dark:bg-teal-600"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* User Profile Modal */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        setActivePage={setActivePage}
      />
    </>
  );
};

export default Navbar;
