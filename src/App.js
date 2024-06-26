import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import Dashboard from './components/Dashboard';
import Feedback from './components/Feedback';
import Checkout from './components/Checkout';
import AppCart from './AppCart';
import Order from './components/Order';
import Footer from './components/Footer';
import Adminsign from './components/Adminsign';
import Navbar from  './components/Navbar';
import Loginsign from './components/Loginsign';


function App() {
  return (
    <div className="App">
    {/* <Nav/> */}
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/ls' element={<Loginsign/>}/>
       <Route path='/l' element={<Login/>}/>
       <Route path='/s' element={<Signup/>}/>
       <Route path='/d' element={<Dashboard/>}/>
       <Route path='/f' element={<Feedback/>}/>
       <Route path= '/c' element={<Checkout/>}/>
       <Route path= '/menu' element={<AppCart/>}/>
       <Route path="/o" element={<Order/>}/>
       <Route path='/as' element={<Adminsign/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
