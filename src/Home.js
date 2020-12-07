import React from 'react';
import { getUser, removeUserSession } from './utils/session';

function Home(props) {
  const user = getUser();
  console.log(user)
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      Welcome {user}!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Home;