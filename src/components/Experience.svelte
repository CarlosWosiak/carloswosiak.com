<script>
	import { reveal } from '$lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';
	import { jobs } from '../data/jobs.js';

	/** @typedef {{ src: string, width: number, height: number, alt: string }} Logo */
</script>

{#snippet mark(/** @type {Logo} */ logo)}
	<img
		src={logo.src}
		alt="{logo.alt} logo"
		width={logo.width}
		height={logo.height}
		draggable="false"
		loading="lazy"
		decoding="async"
	/>
{/snippet}

<section class="section-inner" aria-labelledby="experience">
	<SectionHeading id="experience" number="01." title="Where I’ve Worked" />

	{#each jobs as job (job.jobTitle + job.startDate)}
		<article class="job-entry" use:reveal>
			<!-- Linked where the company still has a site worth visiting, and a
			     plain image where it does not. -->
			{#if job.logo}
				<div class="company-logo">
					{#if job.website}
						<a
							href={job.website}
							target="_blank"
							rel="noopener noreferrer"
							title="Visit {job.logo.alt}"
						>
							{@render mark(job.logo)}
						</a>
					{:else}
						{@render mark(job.logo)}
					{/if}
				</div>
			{/if}
			<div class="job-header">
				<p class="job-period">{job.startDate} - {job.endDate}</p>
				<h3>
					{job.jobTitle}{#if job.company}<span class="company">&nbsp;@ {job.company}</span>{/if}
				</h3>
			</div>
			<ul class="job-description measure">
				{#each job.description as point (point)}
					<li>{point}</li>
				{/each}
			</ul>
			{#if job.links}
				<ul class="job-links">
					{#each job.links as link (link.href)}
						<li>
							<a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
						</li>
					{/each}
				</ul>
			{/if}
			<ul class="stack">
				{#each job.stack as tech (tech)}
					<li class="badge">{tech}</li>
				{/each}
			</ul>
		</article>
	{/each}
</section>

<style>
	.job-entry {
		margin-bottom: 3rem;
		padding: 1rem;
		margin-inline: -1rem;
		border-radius: 1rem;
		transition: background-color 0.3s;
	}

	.job-entry:hover {
		background-color: rgba(255, 255, 255, 0.096);
	}

	/*
	 * Company logos are sized by height, not width: the set mixes wordmarks
	 * (CAA AMA, ConectCar) with a square mark (Itaú), and a shared height is
	 * what makes them read as one row of brands. They are all light-on-
	 * transparent or brand-coloured, so they sit straight on the page
	 * background with no plate behind them.
	 */
	.company-logo {
		margin-bottom: 0.9rem;
	}

	.company-logo a {
		display: inline-flex;
	}

	.company-logo img {
		height: 2.25rem;
		width: auto;
		max-width: 11rem;
		object-fit: contain;
		opacity: 0.85;
		transition: opacity 0.3s, transform 0.3s;
	}

	.job-entry:hover .company-logo img {
		opacity: 1;
	}

	.company-logo a:hover img,
	.company-logo a:focus-visible img {
		opacity: 1;
		transform: scale(1.04);
	}

	.job-header {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0 2rem;
	}

	.job-period {
		margin: 0;
		white-space: nowrap;
	}

	h3 {
		margin: 0;
		display: inline;
	}

	.company {
		font-weight: 600;
		color: white;
	}

	.job-description {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
	}

	.job-description li {
		position: relative;
		padding-left: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.job-description li::before {
		content: '▹';
		position: absolute;
		left: 0;
		color: white;
	}

	.job-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		list-style: none;
		padding: 0;
		margin: 0.75rem 0 0;
	}

	.job-links a {
		color: rgb(var(--accent));
		font-size: 0.9rem;
		text-decoration: none;
		border-bottom: 1px solid rgba(var(--accent), 0.35);
		transition: border-color 0.2s;
	}

	.job-links a:hover,
	.job-links a:focus-visible {
		border-bottom-color: rgb(var(--accent));
	}

	.stack {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
	}

	.badge {
		background: #939ad13d;
		color: #a1b3f5;
		padding: 0.4rem 1rem;
		border-radius: 1rem;
		margin: 0.5rem 0.5rem 0 0;
		font-size: 0.9rem;
		transition: background-color 0.3s;
	}

	.badge:hover {
		background: #15171f3d;
	}
</style>
