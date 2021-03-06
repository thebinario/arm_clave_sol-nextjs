import Head from 'next/head'
import styles from '../styles/Home.module.css'



import { Image, Box } from '@chakra-ui/react'

export default function Home() {
	return (
		<div className={styles.container}>
			


			<main className={styles.main}>
				<h1 className={styles.title}>
					Bem vindo ao Game da armadura de sol
        </h1>

				<Box boxSize='sm'>
					<Image src='/armaduras-de-claves.jpg' alt='Armadura de sol' />
				</Box>

			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by Vercel
            and Replit
        </a>
			</footer>
		</div>
	)
}
