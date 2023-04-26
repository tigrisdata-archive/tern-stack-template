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

The template has the following structure:

```
.
├── LICENSE
├── README.md
├── client
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── src
│   └── tsconfig.json
└── server
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── scripts
    ├── src
    └── tsconfig.json
```

The `client` was initially created using the
[create-react-app](https://github.com/facebook/create-react-app) TypeScript
template, and the `server` is a TypeScript application using
[Express.js](https://expressjs.com/), the [Node.js runtime](https://nodejs.org),
and
[Tigris](https://www.tigrisdata.com?utm_source=github&utm_medium=github&utm_campaign=tern-template).

## Prerequisites

To use the TERN stack template you'll either need a
[Tigris Cloud account](https://console.preview.tigrisdata.cloud/signup?utm_source=github&utm_medium=github&utm_campaign=tern-template)
or a
[self-hosted Tigris](https://www.tigrisdata.com/docs/concepts/platform/self-host/?utm_source=github&utm_medium=github&utm_campaign=tern-template)
up and running.

You'll also need to install the
[Tigris CLI](https://github.com/tigrisdata/tigris-cli) and login to your Tigris
instance:

```sh
npm i -g @tigrisdata/tigris-cli
tigris login
```

## Client

The client is a TypeScript React application. To learn React, check out the
[React documentation](https://reactjs.org/).

In the `client` directory, you can run:

### `npm dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Server

The server is an Express.js TypeScript application. To learn Express.js, check
out the [Express.js website](https://expressjs.com/).

Before you start the server you'll need to create a Tigris project and save the
project configuration in a `.env.local` file:

```sh
cd server
tigris create project my-tern-app --create-env-vars
mv .env .env.local
```

With the Tigris project config in place you can run the server.

In the `server` directory, you can run:

### `npm run dev`

Runs the app in the development mode, running on
[http://localhost:3001](http://localhost:3001).

The application will reload if you make edits.

### `npm run setup`

Registers the Tigris data models with Tigris. For more info, see the
[Tigris data modeling with TypeScript docs](https://www.tigrisdata.com/docs/sdkstools/typescript/database/datamodel/?utm_source=github&utm_medium=github&utm_campaign=tern-template).

### `npm run start`

Runs the built output from `dist`.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

Your app is ready to be deployed!
