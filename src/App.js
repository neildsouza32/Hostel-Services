import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import Axios library
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeePayment from "./pages/FeePayment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DayLeavePage from "./hidden pages/DayLeave";
import PaymentConfirmation from "./hidden pages/payment2";
import Complaint from "./hidden pages/complaint";
// import { Login } from "./login/login";
// import { Register } from "./login/register";
import VacationLeave from "./hidden pages/VacationLeave";
import RegisterMultiStep from "./register/RegisterMultiStep" ; 
import Profile from "./pages/UserProfile";
import Ahome from "./admin/ahome";
import Anavbar from "./admin/anavbar";
import LeaveRequests from "./admin/dayl";
import VacationRequests from "./admin/vac";
import Alogin from "./admin/alogin";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  // const [token, setToken] = useState('');

  // // Function to retrieve the token from local storage
  // const getTokenFromStorage = () => {
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);
  // }

  // // Execute the function to retrieve the token when the component mounts
  // useEffect(() => {
  //   getTokenFromStorage();
  // }, []);

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // // Axios request with the JWT token
  // const makeAuthenticatedRequest = () => {
  //   axios.get("http://localhost:5000/api/v3/vacation_leave", {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // Include the token in the Authorization header
  //     },
  //   })
  //     .then((response) => {
  //       // Handle the secured API response here
  //       console.log("Response from the secured API:", response.data);
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       if (error.response) {
  //         console.log("Error response from the API:", error.response.data);
  //       } else if (error.request) {
  //         console.error("Network error:", error.request);
  //       } else {
  //         console.error("Error:", error.message);
  //       }
  //     });
  // }
  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);
  //   makeAuthenticatedRequest(); // Make the authenticated request when the component mounts
  // }, []);
  

  return (
    <div className="App">
      <Router>
        {/* <Route path="/" exact component={Login} />
        <Route path="/reg" exact component={Register} /> */}
        <Route path="/" exact component={Home} />

        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/fee" exact component={FeePayment} />
          <Route path="/day-leave" exact component={DayLeavePage} />
          <Route path="/payment" component={PaymentConfirmation} />
          <Route path="/complaint" component={Complaint} />
          <Route path="/vacation-leave" component={VacationLeave} />
          <Route path="/regm" component={RegisterMultiStep} />
          <Route path="/profile" component={Profile} />
          <Route path="/ahome" component={Ahome}/>
          <Route path="/anavbar" component={Anavbar}/>
          <Route path="/dayl" component={LeaveRequests}/>
          <Route path="/vacl" component={VacationRequests}/>
          <Route path="/alogin" component={Alogin}/>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
