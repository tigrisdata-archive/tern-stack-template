import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import IconExpress from "./icons/IconExpress.tsx";
import IconReact from "./icons/IconReact.tsx";
import IconNodeJs from "./icons/IconNodeJs.tsx";
import IconTigris from "./icons/IconTigris.tsx";

import {
  IEvent,
  EVENT_TYPES,
  IClickEventData,
  IPageEventData,
} from "@tern-app/shared";

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

function App() {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    (async () => {
      const events = await getEvents();
      setEvents(events);
    })();
  }, []);

  const handleClick: MouseEventHandler<HTMLDivElement> = async (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const result = await fetch("http://localhost:3001/events", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventType: EVENT_TYPES.Click,
        eventData: {
          url: document.location.href,
          clickX: event.clientX,
          clickY: event.clientY,
        },
      }),
    });

    if (result.status === 201) {
      const insertedEvent = await result.json();
      setEvents((prev) => [...prev, insertedEvent]);
    } else {
      console.error("unexpected POST response", await result.json());
    }
  };

  return (
    <div className="App" onClick={handleClick}>
      <main className="App-main">
        <div className="App-tern-letters">
          <span>T</span>
          <span>E</span>
          <span>R</span>
          <span>N</span>
        </div>
        <div className="App-tern-logos">
          <IconTigris className="App-tern-logo" />
          <IconExpress className="App-tern-logo" />
          <IconReact className="App-tern-logo" />
          <IconNodeJs className="App-tern-logo" />
        </div>
        <p>The TERN stack consists of:</p>
        <ul className="App-tech-list">
          <li>
            <a href="https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-template">
              Tigris
            </a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li>
            <a href="https://react.dev/">React</a>
          </li>
          <li>
            <a href="https://nodejs.org">Node.js</a>
          </li>
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <section className="App-section">
          <a
            className="App-link"
            href="https://www.tigrisdata.com/blog/tern-stack/?utm_source=template&utm_medium=template&utm_campaign=tern-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn to TERN
          </a>
        </section>
        <section className="App-section">
          {events.map((event) => {
            let typedEventData;
            if (event.eventType === EVENT_TYPES.Click) {
              typedEventData = event.eventData as IClickEventData;
              return (
                <div
                  key={event.id}
                  style={{
                    position: "absolute",
                    top: typedEventData.clickY,
                    left: typedEventData.clickX,
                  }}
                >
                  x
                </div>
              );
            } else {
              typedEventData = event.eventData as IPageEventData;
              return (
                <div key={event.id}>
                  <span>
                    {event.eventType === EVENT_TYPES.PageView
                      ? "Pageview"
                      : "Pageleave"}
                  </span>
                  <span>{typedEventData.url}</span>
                </div>
              );
            }
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
