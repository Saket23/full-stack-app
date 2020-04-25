import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./src/reducer";
import Container from "./src/component";

const middleWares = [thunkMiddleware];
const store = createStore(reducer, applyMiddleware(...middleWares));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
