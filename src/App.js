
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
import About from "./components/pages/About";
import Contact from "./components/pages/contact";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/notFound';
import AddUser from './components/users/addUser';
import EditUser from './components/users/editUser';
import user from './components/users/user';
function App() {
  return (

    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={user}/>
          <Route component={NotFound} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
