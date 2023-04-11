import { auth } from "../service/firebase";
import { signOut } from "firebase/auth";

function ChildApp() {
  return(
    <button onClick={() => signOut(auth)}>Sign Out</button>
  );
}

export default ChildApp;
