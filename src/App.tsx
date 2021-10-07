import { Header } from "./Components/Header";
import './Stlye/header.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Login } from "./Components/Login";
import { Reset } from "./Components/Reset";
import { Form } from "./Components/Form";
import './Stlye/login.css';
import './Stlye/form.css';
import { Home } from "./Components/Home";
import { SignUp } from "./Components/SignUp";
import Interviews from "./Components/Interviews";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/Home" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Signup" component={SignUp}/>  
        <Route exact path="/reset" component={Reset}/>
        <Route exact path="/Form" component={Form}/>
        <Route exact path="/Interviews" component={Interviews}/>
      </Switch>  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
 