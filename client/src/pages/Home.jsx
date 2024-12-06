import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './eventCard';

const Home = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

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

    const filteredEvents = events
        .filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return new Date(a.date) - new Date(b.date);
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });

    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <main>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <img src="/src/assets/ex.jpg" alt="Logo" className="w-16 h-16" />
                    <h1 className="text-xl font-bold">eventX</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => navigate('/events/add')} className="px-4 py-2 misc-button rounded">Create Event</button>
                </div>
            </div>

            <div className="mt-8 p-8">
                <div className="flex items-center justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search by title"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border rounded"
                    />
                    <button
                        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredEvents.map((event, index) => (
                        <div key={index} className={event.date === currentDate ? 'animate-pulse' : ''}>
                            <EventCard
                                title={event.title}
                                date={event.date}
                                description={event.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;