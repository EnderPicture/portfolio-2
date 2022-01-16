<script>
  import '$lib/styles/project.scss';
	export let title;
</script>

<svelte:head>
	<title>{title} | Donny's portfolio</title>
</svelte:head>

<section>
	<slot />
</section>