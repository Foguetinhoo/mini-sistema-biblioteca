import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => 
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"||"/login"} component={Login}/>
      <Route  path="/register" component={Register}/>
    </Switch> 
  </BrowserRouter>

export default App;
