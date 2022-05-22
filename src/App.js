import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Login from './components/Pages/Login';
import Purchase from './components/Pages/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <Footer />

      <ToastContainer toastStyle={{
        marginTop: "4rem",
        borderRadius: "20px"
      }} />
    </div>
  );
}

export default App;
