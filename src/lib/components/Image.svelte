<script lang="ts">
	export let srcset: string;
	export let alt: string = '';

	let src = srcset
		.split(/ [0-9]+w,? ?/)
		.filter((d) => d != '')
		.reverse()[0];
</script>

<img {srcset} {src} {alt} type="image/webp" sizes="33vw" />
