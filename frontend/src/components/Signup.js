import { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    axios.post("http://localhost:5000/signup", {
      email,
      password,
    }).then((res) => {
      alert(res.data);
    });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;