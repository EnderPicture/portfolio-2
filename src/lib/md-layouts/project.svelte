<script>
	import Image from '$lib/components/Image.svelte';
	import '$lib/styles/project.scss';
	export let title;
	export let cover;
</script>

<svelte:head>
	<title>{title} | Donny's portfolio</title>
</svelte:head>

<header>
	<div class="hero">
		<Image srcset={cover} />
	</div>
	<h1>{title}</h1>
	<div class="cover">
		<Image srcset={cover} />
	</div>
</header>

<section>
	<slot />
</section>
