import React from 'react'
import { Switch,Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/auth/Authentification'
import SignUp from './components/auth/SignUp'
import Profile from './components/auth/Profile'
import NavBar from  './components/NavBar'
import FicheLieu from './components/FicheLieu'

class Router extends React.Component {
render(){

return (
  <>
  <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Login} />
      <Route path="/Fiche" component={FicheLieu} />

      <Route path="/SignUp" component={SignUp} />
      <Route path="/Profile" component={Profile} />
    </Switch>
    
  </>
);
}
}
export default Router 