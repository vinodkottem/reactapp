import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

import PrivateRoute from './utils/LoginCheckRoute';
import PublicRoute from './utils/HomeRoute';
import { getToken } from './utils/session';

function App() {
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
  }, []);
  console.log(authLoading,getToken())
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;