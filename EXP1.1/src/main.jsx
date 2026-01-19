import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Full Stack Project Running 🚀</h1>
      <p>Welcome Ashish!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
