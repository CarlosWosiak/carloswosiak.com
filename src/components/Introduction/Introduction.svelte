<script>
	import Description from './Description.svelte';
	import Name from './Name.svelte';
	import Presentation from './Presentation.svelte';
</script>

<section class="section-inner initial-presentation" id="about" aria-labelledby="name">
	<Name />
	<div class="intro-grid">
		<Presentation />
		<Description />
	</div>
</section>

<style>
	.initial-presentation {
		margin-top: 3rem;
		margin-bottom: 5rem;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: minmax(0, 19rem) minmax(0, 1fr);
		gap: 2.5rem;
		align-items: start;
		margin-top: 1.5rem;
	}

	@media (max-width: 768px) {
		.intro-grid {
			grid-template-columns: minmax(0, 24rem);
			gap: 2rem;
		}
	}
</style>
