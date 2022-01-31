<script lang="ts">
	export let text = '';
	let index = 0;
	let words = text.split(' ').map((w) => w.split('').map((c) => ({ index: ++index, char: c })));
</script>

<h1>
	{#each words as word}
		<span class="word">
			{#each word as char}
				<span class="char" style={`--delay: ${char.index / 20 + 1}s`}>{char.char}</span>
			{/each}
			<span class="char" />
		</span>
	{/each}
	<span />
</h1>

<style lang="scss">
	.word {
		white-space: nowrap;
	}
	.char {
		display: inline-block;
		animation-name: bounce;
		animation-duration: 15s;
		animation-play-state: running;
		animation-iteration-count: infinite;
		animation-delay: var(--delay);
	}
	@keyframes bounce {
		0% {
			transform: translateY(0em);
			animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
		}
		2% {
			transform: translateY(-0.5em);
			animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
		}
		4% {
			transform: translateY(0em);
			animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
		}
		5% {
			transform: translateY(-0.1em);
			animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
		}
		6%,
		100% {
			transform: translateY(0em);
			animation-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
		}
	}
</style>
