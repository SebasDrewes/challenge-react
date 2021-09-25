import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            path="/login"
            exact
            component={Login}
          />
          <PrivateRoute
            path={"/challenge-react"}
            exact
            component={Home}
          />
          <PrivateRoute
            path={"/search"}
            exact
            component={Search}
          />
          <PrivateRoute
            path={"/search/:id"}
            component={Details}
          />
          <PrivateRoute
            path={"/challenge-react/:id"}
            component={Details}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
