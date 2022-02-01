<script lang="ts">
	import { menu } from '$src/stores/navigation';
	export let open = false;
</script>

<aside
	id="aside"
	class="absolute w-full h-full bg-white dark:bg-slate-600 dark:text-white"
	class:open
>
	<nav class="p-12 text-xl">
		{#each $menu as item, index}
			<a class="block" href={item.link}>{item.title}</a>
		{/each}
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
