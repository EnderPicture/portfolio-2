<script>
	export let code;
</script>

<div class="wide-width">
	<div class="aspect-16-9">
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
	.aspect-16-9 {
		height: 0;
		padding-bottom: #{calc(9 / 16 * 100) + '%'};
		position: relative;
		background-color: gray;
		> * {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
