<script lang="ts">
	export let img;
	import Image from './Image.svelte';

	let zoom;
</script>

<figure on:click={() => zoom()}>
	<Image alt={img.alt ?? ''} srcset={img.srcset} canExpand={true} bind:zoom />
	{#if img.figCaption}
		<figcaption>{img.figCaption}</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure {
		margin: 0;
		position: relative;
		border-radius: $border-radius;
		overflow: hidden;
		cursor: zoom-in;
		:global(.main-image) {
			transition: transform 0.5s ease;
		}
		&:hover {
			:global(.main-image) {
				transform: scale(1.05);
				transition: transform 0.2s ease;
			}
		}
	}
	figcaption {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0.25rem 1rem;
		background-color: #000a;
	}
</style>
