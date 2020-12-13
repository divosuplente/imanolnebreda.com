<script context="module">
	export function preload() {
		return this.fetch(`blog.json`)
			.then((r) => r.json())
			.then((content) => {
				return {
					tags: content.tags,
					categories: content.categories,
				};
			});
	}
</script>

<script>
    import TagCloud from "../../components/TagCloud.svelte";
	import Categories from "../../components/Categories.svelte";
	import Tags from "../../components/Tags.svelte";
    
    export let segment, tags, categories;
</script>

<div class="page">
	<aside class="sidebar">
		<Categories {categories} />
		<Tags {tags} />
		<TagCloud {tags} />
	</aside>
	<div class="main">
    <slot />
	</div>
</div>

<style>
    .page {
		display: flex;
		flex-wrap: wrap;
	}
	.page > * {
		margin: 0.5rem;
	}

	.sidebar {
		flex-basis: 15rem;
		flex-grow: 1;
	}
    .main {
		flex-basis: 0;
		flex-grow: 999;
		min-width: calc(50%-1rem);
	}
    </style>
