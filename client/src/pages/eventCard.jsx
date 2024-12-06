import React from 'react';

const EventCard = ({ title, date, description }) => {
    return (
        <div className="max-w-sm overflow-hidden rounded-xl shadow-md p-4 bg-white">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{date}</p>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    );
};

export default EventCard;