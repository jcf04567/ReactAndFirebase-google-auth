import ChildApp from "./ChildApp";
import { auth, googleProvider } from "../service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithPopup } from "firebase/auth";

function Main() {
  const [user, loading, error] = useAuthState(auth);

  const signIn = () => {
    signInWithPopup(auth, googleProvider).catch((err) => alert(err.message));
  };

  return (
    <div className="app">
      {user ? <ChildApp /> : <button onClick={signIn}>Sign in Google Account</button>}
    </div>
  );
}

export default Main;
