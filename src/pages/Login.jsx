import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'lib/api/auth';
import isEmailFormat from 'lib/utils/isEmailFormat';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onChange = e => {
    const {
      target: { value, name },
    } = e;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };
  const onKeyDown = async e => {
    const { keyCode } = e;
    const isEnter = keyCode === 13;
    if (isEnter) {
      const isEmailFormatMatched = isEmailFormat(email);
      const isPwFormatMatched = true;
      if (isEmailFormatMatched && isPwFormatMatched) {
        await login({ email, password });
      } else {
        console.log('not logged');
      }
    }
  };
  const login = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        // ..
      });
  };
  return (
    <div>
      <h1>email</h1>
      <input
        name="email"
        type="email"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />

      <h1>password</h1>
      <input
        name="password"
        type="password"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Login;
