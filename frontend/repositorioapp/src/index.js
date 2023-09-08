import React from "react";
import ReactDOM from "react-dom"; // Corrected import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Components/Profile/Store";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
