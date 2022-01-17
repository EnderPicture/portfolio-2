<script context="module">
	import { loadProjects } from '$lib/store';
	export async function load() {
		await loadProjects();
		return {
			status: 200
		};
	}
</script>

<script lang="ts">
	import '$lib/styles/_global.scss';
</script>

<nav>
	<div class="nav width">
		<p>DonnyWu</p>
		<div class="spacer" />
		<!-- <a href="/#contact">contact</a>
		<a href="/#about">about</a>
		<a href="/#projects">projects</a> -->
	</div>
</nav>

<main>
	<slot />
</main>

<style lang="scss">
	nav {
		background-color: #000;
		max-width: initial;
	}
	.nav {
		display: flex;
		padding: 0;
		> * {
			padding: 0.5rem $side-padding;
		}
	}

	.spacer {
		flex: 1;
	}
	p {
		margin: 0;
	}
</style>
