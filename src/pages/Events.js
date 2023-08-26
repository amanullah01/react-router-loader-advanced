import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Event 1",
  },
  {
    id: "e2",
    title: "Event 2",
  },
  {
    id: "e3",
    title: "Event 3",
  },
  {
    id: "e4",
    title: "Event 4",
  },
];
const EventsPage = () => {
  return (
    <Fragment>
      <h1>Event Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>
              {event.title} {event.id}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default EventsPage;
