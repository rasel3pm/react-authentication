import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/LogIn/Login';
import Register from './components/register/Register';
import Logout from './components/Logout/Logout';

function App() {
    return (
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;