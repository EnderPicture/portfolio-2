<script lang="ts">
	import '../app.scss';
</script>

<nav>
	<div class="nav width">
		<p>DonnyWu</p>
		<div class="spacer"></div>
		<!-- <a href="/#contact">contact</a>
		<a href="/#about">about</a>
		<a href="/#projects">projects</a> -->
	</div>
</nav>

<main>
	<slot />
</main>

<footer>

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
		padding: .5rem $side-padding;
	}
}

.spacer {
	flex: 1;
}
p {
	margin: 0;
}
</style>