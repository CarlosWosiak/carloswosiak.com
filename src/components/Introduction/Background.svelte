<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<div class="background">
	<p use:reveal={{ from: 'right', delay: 500 }}>
		I have a bachelor's degree in Software Engineering,
		<span class="aws">AWS certifications</span>, domain expertise in the FIX Protocol and financial
		trading exchanges. I am passionate about learning new technologies and sharing knowledge with
		others.
	</p>
	<p use:reveal={{ from: 'right', delay: 650 }}>
		I have given training courses and presented at conferences on various topics related to software
		development.
	</p>
	<p class="cta" use:reveal={{ from: 'right', delay: 800 }}>
		<a
			class="message"
			href="https://www.coursera.org/projects/asynchronism-using-net-core-implement-a-banking-system"
			rel="noopener noreferrer"
			target="_blank">Check out my course!</a
		>
	</p>
</div>

<style>
	.background {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow-x: hidden;
	}

	/* No `opacity` here: the reveal action animates opacity on these very
	   elements, and a scoped rule would outrank the global `.reveal` state. */
	.background p {
		font-size: 1.1rem;
		margin: 0 0 1.5rem;
	}

	.background p:last-child {
		margin-bottom: 0;
	}

	/* Centred on its own line rather than following the text's left edge, and
	   centred in whatever height is left over once the text above it has been
	   laid out — which is the photo column's overhang on a wide screen, and
	   nothing at all once the columns collapse. */
	.cta {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.message {
		display: inline-block;
		color: rgb(var(--accent));
		background-color: transparent;
		border: 2px solid rgb(var(--accent));
		border-radius: 0.3rem;
		padding: 1.25rem 1.75rem;
		font-size: 1rem;
		line-height: 1;
		text-decoration: none;
		font-weight: 500;
		transition: transform 0.3s, background-color 0.3s;
	}

	.message:hover,
	.message:focus-visible {
		transform: scale(1.05);
		background-color: rgba(var(--accent), 0.08);
	}
</style>
