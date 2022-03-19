import "./Reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DesignPage from "./pages/designSystem";
import TopNav from "./components/topNav";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav></TopNav>
      </header>
      <Router>
        <Switch>
          <Route exact path="/designsystem">
            <DesignPage></DesignPage>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
