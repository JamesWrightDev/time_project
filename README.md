## Installation

Firstly start off by installing the NPM dependencies

```sh
$ npm i
```

## Start the app

This is an NX monorepo, don't worry if you've never used it, it's pretty simple!

The repo is spit into two repos. `webapp` is a React application and `api` is a Express backend

### Run the WebApp

The web app will be running on `http://localhost:4200`

```sh
$ nx run webapp:serve
```

or

```sh
$ npx nx run webapp:serve
```

### Run the API

The web app will be running on `http://localhost:3000`

```sh
 $ nx run api:serve
```

or

```sh
$ npx nx run api:serve
```

### Run the Full Stack

```sh
$ nx run-many --parallel --target=serve --projects=api,webapp
```

or

```sh
 $ npx nx run-many --parallel --target=serve --projects=api,webapp
```

### Run API Tests

```sh
$ nx run test api
```

or

```sh
 $ npx nx test api
```
