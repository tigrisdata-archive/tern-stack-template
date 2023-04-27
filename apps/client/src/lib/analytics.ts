import { IEvent, IEventDeleteResult } from "@tern-app/shared";

const SERVER_BASE_URL =
  import.meta.env.SERVER_BASE_URL || "http://localhost:3001";

const getEvents = async (): Promise<IEvent[]> => {
  const result = await fetch(`${SERVER_BASE_URL}/events`);
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
  const result = await fetch(`${SERVER_BASE_URL}/events`, {
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

const deleteEvent = async ({
  id,
}: {
  id: string;
}): Promise<IEventDeleteResult> => {
  const result = await fetch(`${SERVER_BASE_URL}/events`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  if (result.status === 200) {
    const deleteResult: IEventDeleteResult = await result.json();
    return deleteResult;
  } else {
    throw new Error("unexpected DELETE response", await result.json());
  }
};

export { captureEvent, getEvents, deleteEvent };
