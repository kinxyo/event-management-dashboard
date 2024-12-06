import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
  import { AnimatePresence } from "framer-motion";
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import Login from './pages/Login';
import Signup from './pages/Signup';


const Routing = () => {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events/login" element={<Login />} />
                <Route path="/events/signup" element={<Signup />} />
                <Route path="/events/:id" element={<EventPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Routing;