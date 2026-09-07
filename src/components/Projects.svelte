<script>
	import { reveal } from '$lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';
	import { projects } from '../data/projects.js';
</script>

<section class="section-inner" aria-labelledby="projects">
	<SectionHeading id="projects" number="03." title="Some Projects I’ve Delivered" />

	{#each projects as project (project.title)}
		<article class="project-grid" use:reveal>
			<div class="project-image">
				<img
					src={project.image}
					alt="Screenshot of {project.title}"
					draggable="false"
					width={project.imageWidth}
					height={project.imageHeight}
					loading="lazy"
					decoding="async"
				/>
			</div>
			<div class="project-content">
				<p class="project-overline">Featured Project</p>
				<h3 class="project-title">{project.title}</h3>
				<p class="description">{project.description}</p>
				<ul class="tech-used">
					{#each project.stack as tech (tech)}
						<li>{tech}</li>
					{/each}
				</ul>
			</div>
		</article>
	{/each}
</section>

<style>
	.project-overline {
		margin: 10px 0;
		color: rgb(var(--accent));
		font-size: 0.9rem;
	}

	.project-title {
		margin: 0 0 20px;
		font-size: clamp(24px, 5vw, 28px);
		font-weight: 700;
	}

	.description {
		position: relative;
		z-index: 2;
		padding: 25px;
		border-radius: 0.3rem;
		background-color: var(--surface);
		color: var(--muted);
		font-size: 1rem;
	}

	.project-grid {
		position: relative;
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(12, 1fr);
		align-items: center;
		margin-bottom: 3rem;
	}

	.project-content {
		position: relative;
		grid-area: 1 / 1 / -1 / 7;
	}

	.project-image {
		grid-area: 1 / 6 / -1 / -1;
		position: relative;
		z-index: 1;
	}

	.project-image img {
		width: 100%;
		height: auto;
		border-radius: 0.3rem;
		user-select: none;
		opacity: 0.7;
		transition: opacity 0.3s;
	}

	.project-image img:hover {
		opacity: 1;
	}

	.tech-used {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		z-index: 2;
		margin: 25px 0 10px;
		padding: 0;
		list-style: none;
	}

	.tech-used li {
		margin: 0 20px 5px 0;
		white-space: nowrap;
		font-size: 0.8rem;
	}

	.project-grid:nth-of-type(2n + 2) .project-image {
		grid-column: 1 / 8;
	}

	.project-grid:nth-of-type(2n + 2) .project-content {
		grid-column: 7 / -1;
		text-align: right;
	}

	.project-grid:nth-of-type(2n + 2) .tech-used {
		justify-content: flex-end;
	}

	@media (max-width: 750px) {
		.project-grid {
			margin-bottom: 2rem;
		}

		.project-image {
			display: none;
		}

		.project-content,
		.project-grid:nth-of-type(2n + 2) .project-content {
			grid-column: 1 / -1;
			grid-area: auto;
			text-align: left;
		}

		.project-grid:nth-of-type(2n + 2) .tech-used {
			justify-content: flex-start;
		}
	}
</style>
