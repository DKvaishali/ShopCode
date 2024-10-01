import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import PageNotFound from './Component/PageNotFound';
import AdminProducts from './Component/Admin/Products';
import Orders from './Component/Orders';
import Dashboard from './Component/Dashboard';
import Payment from './Component/Payment';
import Customers from './Component/Customers';
import Admin from './Component/Admin';
import Home from './Component/Home';
import Products from './Component/Products';
import Category from './Component/Category';
import Login from './Component/Login';
import Register from './Component/Register';
import ContactUs from './Component/ContactUs';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/admin'>
          <Route path='products' element={<AdminProducts />} />
          <Route path='Orders' element={<Orders />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Payment' element={<Payment />} />
          <Route path='Customers' element={<Customers />} />
          <Route path='author' element={<Admin/>}/>


        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App;