import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      // Instead of creating the user here, we'll just validate the email and password
      // and then redirect to the StepByStepSignup component
      if (!email || !password) {
        setErrorMessage('Please enter both email and password');
        return;
      }

      // You might want to add more validation here (e.g., email format, password strength)

      // If validation passes, redirect to StepByStepSignup with email and password as state
      navigate('/signup', { state: { email, password } });
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
      <button onClick={() => navigate('/')}>
        Already have an account? Login
      </button>
    </div>
  );
}

export default UserRegistration;