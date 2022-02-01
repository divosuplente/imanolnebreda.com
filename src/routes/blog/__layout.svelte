<script>
	import '../app.css';
	import BlogFooter from '../components/BlogFooter.svelte';
	import '../tailwind.css';
</script>

<main class="container w-4/5 mx-auto">
	<slot />
</main>

<BlogFooter />
