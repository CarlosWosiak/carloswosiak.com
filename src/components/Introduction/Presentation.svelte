<script>
	import { reveal } from '$lib/actions/reveal.js';
	import profile640 from '$lib/assets/profile-640.jpg';
	import profile960 from '$lib/assets/profile-960.jpg';
</script>

<div class="main-photo" use:reveal={{ delay: 400 }}>
	<img
		src={profile640}
		srcset="{profile640} 640w, {profile960} 960w"
		sizes="(max-width: 768px) min(24rem, 84vw), 19rem"
		alt="Carlos Wosiak at Machu Picchu"
		width="640"
		height="492"
		draggable="false"
		fetchpriority="high"
		decoding="async"
	/>
</div>

<style>
	.main-photo img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 1.5rem;
	}
</style>
