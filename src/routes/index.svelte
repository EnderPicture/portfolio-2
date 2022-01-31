<script lang="ts" context="module">
	import type { Project } from '$lib/types';

	export async function load({ fetch }) {
		let projects: Project[] = [];

		const res = await fetch('/api/projects');
		if (res.ok) {
			projects = await res.json();
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
	import AnimatedHeader from '$lib/components/AnimatedHeader.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
</script>

<svelte:head>
	<title>Donny's portfolio</title>
	<meta name="description" content="Donny's portfolio containing projects from many disciplines" />
</svelte:head>

<AnimatedHeader text="Donny's Playground" />
<!-- <h1>Donny's playground</h1> -->

<section id="about">
	<h2>Who's this?</h2>
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
</section>
<section id="projects">
	<h2>More works</h2>
	<p>A place where I put WIP project reports</p>
	<a href="https://wiki.donnywu.com/">Donny Wu's Wiki</a>
</section>

<style lang="scss">
	p {
		@include read-width;
	}
</style>
