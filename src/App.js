import Login from './Components/Login/Login';
import Search from './Components/Search/Search'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" component={() => <Login authorized={token}/>} />
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={() => <Search authorized={token}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
