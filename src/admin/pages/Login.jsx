import { auth } from "../../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";  // ← add this

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // ← add this

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
      navigate("/dashboard");  // ← add this, change "/home" to whatever your next page route is
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login-screen">
      <h1>Shelbrew</h1>
      <form className="login-form" onSubmit={signIn}>
        <div className="input-field">
          <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;