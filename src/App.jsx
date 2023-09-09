import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'lib/api/auth';
import { useEffect, useState } from 'react';
import Router from 'Router';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setIsLoggedIn(true);
      console.log(user);
      setInit(true);
    });
  }, []);
  return init ? <Router isLogged={isLoggedIn} /> : '';
};

export default App;
