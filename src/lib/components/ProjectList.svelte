<script>
	import { projects } from '$lib/store';
	let posts = [];
	let a = 'wow';
</script>

{#each $projects as post}
	<a href={post.path}>
		<div>
			{post.metadata.title}
		</div>
	</a>
{/each}

<p>testing {a}</p>
