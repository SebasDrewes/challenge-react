import Login from './Components/Login/Login';
import Search from './Components/Search/Search'
import Home from './Components/Home/Home';
import Details from './Components/Details/Details'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={Search} />
          <Route path="/search/:id" component={Details} />
          <Route path="/:id" component={Details} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
