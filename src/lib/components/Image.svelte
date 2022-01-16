<script lang="ts">
	let srcset = '';
	let src = '';
	import('$lib/images/favicon.png?w=100;500;1000&format=webp&srcset').then(
		({ default: importedSrcset }) => {
			srcset = importedSrcset;
			src = srcset
				.split(/ [0-9]+w,? ?/)
				.filter((d) => d != '')
				.reverse()[0];
		}
	);
</script>

<img {srcset} {src} type="image/webp" alt="testattribute" />
