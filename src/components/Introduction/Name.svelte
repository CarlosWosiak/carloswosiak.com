<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<p class="greeting" use:reveal>Hi, my name is</p>
<h1 id="name" use:reveal={{ delay: 200 }}>Carlos Wosiak</h1>

<style>
	h1 {
		font-size: clamp(2.25rem, 6vw, 3rem);
		font-weight: 700;
		color: #fff6f6;
		margin: 0;
	}

	.greeting {
		color: rgb(var(--accent));
		margin-bottom: 0.5rem;
	}
</style>
