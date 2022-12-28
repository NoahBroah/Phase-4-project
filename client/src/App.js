import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
   
  // if(!currentUser) return <Signup setCurrentUser={setCurrentUser} />
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route exact path="/">
          <Home user={currentUser}/>
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
