<script>
	import { onMount } from 'svelte';

	import Certificates from '../components/Certificates.svelte';
	import Contact from '../components/Contact.svelte';
	import Education from '../components/Education.svelte';
	import Experience from '../components/Experience.svelte';
	import Footer from '../components/Footer.svelte';
	import Introduction from '../components/Introduction/Introduction.svelte';
	import Loader from '../components/Loader.svelte';
	import Logo from '../components/Logo.svelte';
	import Navigation from '../components/Navigation.svelte';
	import Projects from '../components/Projects.svelte';

	const HOLD = 1100;
	const FADE = 400;

	// The loader is an overlay on top of already-rendered content, so the
	// prerendered HTML carries the whole page for crawlers and no-JS visitors.
	// `fading` starts the CSS fade, `dismissed` unmounts it afterwards — a
	// plain `out:` transition can be left behind on a hydrated block, and a
	// stranded full-screen overlay swallows every click on the page.
	let fading = $state(false);
	let dismissed = $state(false);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			dismissed = true;
			return;
		}

		const startFade = setTimeout(() => (fading = true), HOLD);
		const unmount = setTimeout(() => (dismissed = true), HOLD + FADE);

		return () => {
			clearTimeout(startFade);
			clearTimeout(unmount);
		};
	});

	$effect(() => {
		document.body.style.overflow = dismissed ? '' : 'hidden';
	});
</script>

<a class="skip-link" href="#main">Skip to content</a>

{#if !dismissed}
	<div class="loader-overlay" class:fading aria-hidden="true">
		<Loader />
	</div>
{/if}

<Logo />
<Navigation />

<main id="main">
	<Introduction />
	<Experience />
	<Certificates />
	<Projects />
	<Education />
	<Contact />
</main>

<Footer />

<style>
	.loader-overlay {
		position: fixed;
		inset: 0;
		z-index: 101;
		transition: opacity 400ms ease;
	}

	.loader-overlay.fading {
		opacity: 0;
		pointer-events: none;
	}
</style>
