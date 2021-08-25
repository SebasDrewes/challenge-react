import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const token = localStorage.getItem('token')
  return (
    <div className="app">
      <h1>Application</h1>
      <Router>
        <Switch>
          <Route exact path="/login" component={() => <Login authorized={token}/>} />
          <Route exact path="/" component={() => <Home authorized={token}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
