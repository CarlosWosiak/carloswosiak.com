<script>
	import { reveal } from '$lib/actions/reveal.js';

	const links = [
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#certificates', label: 'Certificates' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#education', label: 'Education' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav class="navigation" aria-label="Sections">
	<ul>
		{#each links as link, i (link.href)}
			<li use:reveal={{ from: 'left', delay: 900 + i * 100 }}>
				<a href={link.href}>
					<span class="indicator" aria-hidden="true"></span>
					<span>{link.label}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.navigation {
		z-index: 100;
		position: fixed;
		display: flex;
		top: 7rem;
		left: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	a {
		display: flex;
		align-items: center;
		color: rgb(202, 202, 202);
		font-size: 1rem;
		text-decoration: none;
	}

	a:hover,
	a:focus-visible {
		color: rgb(var(--accent));
	}

	a:hover .indicator,
	a:focus-visible .indicator {
		width: 3rem;
		background: rgb(var(--accent));
	}

	.indicator {
		width: 1.3rem;
		height: 0.1rem;
		border-radius: 1rem;
		background: rgb(202, 202, 202);
		margin-right: 0.6rem;
		transition: all 0.2s;
	}

	@media (max-width: 968px) {
		.navigation {
			display: none;
		}
	}
</style>
