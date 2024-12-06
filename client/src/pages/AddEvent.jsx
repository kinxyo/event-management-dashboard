import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [venue, setVenue] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [slotPricing, setSlotPricing] = useState('');
    const [capacity, setCapacity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { title, description, venue, startDate, endDate, slotPricing, capacity };
        console.log(newEvent);
        // Optionally, send newEvent to an API endpoint
        // axios.post('http://localhost:3000/events', newEvent)
        //     .then(response => console.log(response))
        //     .catch(error => console.error(error));
    };

    return (
        <main className='min-h-screen grid place-items-center'>
            <button onClick={() => navigate(-1)} >go back</button>
        <form onSubmit={handleSubmit} className={"bg-slate-200 flex flex-col gap-4 items-center p-8 rounded-xl"}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="venue">Venue:</label>
                <input
                    type="text"
                    id="venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="slotPricing">Slot Pricing:</label>
                <input
                    type="number"
                    id="slotPricing"
                    value={slotPricing}
                    onChange={(e) => setSlotPricing(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="capacity">Capacity:</label>
                <input
                    type="number"
                    id="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Event</button>
        </form>
        </main>
    );
};

export default AddEvent;