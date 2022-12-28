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

  // useEffect(() => {
  //   fetch("/me")
  //   .then((resp) => resp.json())
  //   .then((user) => {
  //     if(user.username) {
  //       setCurrentUser(user);
  //       setLoggedIn(true);
  //     }
  //   })
  // },[])

  // From the lessons on Authorization 

  useEffect(() => {
    fetch('/auth')
    .then(resp => {
      if(resp.ok){
        resp.json().then(user => setCurrentUser(user))
      }
    })
  }, [])
   
  // if(!currentUser) return <Login setCurrentUser={setCurrentUser} />
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Home user={currentUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
