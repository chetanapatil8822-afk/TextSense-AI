import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AUTH_STATES = {
  LOGGED_OUT: 'LOGGED_OUT',
  LOGGED_IN: 'LOGGED_IN',
  GUEST: 'GUEST',
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const saved = localStorage.getItem('textsense_auth');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.authState || AUTH_STATES.LOGGED_OUT;
      } catch (e) {
        return AUTH_STATES.LOGGED_OUT;
      }
    }
    return AUTH_STATES.LOGGED_OUT;
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('textsense_auth');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.user || null;
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem(
      'textsense_auth',
      JSON.stringify({ authState, user })
    );
  }, [authState, user]);

  // Modular Login Simulation (ready to plug into real backend API)
  const login = async (email, password) => {
    // Simulates an API delay
    await new Promise(resolve => setTimeout(resolve, 600));

    // Extract user display name from email
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const userData = {
      name: formattedName,
      email: email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(formattedName)}`,
      provider: 'email',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    setUser(userData);
    setAuthState(AUTH_STATES.LOGGED_IN);
    return { success: true, user: userData };
  };

  // Modular Register Simulation
  const register = async (fullName, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 600));

    const userData = {
      name: fullName,
      email: email,
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName)}`,
      provider: 'email',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    setUser(userData);
    setAuthState(AUTH_STATES.LOGGED_IN);
    return { success: true, user: userData };
  };

  // Continue with Google Simulation (ready for Google OAuth SDK)
  const loginWithGoogle = async (googleAccount = null) => {
    await new Promise(resolve => setTimeout(resolve, 400));

    const userData = {
      name: googleAccount?.name || 'Sanidhya Sharma',
      email: googleAccount?.email || 'sanidhyasharma@gmail.com',
      avatar: googleAccount?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      provider: 'google',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };

    setUser(userData);
    setAuthState(AUTH_STATES.LOGGED_IN);
    return { success: true, user: userData };
  };

  // Continue as Guest
  const continueAsGuest = () => {
    setUser({
      name: 'Guest User',
      isGuest: true,
    });
    setAuthState(AUTH_STATES.GUEST);
  };

  // Logout
  const logout = () => {
    setUser(null);
    setAuthState(AUTH_STATES.LOGGED_OUT);
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        user,
        isLoggedIn: authState === AUTH_STATES.LOGGED_IN,
        isGuest: authState === AUTH_STATES.GUEST,
        isLoggedOut: authState === AUTH_STATES.LOGGED_OUT,
        login,
        register,
        loginWithGoogle,
        continueAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
