import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Teams from './components/Teams';
import Contact from './components/Contact';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Welcome to our Website!</h1>}></Route>
        <Route path='/kevin' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/teams' element={<Teams/>}></Route>
        <Route path='/teams/:city/:color' element={<Teams/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

