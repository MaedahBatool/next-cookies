import Image from 'next/image';
import styles from 'styles/Home.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
				Built with Next.js | Powered by{' '}
				<span className={styles.logo}>
					<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
				</span>
			</a>
		</footer>
	);
}
