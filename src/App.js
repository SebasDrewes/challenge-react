import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={(token) => <Login token={token} />}
          />
          <PrivateRoute
            token={token}
            path={"/challenge-react"}
            exact
            component={Home}
          />
          <PrivateRoute
            token={token}
            path={"/search"}
            exact
            component={Search}
          />
          <PrivateRoute
            token={token}
            path={"/search/:id"}
            component={Details}
          />
          <PrivateRoute
            token={token}
            path={"/challenge-react/:id"}
            component={Details}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
