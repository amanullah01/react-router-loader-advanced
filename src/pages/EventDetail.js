import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-details");
  console.log(data);

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const EventDetailsLoader = async ({ request, params }) => {
  const id = params.eventId;
  console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  console.log(response);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch event details data" },
      { status: 500 }
    );
  } else {
    return response;
  }
};
