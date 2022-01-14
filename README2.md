# Get and Set Cookies — Demo Project

Let's build a demo application where you will set a `theme` cookie to save the `light` or `dark` mode of your website.

Here's a Next.js page where shows the current theme and allows you to change it to `light` or `dark`.

```js
export default function ClientCookiePage() {
	return (
		<div>
			<h1>Client-side Cookies in Next.js</h1>
			<div>THEME = {theme} </div>
			<button>Dark</button>
			<button>Light</button>
		</div>
	);
}
```

You can use two React.js hooks to make this app easier to work with

- `useState` hook to save the `theme` cookie value
- `useEffect` hook to access the `document` which is a side-effect

You can read more about these hooks here.

```js
import { useEffect, useState } from 'react';

export default function ClientCookie() {
	const [theme, setTheme] = useState();

	useEffect(() => {
		// Get cookies & find the value of the cookie called theme.
		// Set default cookie to light if not already set.
		// Store theme's value in state.
	});

	// Set theme & cookie to user selected color.
	const changeTheme = (color) => {};

	return (
		<div>
			<h1>Client-side Cookies in Next.js</h1>
			<div>THEME = {theme} </div>
			<button onClick={() => changeTheme('dark')}>Dark</button>
			<button onClick={() => changeTheme('light')}>Light</button>
		</div>
	);
}
```

And here's the complete code where you get the `theme` cookie and allow user to set it to `light` or `dark` mode.

```js
import { useEffect, useState } from 'react';

export default function ClientCookie() {
	const [theme, setTheme] = useState();

	useEffect(() => {
		// Get cookies & find the value of the cookie called theme.
		const color = document.cookie
			?.split(';')
			.find((x) => x.trim().startsWith('theme'))
			?.split('=')[1];

		// Set default cookie to light if not already set.
		if (!color) {
			color = 'light';
			document.cookie = `theme=${color}`;
		}

		// Store theme's value in state.
		setTheme(color);
	});

	// Set theme & cookie to user selected color.
	const changeTheme = (color) => {
		setTheme(color);
		document.cookie = `theme=${color}`;
	};

	return (
		<div>
			<h1>Client-side Cookies in Next.js</h1>
			<div>THEME = {theme} </div>
			<button onClick={() => changeTheme('dark')}>Dark</button>
			<button onClick={() => changeTheme('light')}>Light</button>
		</div>
	);
}
```

As you can see, the code sets `light` mode as the default theme. Then it allows the user to click a button to change that to `dark` mode or back to `light` mode. State is kept by `useState` React hook, which updates the UI when the cookie value gets changed.

On the client-side, working with cookies in Next.js is exactly the same as any other web application.

## Server-side cookies with Next.js

Working with cookies on the server-side with Next.js is just like you would expect. However, Next.js helps you by providing a `context.req.cookies` object containing the cookies sent by the request.

If you export an async function called [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps.

```js
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

The `context` parameter is an object which contains the user `req` request. With Next.js, `context.req.cookies` returns a JavaScript object containing the cookies.

The demo project, explains server-side cookies in Next.js with two different approaches:

1. Get server-side cookies that are set by client.
2. Get and set cookies purely on server-side.

### Get server-side cookies set by client

This part of the demo project gets the cookie value on the server-side that's initially set by the client (in the above example).

```js
export default function ServerCookiePage(props) {
	return (
		<div>
			<h1>Server-side Cookies in Next.js</h1>
			<div>Theme = {props.theme} </div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Get the value of cookie called `theme`.
	let themeFromCookies = context.req.cookies?.theme;

	return {
		props: {
			// Defaults to `light` if not set.
			theme: themeFromCookies ? themeFromCookies : 'light',
		},
	};
}
```

The async `getServerSideProps` function returns the cookie value as a JavaScript object via the `context.req.cookies` property. These props will be parsed by the client-side.

## Conclusion
