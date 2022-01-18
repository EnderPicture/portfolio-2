<script lang="ts" context="module">
	import type { Project } from '$lib/types';
	import img from '/src/lib/images/favicon.png?w=100;500;1000&format=webp&srcset';

	export async function load() {
		let projects: Project[] = [];
		const allProjects = import.meta.glob('/src/routes/projects/*.md');
		for (let path in allProjects) {
			const { metadata } = await allProjects[path]();

			console.log(metadata.cover);

			let ext = metadata.cover.split('.').pop();
			let file = metadata.cover.replace('.' + ext, '');

			const { default: importedSrcset } = await import(
				`../lib/images/${file}.png?w=300;500;750;1000&format=webp&srcset`
			);
			let srcset = importedSrcset;
			let src = srcset
				.split(/ [0-9]+w,? ?/)
				.filter((d) => d != '')
				.reverse()[0];

			projects.push({
				cover: {
					src: src,
					srcset: srcset
				},
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
		I am a fullstack multimedia programmer who enjoys 3D environments and prototyping new ideas.
		Love being hands-on, creating accessible, beautiful, and functional projects, the satisfaction
		of getting each detail right is what I thrive for. Being always interested in the technical
		side, I also enjoy digging into how stuff works and how I can modify it. During my spare time, I
		enjoy photography, hiking, spending time with nature, and keeping up with technological
		advancements.
	</p>
</section>
<section id="projects">
	<h2>here are my projects</h2>
	<div class="projects">
		<ProjectList {projects} />
	</div>
	<section id="contact">
		<h2>contact</h2>
	</section>
</section>

<style lang="scss">
	p {
		@include read-width;
	}
	.projects {
		@include wide-width;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>
