"use client";

import Image from "next/image";
import styles from "./page.module.css";
// import FuzzyText from "../components/FuzzyText";
import Dither from "../components/Dither";

import { russoOne } from "./fonts";

export default function Home() {
	return (
		<>
			<div
				style={{
					width: "100vw",
					height: "100vh",
					position: "fixed",
					zIndex: -1,
				}}>
				<Dither
					waveColor={[0.5, 0.5, 0.5]}
					disableAnimation={false}
					enableMouseInteraction={true}
					mouseRadius={0.3}
					colorNum={4}
					waveAmplitude={0.3}
					waveFrequency={3}
					waveSpeed={0.05}
				/>
			</div>
			<div className={styles.page}>
				<main className={styles.main}>
					{/* <Image
						className={styles.logo}
						src='/next.svg'
						alt='Next.js logo'
						width={100}
						height={20}
						priority
					/> */}
					<div className={styles.intro}>
						<h1
							className={`${russoOne.className} text-9xl font-bold hero-title`}>
							BADWORK
						</h1>
						{/* <FuzzyText
							fontFamily='Russo One'
							fontSize={48}
							fontWeight='bold'
							color='#0070f3'>
							BADWORK
						</FuzzyText> */}
						<p>
							Design and creation converge to shape human-centered
							experiences.
						</p>
					</div>
					<div className={styles.ctas}>
						<a
							className={styles.primary}
							href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'>
							{/* <Image
								className={styles.logo}
								src='/vercel.svg'
								alt='Vercel logomark'
								width={16}
								height={16}
							/> */}
							CONTACT US
						</a>
						{/* <a
							className={styles.primary}
							href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'>
							Documentation
						</a> */}
					</div>
				</main>
			</div>
		</>
	);
}
