import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
        const response =
        {
          "id": "1",
          "title": "Sample Event",
          "description": "This is a description of the sample event.",
          "date": "2023-10-01"
        }
        // const response = await axios.get(`/api/events/${id}`);
        setEvent(response);
        };
        fetchEvent();
    }, [id]);

    return (
        <div className="flex flex-col">
            <button onClick={() => navigate(-1)} >go back</button>
            <h1 className="text-2xl">Event</h1>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <p>{event.image}</p>
            <p>{event.venue}</p>
            <p>{event.slot}</p>
            <p>{event.pricing}</p>
            <p>{event.capacity}</p>
            <p>{event.organizer}</p>
        </div>
    );
}

export default EventPage;