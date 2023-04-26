import { Tigris } from "@tigrisdata/core";
import { Event } from "../src/db/models/event";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.TIGRIS_PROJECT) {
  console.error(
    "Please check the required environment variables are set in .env.local"
  );
  process.exit(1);
}

async function main() {
  // setup client
  const tigrisClient = new Tigris();
  // ensure branch exists, create it if it needs to be created dynamically
  await tigrisClient.getDatabase().initializeBranch();
  // register schemas
  await tigrisClient.registerSchemas([Event]);
}

main()
  .then(async () => {
    console.log("Setup complete ...");
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
