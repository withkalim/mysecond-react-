import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Login from './component/login';
import Register from './component/register';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
