//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Vision for app: Links to sites + areas where you get latest updates, full list of projects */}
        <p>
          Welcome to astukari. 
        </p>
        <a className="App-link" href="https://jacob-robinson.com/">Blog</a>
        <a className="App-link" href="https://astukari.substack.com/">Newsletter</a>
        <a className="App-link" href="https://twitter.com/astukari">Twitter</a>
        <a className="App-link" href="https://www.jbr-holdings.com/">JBR</a>
      </header>
    </div>
  );
}

export default App;
