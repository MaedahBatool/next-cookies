import Footer from 'components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { btn, btnWrap, card, container, h2, main, title } from 'styles/Home.module.css';

export default function ClientSideCookiePage() {
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
		<div className={container}>
			<Head>
				<title>Client-side Cookies in Next.js</title>
				<meta name="description" content="Learn how to set and get cookies with Next.js on the client side." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={main}>
				<h1 className={title}>Client-side Cookies in Next.js</h1>
				<h2 className={h2}>Theme = {theme} </h2>
				<div className={btnWrap}>
					<button className={btn} onClick={() => changeTheme('Dark')}>
						Dark
					</button>
					<button className={btn} onClick={() => changeTheme('Light')}>
						Light
					</button>
				</div>

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
