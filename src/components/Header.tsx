'use client';

import { useState, useEffect } from 'react';
import { Search, User, Menu, Globe, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { isLoggedIn, currentUser, login, logout } = useAuth();
  const { t } = useLanguage();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Listen for custom event to show login modal
  useEffect(() => {
    const handleShowLoginModal = (event: Event) => {
      console.log('showLoginModal event received, opening login modal');
      setIsLoginOpen(true);
    };

    // Listen for the custom event
    document.addEventListener('showLoginModal', handleShowLoginModal);
    
    // Also listen for a click event on the document to debug
    const handleDocumentClick = (event: Event) => {
      console.log('Document clicked:', event);
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    console.log('Header component mounted, listening for showLoginModal events');
    
    return () => {
      document.removeEventListener('showLoginModal', handleShowLoginModal);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use auth context login function
    if (login(loginForm.email, loginForm.password)) {
      setIsLoginOpen(false);
    } else {
      alert('Invalid credentials. Use username: admin@gmail.com, password: admin');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', signupForm);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSignupMode) {
      setSignupForm({
        ...signupForm,
        [e.target.name]: e.target.value
      });
    } else {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value
      });
    }
  };

  const toggleMode = () => {
    setIsSignupMode(!isSignupMode);
    // Reset forms when switching modes
    setLoginForm({ email: '', password: '' });
    setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupMode(false);
    // Reset forms when closing
    setLoginForm({ email: '', password: '' });
    setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
          <img 
                src="/logos/Logo04.png" 
                alt="Phim Drama Logo" 
                className="h-10 w-auto"
              />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-gray-300 transition-colors hover:text-white whitespace-nowrap">
              {t('navigation.home')}
            </a>
            <a href="#" className="text-gray-300 transition-colors hover:text-white whitespace-nowrap">
              {t('navigation.genres')}
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('header.searchPlaceholder')}
                className="w-64 rounded-full bg-gray-800 px-10 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Login Button / User Info */}
            {!isLoggedIn ? (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="hidden md:flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 text-white px-4 py-2 transition-colors duration-200"
              >
                <User className="h-4 w-4" />
                <span>{t('header.login')}</span>
              </button>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                {/* Beautiful Welcome Label */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-lg px-4 py-2 text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{t('header.welcome')}, {currentUser}!</span>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 transition-colors duration-200 text-sm"
                >
                  <User className="h-4 w-4" />
                  <span>{t('header.logout')}</span>
                </button>
              </div>
            )}

            {/* Mobile Menu */}
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Login/Signup Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-gray-900 rounded-lg p-6 mx-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {isSignupMode ? t('auth.signup') : t('auth.login')}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Login Form */}
            {!isSignupMode && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.email')}
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    name="email"
                    value={loginForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.email')}
                  />
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.password')}
                  </label>
                  <input
                    type="password"
                    id="login-password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.password')}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded border-gray-600 bg-gray-800 text-red-600 focus:ring-red-500" />
                    <span className="text-sm text-gray-300">{t('auth.rememberMe')}</span>
                  </label>
                  <a href="#" className="text-sm text-red-400 hover:text-red-300">
                    {t('auth.forgotPassword')}
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  {t('auth.signIn')}
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                  </div>
                </div>

                {/* Google Login Button */}
                <button
                  type="button"
                  onClick={() => console.log('Google login clicked')}
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 py-2 px-4 rounded-lg transition-colors duration-200 font-medium border border-gray-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {t('auth.continueWithGoogle')}
                </button>
              </form>
            )}

            {/* Signup Form */}
            {isSignupMode && (
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.fullName')}
                  </label>
                  <input
                    type="text"
                    id="signup-name"
                    name="name"
                    value={signupForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.fullName')}
                  />
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.email')}
                  </label>
                  <input
                    type="email"
                    id="signup-email"
                    name="email"
                    value={signupForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.email')}
                  />
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.password')}
                  </label>
                  <input
                    type="password"
                    id="signup-password"
                    name="password"
                    value={signupForm.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.password')}
                  />
                </div>

                <div>
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('auth.confirmPassword')}
                  </label>
                  <input
                    type="password"
                    id="signup-confirm-password"
                    name="confirmPassword"
                    value={signupForm.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder={t('auth.confirmPassword')}
                  />
                </div>

                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-600 bg-gray-800 text-red-600 focus:ring-red-500" required />
                  <span className="text-sm text-gray-300">
                    {t('auth.agreeToTerms')}{' '}
                    <a href="#" className="text-red-400 hover:text-red-300">
                      {t('auth.termsOfService')}
                    </a>{' '}
                    {t('auth.and')}{' '}
                    <a href="#" className="text-red-400 hover:text-red-300">
                      {t('auth.privacyPolicy')}
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  {t('auth.createAccount')}
                </button>
              </form>
            )}

            {/* Toggle Mode Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-400">
                {isSignupMode ? t('auth.alreadyHaveAccount') + ' ' : t('auth.dontHaveAccount') + ' '}
              </span>
              <button
                onClick={toggleMode}
                className="text-red-400 hover:text-red-300 font-medium"
              >
                {isSignupMode ? t('auth.signIn') : t('auth.signup')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
