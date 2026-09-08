<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<div class="summary">
	<p use:reveal={{ from: 'left', delay: 500 }}>
		Hi! I am Carlos, a Software Engineer. I develop scalable and cost-efficient applications using
		<span class="csharp">C#</span>,
		<span class="dotnet">.NET</span>,
		<span class="aws">AWS</span>,
		<span class="azure">Azure</span>,
		<span class="angular">Angular</span>,
		<span class="nodejs">Node.js</span>, and SQL Server, following the best practices for security
		and performance.
	</p>
</div>

<style>
	/* The reveal slides these in horizontally, and `overflow-x: hidden` clips
	   that. A vertical slide would instead grow the scrollable overflow area —
	   `overflow-x: hidden` computes `overflow-y` to `auto` — and flash a
	   scrollbar inside the column until the animation lands. */
	.summary {
		overflow-x: hidden;
	}

	/* No `opacity` here: the reveal action animates opacity on these very
	   elements, and a scoped rule would outrank the global `.reveal` state. */
	.summary p {
		font-size: 1.1rem;
		margin: 0 0 1.5rem;
	}

	.summary p:last-child {
		margin-bottom: 0;
	}
</style>
