import { useState, useEffect } from 'react';
import './Events.css';
import EventCard from '../assets/EventCard';



export default function Events({ sessionToken }) {

  const [events, setEvents] = useState([]);
  

  const fetchEvents = () => {
    const url = "http://127.0.0.1:4000/events/events";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": sessionToken
      }
    })
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
    <EventCard events={events} />
    <button onClick={fetchEvents}>Refresh Events</button>
    
    </>
  );
}

