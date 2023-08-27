import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { Fragment, Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-details");

  console.log("mian palcasldf");
  console.log(event);

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadingEvent) => <EventItem event={loadingEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadingEvent) => <EventsList events={loadingEvent} />}
        </Await>
      </Suspense>
    </Fragment>
  );
};

export default EventDetailPage;

const singleDataLoader = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch event details data" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData.event;
  }
};

const loadingData = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events data." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const EventDetailsLoader = async ({ request, params }) => {
  const id = params.eventId;
  console.log(id);
  return defer({
    event: await singleDataLoader(id),
    events: loadingData(),
  });
};

export const actionEventDelete = async ({ params, request }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  console.log(response);

  if (!response.ok) {
    throw json({ message: "Could not delete event data" }, { status: 500 });
  }

  return redirect("/events");
};
