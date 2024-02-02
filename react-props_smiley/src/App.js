import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? (
        <span aria-label="happy emoji">😊</span>
      ) : (
        <span aria-label="sad emoji">😔</span>
      )}
    </div>
  );
}
