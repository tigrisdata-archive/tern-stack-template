import express, { Express, Request, Response } from "express";
import cors from "cors";
import { z } from "zod";
import validateInput from "./utils/validateInput";
import { Event, EVENT_TYPES } from "./db/models/event";
import { Tigris } from "@tigrisdata/core";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.TIGRIS_PROJECT) {
  console.error(
    "Please check the required environment variables are set in .env.local"
  );
  process.exit(1);
}

const app: Express = express();
app.use(express.json());
app.use(cors());

// Reads config from environment variables
const tigris = new Tigris();
const events = tigris.getDatabase().getCollection<Event>(Event);

const port = process.env.PORT || 3001;

const postEventSchema = z.object({
  body: z.object({
    eventType: z.nativeEnum(EVENT_TYPES, {
      required_error: "eventType is required",
    }),

    eventData: z
      .object({
        // PageEventData
        url: z.string({
          required_error: "url is required",
        }),
      })
      .or(
        z.object({
          // ClickEventData
          url: z.string({
            required_error: "url is required",
          }),
          clickX: z.number({
            required_error: "clickX is required on a click event",
          }),
          clickY: z.number({
            required_error: "clickY is required on a click event",
          }),
        })
      ),
  }),
});

app.get("/", (req: Request, res: Response) => {
  res.send("TERN server: Express.js with TypeScript");
});

app.post(
  "/events",
  validateInput(postEventSchema),
  async (req: Request, res: Response) => {
    // the req.body has been validated by the validateInput middleware
    const insertedEvent = await events.insertOne(req.body);

    res.status(201).json(insertedEvent);
  }
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
