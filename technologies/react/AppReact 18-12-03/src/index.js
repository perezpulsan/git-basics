import React from "react";
import App from "./components/App";
import React from "react-dom";
import "style.scss";
import App from "App";
import {createStore} from "redux";
import reducer from "./reducer";
import {Provider} from "react-redux";

import {render} from "react-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "./sass/style.scss";

const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSIONS_ && window._REDUX_DEVTOOLS_EXTENSIONS_());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

render(<App />, document.querySelector("#main"));
