import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar loggedIn={loggedIn}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
