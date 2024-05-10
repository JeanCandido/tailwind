import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Footer from './layout/Footer';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/> }></Route>
        <Route exact path='/empresa' element={<Empresa/>}></Route>
        <Route exact path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
