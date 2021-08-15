import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import { ThemeProvider,createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { PALETTE_MODE } from './Config';
const theme = createTheme({
  palette: {
    mode: PALETTE_MODE,
    // primary:{
    //   main:"#BD9EFB"
    // }
  },
});
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// Pages
const Login = React.lazy(() => import('./pages/sign-in/signIn'));
const Register = React.lazy(() => import('./pages/sign-up/signUp'));
const ForgotPass = React.lazy(() => import('./pages/forgot-pass/forgotPass'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Sign in" render={props => <Login {...props} />} />
            <Route exact path="/register" name="Sign up" render={props => <Register {...props} />} />
            <Route exact path="/forgot-password" name="Forgot Password" render={props => <ForgotPass {...props} />} />
            <ProtectedRoute exact path="/dashboard" name="Dashboard" component={Dashboard}/>
          </Switch>
        </React.Suspense>
      </HashRouter>
    </ThemeProvider>
    </>
  )
}
export default App;
