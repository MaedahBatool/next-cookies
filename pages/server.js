import Footer from 'components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { card, container, h2, main, title } from '../styles/Home.module.css';

export default function ServerSideCookiePage() {
	const [name, setName] = useState();

	useEffect(() => {
		// Get cookies & find the value of the cookie called `name`.
		const nameFromCookie = document.cookie
			?.split(';')
			.find((x) => x.trim().startsWith('name'))
			?.split('=')[1];

		// Store the value of cookie `name` in state.
		setName(nameFromCookie);
	}, []);

	return (
		<div className={container}>
			<Head>
				<title>Server-side Cookies in Next.js</title>
				<meta name="description" content="Learn how to set and get cookies with Next.js on the server side." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={main}>
				<h1 className={title}>Server-side Cookies in Next.js</h1>
				<h2 className={h2}>Name = {name || `Not set`}</h2>

				<Link href="/">
					<a className={card}>
						<p>&larr; Go back home</p>
					</a>
				</Link>
			</main>
			<Footer />
		</div>
	);
}

export async function getServerSideProps(context) {
	// Get the value of cookie `name` if it exists.
	let cookieName = context.req.cookies?.name;

	// OPTIONAL: If user provided `name` as a query string, get it's value.
	cookieName = context.query?.name;

	// Set a cookie from the server side.
	if (cookieName) {
		context.res.setHeader('Set-Cookie', `name=${cookieName}`);
	}

	return { props: {} };
}
