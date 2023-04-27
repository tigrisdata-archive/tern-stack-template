import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import IconExpress from "./icons/IconExpress.tsx";
import IconReact from "./icons/IconReact.tsx";
import IconNodeJs from "./icons/IconNodeJs.tsx";
import IconTigris from "./icons/IconTigris.tsx";
import IconStar from "./icons/IconStar.tsx";

import {
  IEvent,
  EVENT_TYPES,
  IClickEventData,
  IPageEventData,
  IEventDeleteResult,
} from "@tern-app/shared";
import { captureEvent, deleteEvent, getEvents } from "./lib/analytics.js";

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
    const eventPayload: IEvent = {
      eventType: EVENT_TYPES.Click,
      eventData: {
        url: document.location.href,
        clickX: event.pageX,
        clickY: event.pageY,
      },
    };

    const insertedEvent = await captureEvent({ eventPayload });
    setEvents((prev) => [...prev, insertedEvent]);
  };

  const handleStarClick = async ({
    domEvent,
    eventId,
  }: {
    domEvent: MouseEvent<SVGSVGElement, globalThis.MouseEvent>;
    eventId: string | undefined;
  }) => {
    domEvent.stopPropagation();

    if (!eventId) return;

    const result: IEventDeleteResult = await deleteEvent({ id: eventId });
    if (result.status === "deleted") {
      const removeIndex = events.findIndex((ev) => ev.id === eventId);
      events.splice(removeIndex, 1);
      setEvents([...events]);
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
            <a href="https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-stack-template">
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
            href="https://www.tigrisdata.com/blog/tern-stack/?utm_source=template&utm_medium=template&utm_campaign=tern-stack-template"
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
                <IconStar
                  className="App-star"
                  key={event.id}
                  style={{
                    position: "absolute",
                    top: typedEventData.clickY,
                    left: typedEventData.clickX,
                  }}
                  fill="#F9B80D"
                  onClick={(e) =>
                    handleStarClick({ domEvent: e, eventId: event.id })
                  }
                />
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
