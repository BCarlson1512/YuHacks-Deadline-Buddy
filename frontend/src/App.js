import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import TestPage from './screens/TestPage'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useState } from 'react';
import Navbar from './components/Navbar';
import './css/nav-styles.css'
import CreateTaskScreen from './screens/CreateTaskScreen';
import TaskCalendarScreen from './screens/TaskCalendarScreen';
import EditTaskScreen from './screens/EditTaskScreen';


function App() {
  const [open, setOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className={open ? "viewport-icon" : "viewport-180deg"} >
            <img src="./images/arrow.svg" alt="menu" onClick={(e) => setOpen(!open)}></img>
          </div>
          <div>
            <Navbar open={open} setOpen={setOpen} onClick={(e) => setOpen(!open)}></Navbar>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/create" component={CreateTaskScreen} />
          <Route path="/tasks/monthly" component={TaskCalendarScreen} />
        </main>
      </div>
      <footer className="app-footer">
        2021 - Ben Carlson & Mark JP Sanchez
      </footer>
    </BrowserRouter>
  );
}

export default App;
