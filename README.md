# NextJs-Blog

### Create a Blog app built on nextjs

The app runs in port 3000

#### Basic knowledge about directories

- .next directory is generated when we first start our app

- pages directory houses all the different pages of our app

- index.js is the default page for each route

- public directory stores all the static files, like images and gifs

- styles directory contains default generated styles

- next.config.js directory can be used to add custom configurations

### Components Guides:

To inject `<head>` tag to the pages:

```js
import Head from "next/head"
```

Add Bootstrap CDN inside the `<Head>` component and impose styling to all our pages:

```js
<Component {...pageProps} />
```

Using `<Link>` tag from `next/link` enables client side transitions to routes, and also enable the app to prefetch pages in our current page.

