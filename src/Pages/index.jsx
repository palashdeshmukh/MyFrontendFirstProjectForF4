import React, { useState } from 'react';
import '../Pages/sign-up.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    // Basic form validation
    if (!fullName || !email || !password || !confirmPassword) {
      setErrors(['All fields are mandatory.']);
      return;
    }

    if (password !== confirmPassword) {
      setErrors(['Passwords do not match.']);
      return;
    }

    // Submit the form or perform further actions
    // ...
    console.log('Form submitted successfully!');
  };

  return (
    <form
      action=""
      method="post"
      target="_blank"
      autoComplete="on"
      autoSave="on"
      autoCapitalize="on"
    >
      <div id="signup-wrapper">
        <div className="container box1">
          <h1>Signup</h1>
        </div>
        <div className="container box2">
          <input
            className="myInputsize"
            type="text"
            id="full-name"
            name="full-name"
            placeholder="Full Name"
            maxLength={30}
            minLength={25}
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="myInputsize"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            maxLength={30}
            minLength={25}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="myInputsize"
            type="password"
            id="pass-word"
            name="pass-word"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="myInputsize"
            type="password"
            id="confirm-pass"
            name="confirm-pass"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {errors.length > 0 && <div className="msg error">{errors.join(' ')}</div>}
        {/* <div className="msg success">Successfully Signed Up!</div> */}
      </div>
      <div className="thesubmit-container">
        <input type="submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Signup;
