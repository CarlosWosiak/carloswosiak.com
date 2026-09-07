<script>
	import { reveal } from '$lib/actions/reveal.js';
	import SectionHeading from './SectionHeading.svelte';
	import { certificates } from '../data/certificates.js';
</script>

<section class="section-inner" aria-labelledby="certificates">
	<SectionHeading id="certificates" number="02." title="Some Certifications I’ve Got" />

	<ul class="certificate-list" use:reveal>
		{#each certificates as certificate (certificate.title)}
			<li>
				<a href={certificate.authenticator} target="_blank" rel="noopener noreferrer">
					<img
						class="certificate-image"
						draggable="false"
						src={certificate.image}
						alt="{certificate.title} badge"
						width="340"
						height="340"
						loading="lazy"
						decoding="async"
					/>
					<span class="certificate-title">{certificate.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.certificate-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.certificate-list a {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 10rem;
		text-decoration: none;
		color: inherit;
	}

	.certificate-image {
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		user-select: none;
		transition: transform 0.3s;
	}

	.certificate-list a:hover .certificate-image,
	.certificate-list a:focus-visible .certificate-image {
		transform: scale(1.05);
	}

	.certificate-title {
		font-size: 0.85rem;
		text-align: center;
	}
</style>
