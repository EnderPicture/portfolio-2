<script lang="ts">
	export let code: string;
	export let aspect: '16/9' | '12/5' = '16/9';
	let hidden = true;
</script>

<div class="wide-width">
	<div class="aspect" class:aspect-16-9={aspect === '16/9'} class:aspect-12-5={aspect === '12/5'}>
		{#if hidden}
			<div class="placeholder">
				<img class="" src={`https://img.youtube.com/vi/${code}/0.jpg`} alt="" />
				<button on:click={() => (hidden = false)}><span>▶</span></button>
			</div>
		{:else}
			<iframe
				src={`https://www.youtube.com/embed/${code}?autoplay=1`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		{/if}
	</div>
</div>

<style lang="scss">
	.aspect {
		border-radius: $border-radius;
		overflow: hidden;
		height: 0;
		padding-bottom: #{calc(9 / 16 * 100) + '%'};
		position: relative;

		.placeholder {
			> button {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				border: none;
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				font-size: 2rem;
				padding: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: opacity 0.5s ease;
				&:hover {
					cursor: pointer;
					transition: opacity 0.1s ease;
					opacity: 0.5;
				}
				span {
					transform: translateX(0.1em);
				}
			}
		}
		img {
			width: 100%;
			height: 100%;
			filter: blur(10px);
			transform: scale(1.1);
		}
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
