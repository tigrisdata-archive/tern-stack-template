# The TERN stack template

![The TERN stack logo - Tigris, Express.js, React, and Node.js](./tern-logo-transparent-bg.png)

The TERN stack:

- [**T**igris](https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-template):
  Serverless NoSQL & Search platform
- [**E**xpress.js](https://expressjs.com/): Fast, unopinionated, minimalist web
  framework for Node.js
- [**R**eact](https://react.dev/): The library for web and native user
  interfaces
- [**N**ode.js](https://nodejs.org): an open-source, cross-platform JavaScript
  runtime environment

![The TERN stack architecture -  - Tigris, Express.js, React, and Node.js](./tern-stack.png)

## About the TERN stack template

The template has the following structure and make use of
[NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces):

```
.
├── apps
│   ├── client
│   │   ├── public
│   │   └── src
│   └── server
│       ├── scripts
│       └── src
└── packages
    └── tigris
        └── src
```

The repo has the following workspaces:

- `@tern-app/client` in `apps/client`: initially created using the `react-ts`
  template for
  [vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- `@tern-app/server` in `apps/server`: a TypeScript application using
  [Express.js](https://expressjs.com/), the
  [Node.js runtime](https://nodejs.org), and
  [Tigris](https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-template).
- `@tern-app/shared`: for data models that are used in both the
  `@tern-app/server` and `@tern-app/client`

## Prerequisites

### A Tigris instance

To use the TERN stack template you'll either need a
[Tigris Cloud account](https://console.preview.tigrisdata.cloud/signup?utm_source=github&utm_medium=github&utm_campaign=tern-template)
or a
[self-hosted Tigris](https://www.tigrisdata.com/docs/concepts/platform/self-host/?utm_source=github&utm_medium=github&utm_campaign=tern-template)
up and running.

### The Tigris CLI

You'll also need to install the
[Tigris CLI](https://github.com/tigrisdata/tigris-cli) and login to your Tigris
instance:

```sh
npm i -g @tigrisdata/tigris-cli
tigris login
```

### Install dependencies for all workspaces

You can install the dependencies for all the workspaces using the following
command:

```sh
npm i -ws
```

## Client (`apps/client`)

The client is a TypeScript React application. To learn React, check out the
[React documentation](https://reactjs.org/).

For the `apps/client` workspace, you can run:

### `npm dev -w=@tern-app/client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build -w=@tern-app/client`

Builds the app for production to the `dist` folder.

## Server (`apps/server`)

The server is an Express.js TypeScript application. To learn Express.js, check
out the [Express.js website](https://expressjs.com/).

Before you start the server you'll need to create a Tigris project and save the
project configuration in a `.env.local` file:

```sh
tigris create project my-tern-app --create-env-vars -o apps/server
mv apps/server/.env apps/server/.env.local
```

With the Tigris project config in place you can run the server.

For the `apps/server` workspace, you can run:

### `npm run dev -w=@tern-app/server`

Runs the app in the development mode, running on
[http://localhost:3001](http://localhost:3001).

The application will reload if you make edits.

### `npm run setup -w=@tern-app/server`

Registers the Tigris data models with Tigris. For more info, see the
[Tigris data modeling with TypeScript docs](https://www.tigrisdata.com/docs/sdkstools/typescript/database/datamodel/?utm_source=github&utm_medium=github&utm_campaign=tern-template).

### `npm run start -w=@tern-app/server`

Runs the built output from `dist`.

### `npm run build -w=@tern-app/server`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

Your app is ready to be deployed!
