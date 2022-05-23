import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Pages/Purchase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/Pages/RequireAuth';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

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
