import { IEvent } from "@tern-app/shared";

const getEvents = async (): Promise<IEvent[]> => {
  const result = await fetch("http://localhost:3001/events");
  if (result.status === 200) {
    return result.json();
  } else {
    const errorMessage = "Could not retrieve events";
    const errorJson = await result.json();
    console.error(errorMessage, errorJson);
    throw new Error(errorMessage, errorJson);
  }
};

const captureEvent = async ({
  eventPayload,
}: {
  eventPayload: IEvent;
}): Promise<IEvent> => {
  const result = await fetch("http://localhost:3001/events", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventPayload),
  });

  if (result.status === 201) {
    const insertedEvent = await result.json();
    return insertedEvent;
  } else {
    throw new Error("unexpected POST response", await result.json());
  }
};

export { captureEvent, getEvents };
