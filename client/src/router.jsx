import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventPage from './pages/Event';
import Auth from './pages/Auth';
import AddEvent from './pages/AddEvent';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/events/add" element={<AddEvent />} />
        </Routes>
    )
}

export default Routing;