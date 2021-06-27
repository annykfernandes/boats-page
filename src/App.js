import './App.css';
import logo from './img/logo.png';
import people from './img/people.png';

function App() {
  return (
    <div className="App">
      <div className="main-img">
        <img src={logo} alt="logo boats oficial"></img>
      </div>
      <div className="menu-bar">
        <span>home</span>
        <span>discografia</span>
        <span>videografia</span>
        <span>clipping</span>
        <span>contato</span>
      </div>
     <div className="content-people">
       <img src={people} alt="foto membros banda boats"></img>
     </div>
    </div>
  );
}

export default App;
