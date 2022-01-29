<script lang="ts">
	import type { Project } from '$lib/types';
	import Image from './Image.svelte';
	export let projects: Project[] = [];
</script>

<div class="projects">
	{#each projects as project}
		<a href={project.path}>
			<figure>
				<Image srcset={project.cover.srcset} />
				<figcaption>
					{#if project.metadata.title}
						<p>{project.metadata.title}</p>
					{/if}
					{#if project.metadata.description}
						<p>{project.metadata.description}</p>
					{/if}
				</figcaption>
			</figure>
		</a>
	{/each}
</div>

<style lang="scss">
	.projects {
		@include wide-width;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}

	figure {
		margin: 0;
		height: 0px;
		padding-bottom: 56.25%;
		position: relative;

		:global(img) {
			transition: transform 0.5s ease;
		}
		&:hover {
			:global(img) {
				transform: scale(1.05);
				transition: transform 0.2s ease;
			}
		}

		:global(img) {
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}

		figcaption {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 0.25rem 1rem;
			background-color: #000a;
		}
	}

	a {
		display: block;
		background-color: #fff1;
		overflow: hidden;
		border-radius: $border-radius;
		text-decoration: none;
	}
	p {
		padding: 0.5rem 1rem;
		margin: 0;
		font-weight: 900;
	}
</style>
