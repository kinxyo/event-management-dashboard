import { useNavigate } from "react-router-dom";

const  Home = () => {
    
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Home</h1>

            <button onClick={() => navigate('/events/add')}>Create Event</button>
        </div>
    )
}

export default Home;