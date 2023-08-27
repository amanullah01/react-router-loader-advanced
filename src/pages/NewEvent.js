import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const actionEvent = async ({ request, params }) => {
  const data = await request.formData();

  const event_data = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
    date: data.get("date"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event_data),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Data insert failed" }, { status: 500 });
  }

  return redirect("/events");
};
