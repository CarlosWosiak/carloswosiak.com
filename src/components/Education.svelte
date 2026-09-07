<script>
	import { reveal } from '$lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';
	import { degreeList } from '../data/education.js';
</script>

<section class="section-inner education-section" aria-labelledby="education">
	<SectionHeading id="education" number="04." title="My Degrees" />

	{#each degreeList as degree (degree.title)}
		<article class="education-entry" use:reveal>
			<img
				class="education-image"
				draggable="false"
				src={degree.image}
				alt="{degree.university} logo"
				width="192"
				height="192"
				loading="lazy"
				decoding="async"
			/>
			<div>
				<h3>{degree.title}</h3>
				<p class="university">{degree.university}</p>
				{#if degree.description}
					<p class="degree-description measure">{degree.description}</p>
				{/if}
			</div>
		</article>
	{/each}
</section>

<style>
	.education-section {
		margin-top: 4rem;
	}

	.education-entry {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2rem;
		padding: 1rem;
		margin-inline: -1rem;
		border-radius: 1rem;
		transition: background-color 0.3s;
	}

	.education-entry:hover {
		background-color: rgba(255, 255, 255, 0.096);
	}

	.education-image {
		flex: 0 0 auto;
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 15px;
		user-select: none;
	}

	h3 {
		margin: 0 0 0.25rem;
		font-weight: 600;
		color: white;
		font-size: 1.15rem;
	}

	.university {
		margin: 0 0 0.25rem;
		font-weight: 500;
	}

	.degree-description {
		margin: 0;
		font-size: 0.9rem;
		color: var(--muted);
	}

	@media (max-width: 600px) {
		.education-entry {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
