<script>
	import { projects } from '$lib/store';
</script>

{#each $projects as project}
	<a href={project.path}>
		<div>
			{project.metadata.title}
		</div>
	</a>
{/each}
