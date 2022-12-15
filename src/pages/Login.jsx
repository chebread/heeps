import {
  auth,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
} from 'lib/api/auth';
import isEmailFormat from 'lib/utils/isEmailFormat';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState(null);

  const login = async email => {
    console.log(email);
    const actionCodeSettings = {
      url: 'http://localhost:8080',
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch(error => {
        console.log(error);
      });
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const savedEmail = window.localStorage.getItem('emailForSignIn');
      await signInWithEmailLink(auth, savedEmail, window.location.href)
        .then(result => {
          console.log(result);
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch(error => {});
    }
  };
  const on = e => {
    const {
      keyCode,
      target: { value },
    } = e;
    const isEmailFormatMatched = isEmailFormat(value);
    if (keyCode === 13 && isEmailFormatMatched) {
      setEmail(value);
      login(value);
    }
  };
  return (
    <div>
      <h1>to login by email</h1>
      <input type="email" onKeyDown={on} />
    </div>
  );
};

export default Login;
