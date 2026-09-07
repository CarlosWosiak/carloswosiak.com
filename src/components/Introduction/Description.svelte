<script>
	import { reveal } from '$lib/actions/reveal.js';
</script>

<div class="profile-description">
	<p use:reveal={{ from: 'right', delay: 500 }}>
		Hi! I am Carlos, a Software Engineer. I develop scalable and cost-efficient applications using
		<span class="csharp">C#</span>,
		<span class="dotnet">.NET</span>,
		<span class="aws">AWS</span>,
		<span class="azure">Azure</span>,
		<span class="angular">Angular</span>,
		<span class="nodejs">Node.js</span>, and SQL Server, following the best practices for security
		and performance.
	</p>
	<p use:reveal={{ from: 'right', delay: 650 }}>
		I have a bachelor's degree in Software Engineering,
		<span class="aws">AWS certifications</span>, domain expertise in the FIX Protocol and financial
		trading exchanges. I am passionate about learning new technologies and sharing knowledge with
		others.
	</p>
	<p use:reveal={{ from: 'right', delay: 800 }}>
		I have given training courses and presented at conferences on various topics related to software
		development.
	</p>
	<p class="contact" use:reveal={{ from: 'right', delay: 950 }}>
		<a
			class="message"
			href="https://www.coursera.org/projects/asynchronism-using-net-core-implement-a-banking-system"
			rel="noopener noreferrer"
			target="_blank">Check out my course!</a
		>
	</p>
</div>

<style>
	.profile-description {
		overflow-x: hidden;
	}

	/* No `opacity` here: the reveal action animates opacity on these very
	   elements, and a scoped rule would outrank the global `.reveal` state. */
	.profile-description p {
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
	}

	.csharp,
	.dotnet {
		color: #4d92e3;
	}

	.azure {
		color: #007fff;
	}

	.aws {
		color: #f28e46;
	}

	.angular {
		color: #d64144;
	}

	.nodejs {
		color: #76ae64;
	}

	.contact {
		margin-top: 0.5rem;
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
		margin-top: 1rem;
		transition: transform 0.3s, background-color 0.3s;
	}

	.message:hover,
	.message:focus-visible {
		transform: scale(1.05);
		background-color: rgba(var(--accent), 0.08);
	}
</style>
