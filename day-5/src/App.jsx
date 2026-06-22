import React from "react";
import UserStatus from "./components/UserStatus";
import HookDemo from "./components/HookDemo";
import withLogger from "./components/withLogger";

const LoggedUserStatus = withLogger(UserStatus);

function App() {
  return (
    <div>
    

      <LoggedUserStatus />

      <hr />

      <HookDemo />
    </div>
  );
}

export default App;