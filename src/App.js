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
import MyProfile from './components/Dashboard/MyProfile';
import AddReview from './components/Dashboard/AddReview';
import MyOrders from './components/Dashboard/MyOrders';
import Payment from './components/Dashboard/Payment';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import RequireAdmin from './components/Pages/RequireAdmin';
import AddProduct from './components/Dashboard/AddProduct';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProducts from './components/Dashboard/ManageProducts';

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

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        {/* nested route  */}
        <Route path='dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>

        </Route>
        {/* nested route  */}

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
