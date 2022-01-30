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
		margin-bottom: 1rem;
		align-items: end;
		grid-template-columns: repeat(min(var(--count), 3), 1fr);
		@media (max-width: $double-break) {
			grid-template-columns: repeat(min(var(--count), 2), 1fr);
		}
		@media (max-width: $single-break) {
			grid-template-columns: repeat(min(var(--count), 1), 1fr);
		}
	}
</style>
