<script>
	import BlogFooter from "$components/BlogFooter.svelte";
	import HeaderHome from "$components/HeaderHome.svelte";
	import "../app.css";
</script>

<div class="flex flex-col h-screen justify-between">
	<HeaderHome />

	<main>
		<slot />
	</main>

	<BlogFooter />
</div>
