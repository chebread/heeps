import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from 'firebase/auth';
import { auth } from 'lib/api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const onClickLogin = async e => {
    const {
      target: { name },
    } = e;
    if (name === 'gl') {
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      await signInWithPopup(auth, provider)
        .then(result => {
          const user = result.user;
          updateProfile(auth.currentUser, {
            displayName: 'Sam smith',
            photoURL:
              'https://i.pinimg.com/originals/12/d0/cd/12d0cd704833e15b3d2478af9a709d93.jpg',
          })
            .then(() => {
              console.log('succeed');
            })
            .catch(error => {
              console.log(error);
            });
          console.log(user);
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (name === 'ap') {
    }
  };
  return (
    <div>
      <h1>Google</h1>
      <button name="gl" onClick={onClickLogin}>
        Google Login
      </button>

      <h1>Apple</h1>
      <button name="ap" onClick={onClickLogin}>
        Apple Login
      </button>
    </div>
  );
};

export default Login;
