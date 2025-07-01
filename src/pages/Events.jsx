import { useState, useEffect } from 'react';
import EventForm from '../pages/Event-Form';
import CardHorizontal from '../assets/CardHorizontal';
import './Events.css';

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

  useEffect(() => {
    console.log("Data fetched from server:", events);
  }, [events]);

  return (
    <>
    <h1>Welcome to the Event Management App</h1>
    <CardHorizontal events={events} />
      {sessionToken && <EventForm sessionToken={sessionToken} />}
      <button onClick={fetchEvents}>Refresh Events</button>
    </>
  );
}
