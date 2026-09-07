<script>
	import { reveal } from '$lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';
	import { jobs } from '../data/jobs.js';
</script>

<section class="section-inner" aria-labelledby="experience">
	<SectionHeading id="experience" number="01." title="Where I’ve Worked" />

	{#each jobs as job (job.jobTitle + job.startDate)}
		<article class="job-entry" use:reveal>
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
