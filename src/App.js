import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, world!
        </p>
      </header>
    </div>
  );
}

export default App;
