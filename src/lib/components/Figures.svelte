<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import type { FigureImage } from '$lib/types';
	import Figure from './Figure.svelte';

	export let images: FigureImage[] = [];
	export let wide: boolean = images.length > 2;
</script>

<div class="figures" class:wide style={`--count: ${images.length}`}>
	{#each images as img}
		<Figure {img} />
	{/each}
</div>

<style lang="scss">
	.wide {
		@include wide-width;
	}
	.figures {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(var(--count), 1fr);
		margin-bottom: 1rem;
		align-items: end;
	}
</style>
