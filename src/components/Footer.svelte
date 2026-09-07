<script>
	import Social from './Social.svelte';
</script>

<footer class="section-inner footer">
	<div>
		<p class="credit">
			Designed in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a
			>, built with
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>,
			<a href="https://minicss.us/" target="_blank" rel="noopener noreferrer">mini.css</a>
			and ❤️, deployed with
			<a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>. All text is
			set in the Inter typeface.
		</p>
	</div>

	<Social />
</footer>

<style>
	.footer {
		margin-bottom: 4rem;
	}

	.credit {
		max-width: 20rem;
	}

	a {
		text-decoration: none;
		font-weight: 600;
		color: white;
	}

	a:hover {
		color: rgb(var(--accent));
	}
</style>
