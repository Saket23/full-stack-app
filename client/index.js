import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./src/reducer";
import Container from "./src/component";
import Details from "./src/component/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const middleWares = [thunkMiddleware];
const store = createStore(reducer, applyMiddleware(...middleWares));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Container />
            </Route>
            <Route path="/customer/:customerId" exact>
              <Details />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
