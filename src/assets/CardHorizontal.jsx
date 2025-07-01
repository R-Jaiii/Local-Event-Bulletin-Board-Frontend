import { Badge, Button, Card, Image, Text, Heading, Stack,Grid } from "@chakra-ui/react";

export const CardHorizontal = ({ events }) => (
  <>
    {events.map((event) => (
      <Card.Root key={event._id} flexdirection="left" overflow="hidden" variant="outline" maxW="xl" mb={4}>
        <Image
          objectFit="cover"
          maxW="200px"
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?auto=format&fit=crop&w=800&q=60"
          alt="Event Image"
        />
        <Stack spacing={2} p={4}>
          <Heading color= "white" size="md">{event.Title}</Heading>
          <Text>{event.Description}</Text>
          <Text color="white.500">{event.Location}</Text>
          <Text>
            {new Date(event.Date).toLocaleDateString()} at{" "}

            {new Date (event.Time).toLocaleTimeString([], {hour: '00', minute: '00', seconds: '00'})}
          </Text>
          <Badge colorScheme="teal">{event.Category}</Badge>
          <Button alignSelf="start" colorScheme="blue" mt={2}>RSVP</Button>
        </Stack>
      </Card.Root>
    ))}
  </>
);

export default CardHorizontal;