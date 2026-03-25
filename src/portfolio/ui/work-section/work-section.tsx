import { Section } from '@/shared/ui/layout/section'
import styles from './work-section.module.scss'
import { projects } from '@/portfolio/projects'

export default function WorkSection() {
	return (
		<Section id="work" title="Work">
			<div className={styles.projectsGrid}>
				{projects.map((project) => (
					<div key={project.id} className={styles.projectCard}>
						<div className={styles.projectContent}>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<p className={styles.projectDescription}>
								{project.description}
							</p>
							<div className={styles.projectTech}>
								{project.tech.map((tech, index) => (
									<span key={index} className={styles.techTag}>
										{tech}
									</span>
								))}
							</div>
						</div>
						{project.link && project.link !== '#' && (
							<a
								href={project.link}
								target="_blank"
								className={styles.projectLink}
							>
								View Project →
							</a>
						)}
					</div>
				))}
			</div>
		</Section>
	)
}
