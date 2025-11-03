"use client";

import Image from "next/image";

import { Input, Textarea, Button } from "@heroui/react";

import styles from "./page.module.css";
import Dither from "../components/Dither";

import { russoOne } from "./fonts";

const Home = () => {
	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<>
			<div className={styles.page}>
				<main className={styles.main}>
					<div
						style={{
							width: "100vw",
							height: "100vh",
							position: "absolute",
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
					<div className={styles.intro}>
						<h1
							className={`${russoOne.className} text-9xl font-bold hero-title`}>
							BADWORK
						</h1>
						<p>
							Design and creation converge to shape human-centered
							experiences.
						</p>
					</div>
					<div className={styles.ctas}>
						<a
							className={styles.primary}
							onClick={() => scrollToSection("contact")}>
							CONTACT US
						</a>
					</div>
				</main>
				<div className={styles.contact} id='contact'>
					<h2>Contact Section</h2>
					<div className='contact-form'>
						<div className='flex flex-col w-full flex-wrap md:flex-nowrap gap-4'>
							<Input
								isRequired
								className='max-w-xs'
								label='Email'
								type='email'
								placeholder='Enter your email'
							/>
							<Textarea
								className='max-w-xs'
								label='Description'
								placeholder='Enter your description'
								labelPlacement='inside'
							/>
							<Button color='primary'>Send</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
