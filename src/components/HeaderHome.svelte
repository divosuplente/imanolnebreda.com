<script>
	import Nav from "./Nav.svelte";
	import Sidebar from "./Sidebar.svelte";

	let open = false;
</script>

{#if !open}
	<header
		class="w-full h-96 bg-[url('https://source.unsplash.com/collection/962362/1920x1080')] bg-cover bg-center flex justify-center items-center"
	>
		<div class="flex flex-col justify-center items-cente">
			<h1 class=" text-center text-5xl text-white font-bold drop-shadow-lg  dark:text-black">
				My Life Musings
			</h1>
			<p class="mt-5 text-center text-lg text-white opacity-70  dark:text-black">
				This webiste is about programming and everything else I do with my life
			</p>
		</div>
	</header>
{/if}
<Sidebar bind:open />
<Nav bind:sidebar={open} />
