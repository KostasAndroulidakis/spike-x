# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

First, start the API server that parses models from the C++ library:

```shellscript
npm run api
```

Then in a separate terminal, run the dev server:

```shellscript
npm run dev
```

### Library Component

The Library page fetches components directly from the C++ header files in the `lib/core` directory. The API server parses these files to extract the available models for:

- Neurons
- Synapses
- Axons
- Dendrites

When you add new model types to the C++ header files, they will automatically appear in the library UI.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
