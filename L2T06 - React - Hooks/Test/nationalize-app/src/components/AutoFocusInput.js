import { useState, useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const [username, setUsername] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
          />
          <h2>{ username}</h2>
    </div>
  );
}
