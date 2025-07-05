export default function DeleteEvent({ events, sessionToken }) {
  const event = events; // Update this if you want to delete another event
  if (!event) {
    return <p>No event available to delete.</p>;
  }

  const eventId = event._id;

  const handleDeleteEvent = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm(`Are you sure you want to delete "${event.Title}"?`);
    if (!confirmDelete) return;

    const url = `http://127.0.0.1:4000/events/${eventId}`;

    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authorization": sessionToken,
        },
      });


      const data = await res.json();
      console.log("Event deleted:", data);
      alert("Event successfully deleted.");
    } catch (err) {
      console.error("Event deletion failed:", err);
      alert("Failed to delete the event.");
    }
  };

  return (
    <>
      <h2>Delete Event</h2>
      <button onClick={handleDeleteEvent}>DELETE EVENT</button>
    </>
  );
}
