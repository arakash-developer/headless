import React, { useState } from 'react';

const OTPManager = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const API_BASE = 'https://4amitest-bli6.wp1.sh/wp-json/otp/v1'; // ✅ Corrected

  const sendOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setOtp(data.otp);
        setMessage('OTP generated and saved.');
      } else {
        setMessage(data.message || 'Error sending OTP');
      }
    } catch (err) {
      setMessage('Request failed. Please try again.');
    }
  };

  const getOtp = async () => {
    try {
      const res = await fetch(`${API_BASE}/get?email=${encodeURIComponent(email)}`);
      const data = await res.json();

      if (res.ok) {
        setOtp(data.otp);
        setMessage('OTP retrieved from database.');
      } else {
        setMessage(data.message || 'OTP not found or expired');
      }
    } catch (err) {
      setMessage('Failed to retrieve OTP.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Email OTP Manager</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 10 }}
      />
      <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
        <button onClick={sendOtp} style={{ flex: 1 }}>Send OTP</button>
        <button onClick={getOtp} style={{ flex: 1 }}>Get OTP</button>
      </div>
      {message && <p>{message}</p>}
      {otp && <h3>Your OTP: {otp}</h3>}
    </div>
  );
};

export default OTPManager;
