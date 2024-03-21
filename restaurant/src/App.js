import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
   
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes> */}
   </div>
  );
}
export default App;
