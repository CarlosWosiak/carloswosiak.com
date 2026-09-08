<script>
	import Background from './Background.svelte';
	import Name from './Name.svelte';
	import Presentation from './Presentation.svelte';
	import Summary from './Summary.svelte';
</script>

<section class="section-inner initial-presentation" id="about" aria-labelledby="name">
	<Name />
	<!-- Areas rather than two column wrappers: the photo column and the text
	     column have to interleave when the grid collapses to one column, so the
	     photo, the summary and the background each need to be placed on their own. -->
	<div class="intro-grid">
		<div class="area-photo"><Presentation /></div>
		<div class="area-summary"><Summary /></div>
		<div class="area-background"><Background /></div>
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
		grid-template-rows: auto auto;
		grid-template-areas:
			'photo background'
			'summary background';
		gap: 2rem 2.5rem;
		align-items: start;
		margin-top: 1.5rem;
	}

	.area-photo {
		grid-area: photo;
	}

	.area-summary {
		grid-area: summary;
	}

	/* Stretched against the grid's `align-items: start` so the column has the
	   full row height to centre the button in. */
	.area-background {
		grid-area: background;
		align-self: stretch;
	}

	@media (max-width: 768px) {
		.intro-grid {
			grid-template-columns: minmax(0, 24rem);
			grid-template-rows: auto;
			grid-template-areas:
				'photo'
				'summary'
				'background';
			gap: 2rem;
		}
	}
</style>
