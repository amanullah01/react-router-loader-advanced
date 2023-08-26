import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const EventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // setError("Fetching events failed.");
  } else {
    const resData = await response.json();
    return resData.events;
    // setFetchedEvents(resData.events);
  }
};
