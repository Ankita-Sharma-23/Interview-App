import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./Components/Login";
import Interviews from "./Components/Interviews";
import Form from "./Components/Form"
import { Home } from "./Home";
import './Style/form.css';
import './Style/header.css';
import './Style/login.css';
import HeaderBar from "./Header/HeaderBar";
import ViewInterview from './Components/ViewInterview';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <HeaderBar/>
      <Switch>
      <Route exact path="/Home" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Form" component={ Form }/>
        <Route exact path="/Interviews" component={Interviews}/>
        <Route exact path="/ViewInterview" component={ViewInterview}/>
      </Switch>  
      </BrowserRouter>
    
    </div>
  );
}

export default App;
 