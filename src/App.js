
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>Tic Tac Toe</h1>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
    </Routes>
    
      
    </div>
  );
}

export default App;
