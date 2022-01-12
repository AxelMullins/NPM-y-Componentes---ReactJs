import logo from './assets/logo-numen.png';
// import './App.css';
import './scss/app.scss';
import Footer from './Components/Footer';

function App() {

  let academy = "Numen";

  let hello = <h1>Hello</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo Numen" />
        {hello}
        <p>
          Welcome to <b>{academy} {2000 + 22}</b>
        </p>
        
      </header>
      <Footer name="React Js" type="Components" />
    </div>
  );
}

export default App;
