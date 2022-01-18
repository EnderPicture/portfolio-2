<script lang='ts'>
	import type { Project } from '$lib/types';
	export let projects: Project[] = [];
</script>

{#each projects as project}
	<a href={project.path}>
		<div>
			{project.metadata.title}
		</div>
		<img src={project.cover.src} sizes="33vw" srcset={project.cover.srcset} alt="">
	</a>
{/each}
