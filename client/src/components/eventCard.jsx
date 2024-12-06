const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Start Date:</strong> {event.startDate}</p>
            <p><strong>End Date:</strong> {event.endDate}</p>
            <p><strong>Slot Pricing:</strong> ${event.slotPricing}</p>
            <p><strong>Capacity:</strong> {event.capacity}</p>
        </div>
    );
};

export default EventCard;