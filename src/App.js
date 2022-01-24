import "./App.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
import LandPage from "./pages/LandPage/LandPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/profile";
import DevelopersList from "./pages/DevelopersList/DevelopersList";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Switch>
    <Route exact path="/" component={LandPage} /> 
        <Route path="/register" component={Register} /> 
      <Route path="/login" component={Login} /> 
      <Route path="/developers" component={DevelopersList} /> 
        <Route path="/*" component={Error} />
    
        
       {/* <Route path="/profile:id" component={Profile} /> */}
      
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
