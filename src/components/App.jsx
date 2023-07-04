import Login from "./Login";
import React from "react";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello Users</h1> : <Login />}
    </div>
  );
}

export default App;
