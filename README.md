# Create React App

[Environment Variables Doc](https://create-react-app.dev/docs/adding-custom-environment-variables/)


# NODE ENV

There is a built-in environment variable called NODE_ENV.

You can read it from `process.env.NODE_ENV`.

When you run `npm start`, it is always equal to `development`,
when you run `npm test` it is always equal to `test`,
and when you run `npm run build` to make a production bundle, it is always equal to `production`.

# What .env files can be used?

> Note: this feature is available with react-scripts@1.0.0 and higher.

* `.env`: Default.
* `.env.local`: Local overrides. This file is loaded for all environments except test.
* `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.


# Priority

Files on the left have more priority than files on the right:

* npm start: `.env.development.local`, `.env.development`, `.env.local`, `.env`
* npm run build: `.env.production.local`, `.env.production`, `.env.local`, `.env`
* npm test: `.env.test.local`, `.env.test`, `.env` (note .env.local is missing)

These variables will act as the defaults if the machine does not explicitly set them.
