// Store the cards in a global state

import { Card } from "./components/Card/Card.js";
import { App } from "./components/App/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
