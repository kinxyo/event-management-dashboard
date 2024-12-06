import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'

import Home from './pages/Home';
import EventPage from './pages/Event';
import Auth from './pages/Auth';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/events/:id" element={<Event />} />
        </Routes>
    )
}

export default Routing;