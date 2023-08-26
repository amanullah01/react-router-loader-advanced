import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const EventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events1");

  if (!response.ok) {
    throw { message: "Could not fetch events." };
  } else {
    return response;
  }
};
