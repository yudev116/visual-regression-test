import styles from './page.module.css';
import Sample from './Sample';

export default function Home() {
	return (
		<main className={styles.main}>
			<Sample />
		</main>
	);
}
