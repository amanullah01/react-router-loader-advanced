import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>EventDetailPage</h1>
      <p>Event Title is: {params.eventId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </Fragment>
  );
};

export default EventDetailPage;
