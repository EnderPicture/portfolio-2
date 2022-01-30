<script lang="ts" context="module">
	import type { Project } from '$lib/types';

	export async function load() {
		let projects: Project[] = [];
		const allProjects = import.meta.glob('/src/routes/projects/*.md');
		for (let path in allProjects) {
			const { metadata, cover } = await allProjects[path]();

			projects.push({
				cover: cover,
				path: path.replace(/(\/src\/routes\/)|(\.md)/g, ''),
				metadata: metadata
			});
		}
		return {
			props: {
				projects: projects
			}
		};
	}
</script>

<script lang="ts">
	export let projects: Project[] = [];
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<svelte:head>
	<title>Donny's portfolio</title>
</svelte:head>

<h1>Donny's playground</h1>

<section id="about">
	<h2>Who am I?</h2>
	<p>
		I am a fullstack multimedia programmer who enjoys web development, 3D environments and
		prototyping new ideas. Love being hands-on, creating accessible, beautiful, and functional
		projects, the satisfaction of getting each detail right is what I thrive for. Being always
		interested in the technical side, I also enjoy digging into how stuff works and how I can modify
		it. During my spare time, I enjoy photography, hiking, spending time with nature, and keeping up
		with technological advancements.
	</p>
</section>
<section id="projects">
	<h2>My projects</h2>
	<ProjectList {projects} />
	<section id="contact">
		<h2>contact</h2>
		<div class="links">
			<a href="mailto:donny@donnywu.com">Email</a>
			<a href="https://github.com/EnderPicture">GitHub</a>
			<a href="https://www.linkedin.com/in/donny-wu-4b848b87/">LinkedIn</a>
			<a href="https://www.instagram.com/_donny_wu/">Instagram</a>
		</div>
	</section>
</section>

<style lang="scss">
	p {
		@include read-width;
	}

	#contact {
		.links {
			margin: 0 -1rem;
			display: flex;
			flex-wrap: wrap;
		}
		a {
			display: inline-block;
			text-decoration: none;
			padding: .5rem 1rem;
			transition: 0.5s ease;
			margin: 0;
			&:hover {
				background-color: #0008;
				border-radius: 0.5rem;
				transition: 0.2s ease;
			}
		}
	}

	#projects {
		margin-bottom: 10rem;
	}
</style>
