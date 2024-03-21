import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import Feedback from './components/Feedback';
import HomeCarousel from './components/HomeCarousel';
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">
    <Nav/>
    
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/l' element={<Login/>}/>
       <Route path='/s' element={<Signup/>}/>
       <Route path='/d' element={<Dashboard/>}/>
       <Route path='/f' element={<Feedback/>}/>
       <Route path= '/c' element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;