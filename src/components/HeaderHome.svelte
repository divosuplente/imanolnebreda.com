<script>
	import Nav from './Nav.svelte';
	import Sidebar from './Sidebar.svelte';

	let open = false;
</script>

{#if !open}
	<header
		class="hero h-[95vh]"
		style="background-image: url(&quot;https://source.unsplash.com/collection/962362/1920x1080&quot;);"
	>
		<div class="hero-overlay bg-opacity-60" />
		<div class="border-2 text-center hero-content text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Life Musings</h1>
				<p class="mb-5">Imanol Nebreda</p>
			</div>
		</div>
	</header>
{/if}
<Sidebar bind:open />
<Nav bind:sidebar={open} />
