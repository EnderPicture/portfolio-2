<script lang="ts">
	import type { Project } from '$lib/types';
	export let projects: Project[] = [];
</script>

<div class="projects">
	{#each projects as project}
		<a href={project.path}>
			<figure>
				<img src={project.cover.src} sizes="33vw" srcset={project.cover.srcset} alt="" />
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
	img {
		display: block;
	}
	figure {
		margin: 0;
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
