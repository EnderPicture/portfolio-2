<script lang="ts">
	export let code: string;
	export let aspect: '16/9' | '12/5' = '16/9';
</script>

<div class="wide-width">
	<div class="aspect" class:aspect-16-9={aspect === '16/9'} class:aspect-12-5={aspect === '12/5'}>
		<iframe
			src={`https://www.youtube.com/embed/${code}`}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</div>

<style lang="scss">
	iframe {
		border-radius: $border-radius;
		overflow: hidden;
	}
	.aspect {
		height: 0;
		padding-bottom: #{calc(9 / 16 * 100) + '%'};
		position: relative;
		> * {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.aspect-16-9 {
		padding-bottom: #{calc(9 / 16 * 100) + '%'};
	}
	.aspect-12-5 {
		padding-bottom: #{calc(5 / 12 * 100) + '%'};
	}
</style>
