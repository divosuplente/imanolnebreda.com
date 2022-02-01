<script>
	import { menu } from '$src/stores/navigation';
	import Hamburguer from './Hamburguer.svelte';

	export let sidebar = false;
</script>

<nav class="container h-[5vh] w-4/5 mx-auto font-semibold text-lg">
	<div class="flex items-center h-full justify-end sm:hidden">
		<Hamburguer bind:open={sidebar} />
	</div>
	<ul class="hidden sm:flex flex-row justify-around items-center h-full">
		{#each $menu as item}
			<li>
				<a href={item.link}>{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>
