import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, CheckCircle2, AlertCircle, ShieldCheck, UserCheck } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <div className="login-container">
      {isSuccess ? (
        <div className="logged-in-card">
          <div className="logged-in-avatar">
            <CheckCircle2 size={36} />
          </div>
          <h2>Welcome back!</h2>
          <p>You have successfully logged in as <br /><strong style={{ color: '#e2e8f0' }}>{email}</strong></p>
          <button className="submit-btn" onClick={handleReset}>
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <div className="login-header">
            <div className="logo-badge">
              <ShieldCheck size={28} />
            </div>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          {errorMessage && (
            <div className="alert-message alert-error">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <Mail size={18} />
                </span>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <Lock size={18} />
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-link" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-grid">
            <button
              type="button"
              className="social-btn"
              onClick={() => {
                setEmail('alex.developer@example.com');
                setPassword('demo12345');
              }}
            >
              <UserCheck size={16} />
              <span>Demo Fill</span>
            </button>
            <button
              type="button"
              className="social-btn"
              onClick={() => {
                setEmail('sarah.smith@example.com');
                setPassword('securePass456');
              }}
            >
              <span>Quick Test</span>
            </button>
          </div>

          <div className="login-footer">
            Don't have an account?
            <a href="#signup" onClick={(e) => { e.preventDefault(); alert('Redirecting to registration...'); }}>
              Sign up
            </a>
          </div>
        </>
      )}
    </div>
  );
}
