import React, { useState } from 'react';
import './Login.css';
import Header from '../components/Header';

const Login = () => {
  const [role, setRole] = useState('Doctor');
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Sign in');

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText('Signing in...');
    setTimeout(() => {
      setButtonText('Welcome!');
      setTimeout(() => {
        setLoading(false);
        setButtonText('Sign in');
      }, 1500);
    }, 2000);
  };

  const handleHelpClick = () => {
    alert('Contact admin or use password reset if available.');
  };

  return (
    <>
      <Header/> 
    <div className="wrap">
      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      <section className="hero">
        <div className="logo">
          <div className="mark" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.98" />
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: '#01579b' }}>MediCare Portal</div>
            <div style={{ fontSize: 13, color: '#0277bd' }}>Secure. Fast. Patient-first.</div>
          </div>
        </div>
        <h1>Sign in to your medical dashboard</h1>
        <p className="lead">
          Access patient records, appointments, lab results and telemedicine from a secure, modern portal built for hospitals, clinics and healthcare staff.
        </p>
      </section>

      <aside className="card" id="card">
        <div className="card-header">
          <h2>Welcome back</h2>
          <div className="toggle" role="tablist">
            <button className={role === 'Doctor' ? 'active' : ''} onClick={() => handleRoleChange('Doctor')}>
              Doctor
            </button>
            <button className={role === 'Patient' ? 'active' : ''} onClick={() => handleRoleChange('Patient')}>
              Patient
            </button>
          </div>
        </div>

        <form id="loginForm" autoComplete="on" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email or ID</label>
            <input id="email" name="email" type="text" placeholder="name@hospital.com or staff-id" required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <label style={{ fontSize: 13, color: '#0277bd', display: 'flex', gap: 6, alignItems: 'center' }}>
              <input type="checkbox" /> Remember
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              <button type="button" className="btn btn-ghost" id="helpBtn" onClick={handleHelpClick}>
                Need help?
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {buttonText}
              </button>
            </div>
          </div>
          <div className="or">Or continue with</div>
          <div className="icons">
            <div className="icon" title="Google">G</div>
            <div className="icon" title="Microsoft">M</div>
          </div>
        </form>
        <div className="pulse"></div>
      </aside>
    </div>
    </>
  );
};

export default Login;
