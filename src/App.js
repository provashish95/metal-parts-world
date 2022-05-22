import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Pages/Purchase';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
