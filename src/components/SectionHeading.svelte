<script>
	import { reveal } from '$lib/actions/reveal.js';

	/** @type {{ number: string, title: string, id?: string }} */
	let { number, title, id } = $props();
</script>

<h2 class="section-heading" {id} use:reveal>
	<span class="title-number">{number}</span>
	<span class="title">{title}</span>
	<span class="separator" aria-hidden="true"></span>
</h2>

<style>
	.section-heading {
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.title-number {
		color: rgb(var(--accent));
		margin-right: 0.6rem;
	}

	.title {
		font-weight: 600;
		color: white;
		font-size: 1.5rem;
	}

	.separator {
		flex: 1;
		max-width: 40%;
		height: 0.1rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.103);
		margin-left: 1rem;
	}
</style>
