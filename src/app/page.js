"use client";

import Image from "next/image";

// import {
// 	Modal,
// 	ModalContent,
// 	ModalHeader,
// 	ModalBody,
// 	ModalFooter,
// 	Button,
// 	useDisclosure,
// } from "@heroui/react";

import styles from "./page.module.css";
// import FuzzyText from "../components/FuzzyText";
import Dither from "../components/Dither";

import { russoOne } from "./fonts";

export default function Home() {
	// const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			// Utilise la méthode native `scrollIntoView`
			element.scrollIntoView({
				behavior: "smooth", // 👈 Rend l'animation lisse
				block: "start", // Défile jusqu'au début de l'élément cible
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
						<p>
							Design and creation converge to shape human-centered
							experiences.
						</p>
						{/* <FuzzyText
							fontFamily='Russo One'
							fontSize={48}
							fontWeight='bold'
							color='#0070f3'>
							BADWORK
						</FuzzyText> */}
					</div>
					<div className={styles.ctas}>
						<a
							// onPress={onOpen}
							className={styles.primary}
							onClick={() => scrollToSection("contact")}
							// href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							// target='_blank'
							// rel='noopener noreferrer'
						>
							{/* <Image
								className={styles.logo}
								src='/vercel.svg'
								alt='Vercel logomark'
								width={16}
								height={16}
							/> */}
							CONTACT US
						</a>
						{/* <Button onPress={onOpen}>Open Modal</Button>
						<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
							<ModalContent>
								{(onClose) => (
									<>
										<ModalHeader className='flex flex-col gap-1'>
											Modal Title
										</ModalHeader>
										<ModalBody>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Nullam pulvinar risus non risus
												hendrerit venenatis.
												Pellentesque sit amet hendrerit
												risus, sed porttitor quam.
											</p>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit.
												Nullam pulvinar risus non risus
												hendrerit venenatis.
												Pellentesque sit amet hendrerit
												risus, sed porttitor quam.
											</p>
											<p>
												Magna exercitation reprehenderit
												magna aute tempor cupidatat
												consequat elit dolor
												adipisicing. Mollit dolor
												eiusmod sunt ex incididunt
												cillum quis. Velit duis sit
												officia eiusmod Lorem aliqua
												enim laboris do dolor eiusmod.
												Et mollit incididunt nisi
												consectetur esse laborum eiusmod
												pariatur proident Lorem eiusmod
												et. Culpa deserunt nostrud ad
												veniam.
											</p>
										</ModalBody>
										<ModalFooter>
											<Button
												color='danger'
												variant='light'
												onPress={onClose}>
												Close
											</Button>
											<Button
												color='primary'
												onPress={onClose}>
												Action
											</Button>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						</Modal> */}
						{/* <a
							className={styles.primary}
							href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'>
							Documentation
						</a> */}
					</div>
				</main>
				<div className={styles.contact} id='contact'>
					<h2>Contact Section</h2>
				</div>
			</div>
		</>
	);
}
