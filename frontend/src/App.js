import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import TestPage from './screens/TestPage'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Route path="/test" component={TestPage}/>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
