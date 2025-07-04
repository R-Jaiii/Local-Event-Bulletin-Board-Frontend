import { Badge, Button, Card, Image, Text, Heading, Stack } from "@chakra-ui/react";
import '../routes/Events.css';
import EditEvent from "@/routes/EditEvent";
import DeleteEvent from "@/routes/DeleteEvent";
import RSVPEvent from "@/routes/RSVPEvent";
import ShareEvent from "@/routes/ShareEvent";


export const CardHorizontal = ({ events }) => (
  
  <div className="card-horizontal">
    {events.map((event) => (
      <Card.Root key={event._id} flexdirection="left" overflow="hidden" variant="outline" maxW="xl" mb={4}>
        <Image
        
          objectFit="cover"
          maxW="200px"
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=800&q=60"
          alt="Event Image"
        />
        
        <Card.Body>
          <Stack spacing={2} p={4}>
            <Heading color="white" size="md">{event.Title}</Heading>
            <Text>{event.Description}</Text>
            <Text color="white.500">{event.Location}</Text>
            <Text>
              {new Date(event.Date).toLocaleDateString()} at{" "}
              {new Date(event.Time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Badge colorScheme="teal">{event.Category}</Badge>
            <Text color="gray.500">Created by: {event._id}</Text>
          </Stack>
        </Card.Body>
        
        <Card.Footer display="flex" justifyContent="space-between" p={4}>
          <Button onClick={() => RSVPEvent(event)} colorScheme="blue">RSVP</Button>
          <Button colorScheme="yellow" onClick={() => EditEvent(event._id)}>Edit</Button>
          <Button onClick={() => DeleteEvent(event)} colorScheme="red">Delete</Button>
          <Button onClick={() => ShareEvent(event)} colorScheme="green">Share</Button>
        </Card.Footer>
      </Card.Root>
    ))}
<DeleteEvent />
  </div>
);

export default CardHorizontal;