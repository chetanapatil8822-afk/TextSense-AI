import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Tooltip from '../components/Tooltip';
import GoogleButton from '../components/GoogleButton';
import GoogleAccountModal from '../components/GoogleAccountModal';
import { Mail, Lock, UserCheck, AlertCircle, ArrowRight, Eye, EyeOff, KeyRound } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const LoginPage = ({ setActivePage, redirectedFromAnalyze = false }) => {
  const { login, loginWithGoogle, continueAsGuest } = useAuth();
  const { addToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  // 13. Standard RFC email format validation
  const validateEmailFormat = (input) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(input.trim());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
  };

  const fillDemoAccount = () => {
    setEmail('user@company.com');
    setPassword('SecurePass123!');
    setEmailError('');
    setPasswordError('');
    addToast('Demo credentials filled.', 'info');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      hasError = true;
    } else if (!validateEmailFormat(email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    try {
      await login(email, password);
      addToast('Welcome back to TextSense!', 'success');
      setActivePage('analyze');
    } catch (err) {
      setEmailError('Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const [googleModalOpen, setGoogleModalOpen] = useState(false);

  const handleGoogleLogin = () => {
    setGoogleModalOpen(true);
  };

  const handleSelectGoogleAccount = async (account) => {
    setGoogleModalOpen(false);
    setLoading(true);
    try {
      await loginWithGoogle(account);
      addToast(`Signed in with Google as ${account.name}`, 'success');
      setActivePage('analyze');
    } catch (err) {
      addToast('Google authentication failed. Please try again.', 'warning');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestAccess = () => {
    continueAsGuest();
    addToast('Exploring as Guest.', 'info');
    setActivePage('analyze');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10 sm:py-16">
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-8 space-y-6 transition-colors">
        
        {/* Header */}
        <div className="space-y-1.5 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Sign in to continue to TextSense.
          </p>
        </div>

        {/* Access requirement notice */}
        {redirectedFromAnalyze && (
          <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200 text-xs font-medium flex items-center gap-2.5 animate-fadeIn">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse flex-shrink-0"></div>
            <span>Please sign in or continue as guest to start text analysis.</span>
          </div>
        )}

        {/* 10. Continue with Google */}
        <div className="space-y-3">
          <GoogleButton onClick={handleGoogleLogin} disabled={loading} />
          
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
            <span className="bg-white dark:bg-slate-900 px-3 text-xs uppercase text-slate-400 font-medium tracking-wider">
              or continue with email
            </span>
          </div>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
          {/* Email Field */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="name@example.com"
                disabled={loading}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  emailError
                    ? 'border-rose-300 dark:border-rose-800 focus:ring-rose-500/40 focus:border-rose-500'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500/40 focus:border-teal-500'
                }`}
              />
            </div>
            {emailError && (
              <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{emailError}</span>
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Password
              </label>
              <button
                type="button"
                onClick={() => setForgotPasswordNotice(true)}
                className="text-xs font-medium text-teal-600 dark:text-teal-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                disabled={loading}
                className={`w-full pl-10 pr-10 py-2.5 rounded-xl border text-sm bg-slate-50 dark:bg-slate-850 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  passwordError
                    ? 'border-rose-300 dark:border-rose-800 focus:ring-rose-500/40 focus:border-rose-500'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500/40 focus:border-teal-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwordError && (
              <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{passwordError}</span>
              </p>
            )}
          </div>

          {/* Quick Demo Credential Filler */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={fillDemoAccount}
              className="text-xs text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 transition-colors"
            >
              <KeyRound className="w-3 h-3" />
              <span>Fill Demo Credentials</span>
            </button>
          </div>

          {/* Forgot Password Notice */}
          {forgotPasswordNotice && (
            <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200 flex items-start justify-between gap-2">
              <span>Password reset instructions will be sent once the backend email service is connected.</span>
              <button
                type="button"
                onClick={() => setForgotPasswordNotice(false)}
                className="text-teal-700 font-bold ml-1 hover:underline"
              >
                âœ•
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-600/30 transition-all duration-150 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Signing in...</span>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* 11. CONTINUE AS GUEST */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <Tooltip content="Use TextSense without creating an account." position="bottom" className="w-full">
            <button
              type="button"
              onClick={handleGuestAccess}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 transition-colors flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Continue as Guest</span>
            </button>
          </Tooltip>
        </div>

        {/* 12. CREATE ACCOUNT LINK */}
        <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400">
          <span>Don't have an account? </span>
          <button
            type="button"
            onClick={() => setActivePage('register')}
            className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
          >
            Create Account
          </button>
        </div>

        {/* Google Account Chooser Modal */}
        <GoogleAccountModal
          isOpen={googleModalOpen}
          onClose={() => setGoogleModalOpen(false)}
          onSelectAccount={handleSelectGoogleAccount}
        />

      </div>
    </div>
  );
};

export default LoginPage;
