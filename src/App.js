import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to astukari. 
        </p>
        <div className="row">
          <div className="column">
            <h2>Projects</h2>
            <a className="App-link" href="https://jacob-robinson.com/">Blog</a> <br/>
            <a className="App-link" href="https://astukari.substack.com/">Newsletter</a> <br/>
            <a className="App-link" href="https://www.apalla.co/">Apalla</a> <br/>
            <a className="App-link" href="https://www.jbr-holdings.com/">JBR</a> <br/>
            <a className="App-link" href="https://www.redbubble.com/people/astuka/">BDC LLC</a> <br/>
          </div>
          <div className="column">
            <h2>Media</h2>
            <a className="App-link" href="https://twitter.com/astukari">Twitter</a> <br/>
            <a className="App-link" href="https://www.facebook.com/astukari">Facebook</a> <br/>
            <a className="App-link" href="https://www.instagram.com/astukari/">Instagram</a> <br/>
            <a className="App-link" href="https://www.youtube.com/channel/UCNFgvxw5igul8Xsymv2UhOg">Youtube</a> <br/>
            <a className="App-link" href="https://www.pinterest.com/astukari/_saved/">Pinterest</a> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
