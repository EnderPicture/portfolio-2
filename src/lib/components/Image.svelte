<script lang="ts">
	export let img : string;
	let srcset = '';
	let src = '';
</script>

<img {srcset} {src} type="image/webp" alt="testattribute" />
