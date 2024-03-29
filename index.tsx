import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./src/App";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);