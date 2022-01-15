<script lang="ts">
	import '../app.scss';
	import Logo1 from '$lib/images/favicon.png?w=100;500;1000&format=webp&srcset';
	console.log(Logo1)
	console.log(Logo1.split(/[0-9]+w(, )?/))
</script>

<nav>donny wu</nav>
<slot />

<img srcset={Logo1} type="image/webp" alt="testattribute"/>

<style lang="scss">

</style>