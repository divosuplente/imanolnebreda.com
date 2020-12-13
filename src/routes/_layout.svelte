<script>
	import Nav from "../components/Nav.svelte";

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 90em;
		background-color: white;
		padding: 0 2em;
		margin: 2em auto;
		box-sizing: border-box;
	}
</style>

<header id="header">
	<Nav {segment} />
</header>

<main>
	<slot />
</main>
