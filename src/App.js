import './App.css';
import logo from './img/logo.png';
import people from './img/people.png';

function App() {
  return (
    <div className="App">
      <div className="main-img">
        <img src={logo}></img>
      </div>
      <div className="menu-bar">
        <a>home</a>
        <a>discografia</a>
        <a>videografia</a>
        <a>clipping</a>
        <a>contato</a>
      </div>
     <div className="content-people">
       <img src={people}></img>
     </div>
    </div>
  );
}

export default App;
