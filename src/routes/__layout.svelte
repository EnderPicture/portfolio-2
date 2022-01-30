<script lang="ts">
	import '$lib/styles/_global.scss';
</script>

<nav>
	<div class="nav width">
		<a class="home" href="/">DonnyWu</a>
		<div class="spacer" />
		<div class="links">
			<a href="/#contact">contact</a>
			<a href="/#about">about</a>
			<a href="/#projects">projects</a>
		</div>
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
		// position: sticky;
		// top: 0;
		// z-index: 20;
	}
	.links {
		display: flex;
		@media screen and (max-width: $tablet-break) {
			margin: 0 calc($side-padding - 0.5rem);
			flex-basis: 100%;
			a {
				padding: 0 0.5rem 0.5rem 0.5rem;
			}
		}
	}
	.nav {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		.home {
			font-weight: 900;
			@media screen and (max-width: $tablet-break) {
				padding-bottom: 0;
			}
		}
	}
	a {
		position: relative;
		z-index: 1;
		padding: 0.5rem $side-padding;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #fff;
			opacity: 0;
			z-index: -1;
			transition: opacity 0.5s ease;
		}
		text-decoration: none;
		&:hover::before {
			opacity: 0.1;
			transition: opacity 0.2s ease;
		}
	}

	.spacer {
		flex: 1;
	}
</style>
