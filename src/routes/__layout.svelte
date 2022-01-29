<script lang="ts">
	import '$lib/styles/_global.scss';
</script>

<nav>
	<div class="nav width">
		<a class="home" href="/">DonnyWu</a>
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
		a {
			text-decoration: none;
		}
		.home {
			font-weight: 900;
		}
	}

	.spacer {
		flex: 1;
	}
</style>
