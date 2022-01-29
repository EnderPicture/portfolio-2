<script lang="ts">
	export let srcset: string;
	export let alt: string = '';
	export let canExpand = false;
	import { fade, fly } from 'svelte/transition';

	let src = srcset
		.split(/ [0-9]+w,? ?/)
		.filter((d) => d != '')
		.reverse()[0];

	let expanded = false;

	export const zoom = () => {
		expanded = !expanded;
	};
</script>

<img
	{srcset}
	{src}
	{alt}
	class="main-image"
	class:zoom-in={canExpand}
	type="image/webp"
	sizes="100vw"
	loading="lazy"
/>
{#if canExpand && expanded}
	<div
		class="full-screen"
		on:click|stopPropagation={(e) => zoom()}
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 200 }}
	>
		<img
			{srcset}
			{src}
			{alt}
			in:fly={{ y: -25, duration: 200 }}
			out:fly={{ y: 25, duration: 200 }}
			type="image/webp"
			sizes="100vw"
			loading="lazy"
		/>
	</div>
{/if}

<style lang="scss">
	.zoom-in {
		cursor: zoom-in;
	}
	img {
		display: block;
	}
	.full-screen {
		cursor: zoom-out;
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		background-color: #000b;

		> img {
			width: 100%;
			object-fit: contain;
			height: 100%;
		}
	}
</style>
