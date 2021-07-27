import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import './scss/style.scss';
import './App.css';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Pages
const Login=React.lazy(() => import('./pages/sign-in/signIn'));
const Register=React.lazy(()=>import('./pages/sign-up/signUp'));
const ForgotPass=React.lazy(()=>import('./pages/forgot-pass/forgotPass'));
const Dashborad=React.lazy(()=>import('./pages/dashboard/dashboard'));
const App =()=>{
  return(
    <>
     <HashRouter>
     <React.Suspense fallback={loading}>
     <Switch>
     <Route exact path="/" name="Sign in" render={props => <Login {...props}/>} />
     <Route exact path="/sign-up" name="Sign up" render={props => <Register {...props}/>} />
     <Route exact path="/forgot-password" name="Forgot Password" render={props => <ForgotPass {...props}/>} />
     <Route exact path="/dashboard" name="Dashboard" render={props => <Dashborad {...props}/>} />
     </Switch>
     </React.Suspense>
     </HashRouter>
    </>
  )
}
export default App;
