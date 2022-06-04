import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA7i8jFM95VZFBq7qBjX_jfrfOo3-5ZdDI",
  authDomain: "autenticacao-6543d.firebaseapp.com",
  projectId: "autenticacao-6543d",
  storageBucket: "autenticacao-6543d.appspot.com",
  messagingSenderId: "694815223899",
  appId: "1:694815223899:web:1f06269127ab2992ee0f7e"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;