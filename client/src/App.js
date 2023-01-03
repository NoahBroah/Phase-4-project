import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import ProjectListView from './ProjectListView';
import NewProjectView from './NewProjectView';
import EditProjectView from './EditProjectView';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
        {/* view all projects */}
        <Route path="/my_projects">
          <ProjectListView 
          // id={id}
          />
        </Route>
        {/* create new project */}
        <Route path="/my_projects/new">
          <NewProjectView />
        </Route>
        {/* display individual projects
        <Route path="/my_projects/:id">
          <ProjectView />
        </Route> */}
        {/* display all projects */}
        <Route path="/my_projects/:id/edit">
          <EditProjectView
          //  id={id}
           />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
