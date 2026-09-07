<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<section class="section-inner contact-container" aria-labelledby="contact">
	<div class="contact-inner">
		<h2 id="contact" use:reveal>Get In Touch</h2>
		<p class="sub-text" use:reveal={{ delay: 100 }}>
			Do you have an interesting project and want someone to help you with it? My inbox is always
			open!
		</p>
		<a
			class="message"
			href="https://www.linkedin.com/in/carloswosiak/"
			rel="noopener noreferrer"
			target="_blank"
			use:reveal={{ delay: 200 }}>Message me</a
		>
	</div>
</section>

<style>
	.contact-container {
		margin-top: 4rem;
		margin-bottom: 4rem;
	}

	.contact-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 800;
		text-align: center;
		color: white;
	}

	.sub-text {
		align-self: center;
		max-width: 30rem;
		font-size: 1.2rem;
		text-align: center;
	}

	.message {
		color: rgb(var(--accent));
		background-color: transparent;
		border: 2px solid rgb(var(--accent));
		border-radius: 0.3rem;
		padding: 1.25rem 1.75rem;
		font-size: 1rem;
		line-height: 1;
		text-decoration: none;
		font-weight: 500;
		margin-top: 1rem;
		transition: transform 0.3s, background-color 0.3s;
	}

	.message:hover,
	.message:focus-visible {
		transform: scale(1.05);
		background-color: rgba(var(--accent), 0.08);
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2.5rem;
		}
	}
</style>
