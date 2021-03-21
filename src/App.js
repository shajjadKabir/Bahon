import {
  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import './App.css';
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Booking from "./components/Booking/Booking";
import CheckOut from "./components/CheckOut/CheckOut";
import NotFound from "./components/NotFound/NotFound";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/booking/:name">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:name">
            <CheckOut/>
          </PrivateRoute>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;


