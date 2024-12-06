import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'

import Home from './pages/Home';
import Event from './pages/Event';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Register from './pages/Signup';

const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/events/:id" element={<Event />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        )
}

export default Routing;