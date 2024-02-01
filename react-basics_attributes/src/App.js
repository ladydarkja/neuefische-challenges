import React from "react";
import "./styles.css";

export default function App() {
  return <ThisIsAnArticle />;
}

function ThisIsAnArticle() {
  return (
    <article className="article">
      <h2 className="article__title">This is an articles title</h2>
      <label htmlFor="input">type in whatever you like</label>
      <input id="input" />
      <a className="article__link" href="https://de.wikipedia.org/wiki/Dog">
        Dogs
      </a>
    </article>
  );
}
