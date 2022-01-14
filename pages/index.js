import Footer from 'components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cookies in Next.js</title>
				<meta name="description" content="Learn how to set and get cookies with Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Cookies with <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by looking at <code className={styles.code}>pages/client.js</code> and{' '}
					<code className={styles.code}>pages/server.js</code>
				</p>

				<div className={styles.grid}>
					<Link href="/client">
						<a className={styles.card}>
							<h2>Client-side Cookies &rarr;</h2>
							<p>Set & get cookies on the client-side.</p>
						</a>
					</Link>

					<Link href="/server">
						<a className={styles.card}>
							<h2>Server-side Cookies &rarr;</h2>
							<p>Set & get cookies on the server-side.</p>
						</a>
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
