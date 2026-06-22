import React, { useState, useEffect, useRef } from "react";

function HookDemo() {
  const [message, setMessage] = useState("Hello");

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("[Hook Demo] useEffect called after render");

    if (inputRef.current) {
      console.log("[Hook Demo] useRef points to input element");
    }
  }, []);

  return (
    <div>
      <h2>Hooks Demo</h2>

      <p>
        [Hook Demo] useState value: {message}
      </p>

      <input
        ref={inputRef}
        placeholder="Type here"
      />

      <br />
      <br />

      <button onClick={() => setMessage("State Updated")}>
        Update State
      </button>
    </div>
  );
}

export default HookDemo;