import React, { useState } from 'react';
import { setUserSession } from './utils/session';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  

  // handle button click of login form
  const handleLogin = () => {
    if(email.length < 6 || password.length <6){
        setError('email & password length cannot be lessthan 6');
    }else{
    setError(null);
    // Check an api to get the token and set the seesion here
    setLoading(false);
    setUserSession("user",email);
    props.history.push('/home');
    }
    
  }

  return (
    <div>
      Login<br /><br />
      <div>
        Email<br />
        <input type="text" name="email"  placeholder="Email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" name="password"  placeholder="Email" onChange={e => setPassword(e.target.value)} />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}



export default Login;