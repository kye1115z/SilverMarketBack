import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Detail from './Pages/Detail';
import Order from './Pages/Order';
import ConfirmOrder from './Pages/ConfirmOrder';
import First from './Pages/First';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/order' element={<Order />} />
            <Route path='/confirmOrder' element={<ConfirmOrder />} />
            <Route path='/first' element={<First />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;