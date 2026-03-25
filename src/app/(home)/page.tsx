import { Header } from '@/shared/ui/layout/header/header'
import { Footer } from '@/shared/ui/layout/footer/footer'
import { Section } from '@/shared/ui/layout/section'
import HeroSection from '@//portfolio/ui/hero-section/hero-section'
import AboutSection from '@//portfolio/ui/about-section/about-section'
import WorkSection from '@//portfolio/ui/work-section/work-section'
import ContactSection from '@//portfolio/ui/contact-section/contact-section'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<WorkSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	)
}
