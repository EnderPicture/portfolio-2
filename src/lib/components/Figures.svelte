<script lang="ts">
	import Image from '$lib/components/Image.svelte';

	type FigureImage = {
		figCaption?: string;
		alt?: string;
		srcset: string;
	};

	export let images: FigureImage[] = [];
	export let wide: boolean = images.length > 2;
</script>

<div class="figures" class:wide style={`--count: ${images.length}`}>
	{#each images as img}
		<figure>
			<Image alt={img.alt ?? ''} srcset={img.srcset} />
			{#if img.figCaption}
				<figcaption>{img.figCaption}</figcaption>
			{/if}
		</figure>
	{/each}
</div>

<style lang="scss">
	figure {
		margin: 0;
		position: relative;
		border-radius: $border-radius;
		overflow: hidden;
	}
	figcaption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0.25rem 1rem;
		background-color: #000a;
	}
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
