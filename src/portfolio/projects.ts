import { Project } from './model/portfolio-types'

export const projects: Project[] = [
	{
		id: 1,
		title: '"URSTAR" Clothers Shopping Web',
		description:
			'Full-stack e-commerce application built with Next.js and Express. Features include product catalog, shopping cart, user authentication, and payment integration.',
		tech: ['React', 'Redux', 'Express', 'MongoDB', 'SCSS'],
		link: 'https://github.com/deonopinallae/urstar-frontend',
	},
	{
		id: 2,
		title: '"Crystals" Crystals Shop SPA',
		description:
			'Single Page Application for browsing and purchasing crystals and minerals. Features detailed product catalog, shopping cart, user reviews, and advanced filtering by crystal type, price, and metaphysical properties with responsive design.',
		tech: ['Next.js', 'TypeScript', 'Zustand', 'Redux', 'SCSS'],
		link: 'https://github.com/deonopinallae/crystals',
	},
	{
		id: 3,
		title: 'Task Management App (in proccess)',
		description:
			'Frontend application with integrated Pomodoro timer for productivity tracking. Features task creation and organization, real-time session timing, progress visualization, local storage persistence, and task history management with a clean, intuitive interface.',
		tech: ['Next.js', 'TypeScript', 'Zustand', 'React Query', 'Tailwind CSS', 'SCSS'],
		link: 'https://github.com/deonopinallae/task-sync-frontend',
	},
]
