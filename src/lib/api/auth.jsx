import init from 'lib/api/init';
import {
  getAuth,
  signInWithEmailLink,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  onAuthStateChanged, // 로그인 됐는지 알려주는 메서드
} from 'firebase/auth';

const auth = getAuth(init);

export {
  auth,
  signInWithEmailLink,
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  onAuthStateChanged,
};
