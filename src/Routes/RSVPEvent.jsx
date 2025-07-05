import React from 'react'

function RSVPEvent() {
  return (
    <div>
      <h1>RSVP to Event</h1>
      <p>Please confirm your attendance for the event.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <button type="submit">Submit RSVP</button>
      </form>
      <p>Thank you for your response!</p>
    </div>
  )
}

export default RSVPEvent

