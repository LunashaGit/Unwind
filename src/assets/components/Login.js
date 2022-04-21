import React from "react";

const Login = () => {
    
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "paul@admin.org") {
            window.location.href = "/admin";
            console.log("going to admin")
        } else if(email === "paul@user.org") {
            window.location.href = "/user";
            console.log("going to user")
        } else if(email === "paul@pro.org") {
            window.location.href = "/pro";
            console.log("going to pro")
        } else {
            setError("Invalid email or password");
            console.log(error)
        }
    };

    
  return (
    <div>
      <h1>test</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>{error}</p>
        </form>
    </div>
  );
};

export default Login;
