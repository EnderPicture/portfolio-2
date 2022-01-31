<script lang="ts">
	import type { Project } from '$lib/types';
	import Image from './Image.svelte';
	export let projects: Project[] = [];
</script>

<div class="projects">
	{#each projects as project}
		<a href={project.path}>
			<figure>
				<Image srcset={project.cover} alt={`an image tumbnail of ${project.metadata.title}`} />
				<figcaption>
					{#if project.metadata.title}
						<p>{project.metadata.title}</p>
					{/if}
					{#if project.metadata.description}
						<p class="desc">{project.metadata.description}</p>
					{/if}
					{#if project.metadata.tags}
						<p class="tags">
							{#each project.metadata.tags as tag}
								<span>{tag}</span>
							{/each}
						</p>
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
		@media (max-width: $double-break) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: $single-break) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	figure {
		margin: 0;
		height: 0px;
		padding-bottom: 61.8%;
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
		// padding: 0.5rem 1rem;
		margin: 0;
		font-weight: 900;
		& + * {
			margin-top: 0.5rem;
		}
	}
	.desc {
		font-weight: initial;
		line-height: 1;
	}
	.tags {
		display: flex;
		font-weight: initial;
		margin-right: -0.5rem;
		margin-left: -0.5rem;
		span {
			display: block;
			padding: 0.1rem 0.5rem;
		}
	}
</style>
