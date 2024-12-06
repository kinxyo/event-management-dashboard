import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';

const Home = () => {
    const navigate = useNavigate();

    const events = [
        { title: 'Event 1', date: '2023-10-01', description: 'Description for Event 1' },
        { title: 'Event 2', date: '2023-10-02', description: 'Description for Event 2' },
        { title: 'Event 3', date: '2023-10-03', description: 'Description for Event 3' },
        { title: 'Event 4', date: '2023-10-01', description: 'Description for Event 4' },
        { title: 'Event 5', date: '2023-10-02', description: 'Description for Event 5' },
        { title: 'Event 6', date: '2023-10-03', description: 'Description for Event 6' },
        { title: 'Event 7', date: '2023-10-01', description: 'Description for Event 7' },
        { title: 'Event 8', date: '2023-10-02', description: 'Description for Event 8' },
        { title: 'Event 9', date: '2023-10-03', description: 'Description for Event 9' },
    ];

    return (
        <>
            <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                    <img src="/src/assets/ex.jpg" alt="Logo" className="w-16 h-16" />
                    <h1 className="text-xl font-bold">eventX</h1>
                </div>
                <div className="flex items-center space-x-4">
                    {/* <button onClick={() => navigate('/events/1')} className="px-4 py-2 bg-blue-500 text-white rounded">EventCard</button> */}
                    <button onClick={() => navigate('/events/1')} className="px-4 py-2 bg-green-500 text-white rounded">Auth</button>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Current Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;