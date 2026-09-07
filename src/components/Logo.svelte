<script>
	import logo from '$lib/assets/logo.png';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<div class="logo" use:reveal={{ from: 'left', delay: 700 }}>
	<a href="#about" aria-label="Back to top">
		<img src={logo} alt="Carlos Wosiak logo" width="48" height="48" />
	</a>
</div>
<div class="background-logo" aria-hidden="true" use:reveal={{ from: 'left', delay: 700 }}></div>

<style>
	.logo {
		z-index: 100;
		position: fixed;
		display: flex;
		top: 2rem;
		left: 2rem;
		height: 3rem;
		width: 3rem;
		transition: transform 0.2s;
	}

	.logo:hover {
		transform: translate(10px, -5px);
	}

	.logo img {
		height: 3rem;
		width: 3rem;
	}

	.background-logo {
		z-index: 99;
		position: fixed;
		display: flex;
		top: 2rem;
		left: 2rem;
		height: 3rem;
		width: 3rem;
		background: #1f465c;
		border-radius: 10px;
	}

	@media (max-width: 968px) {
		.logo {
			position: static;
			display: flex;
			margin: 2rem 0 0 2rem;
		}

		.background-logo {
			display: none;
		}
	}
</style>
