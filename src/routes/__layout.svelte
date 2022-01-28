<script lang="ts">
	import '$lib/styles/_global.scss';
</script>

<nav>
	<div class="nav width">
		<a href="/">DonnyWu</a>
		<div class="spacer" />
		<a href="/#contact">contact</a>
		<a href="/#about">about</a>
		<a href="/#projects">projects</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer class="width">
	<p>Copyright Donny Wu {new Date().getFullYear()}</p>
</footer>

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
</style>
