import "./styles.css";
import React from "react";
import { useAuth } from "./utils/AuthContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./components/shared/Navbar";
import Login from "./components/login/Login";
import Footer from "./components/shared/Footer";
import Panes from "./components/shared/Panes";
import MsgBanner from "./components/shared/MsgBanner";
import Home from "./components/home/Home";

const App = () => {
  const { loggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <MsgBanner />
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
