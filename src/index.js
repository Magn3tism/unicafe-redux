import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({ type: "GOOD" });
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "OK" });
        }}
      >
        Ok
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "BAD" });
        }}
      >
        Bad
      </button>{" "}
      <br />
      <p>Good: {store.getState().good}</p>
      <p>Ok: {store.getState().ok}</p>
      <p>Bad: {store.getState().bad}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
