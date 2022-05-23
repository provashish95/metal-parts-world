import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Home from './components/Home/Home';
import Purchase from './components/Pages/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/Pages/RequireAuth';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import NotFound from './components/Pages/NotFound';
import Blog from './components/Pages/Blog';
import MyPortfolio from './components/Pages/MyPortfolio';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
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
