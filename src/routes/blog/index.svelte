<script context="module">
	import TagCloud from "../../components/TagCloud.svelte";
	import Categories from "../../components/Categories.svelte";
	import Tags from "../../components/Tags.svelte";

	export function preload() {
		return this.fetch(`blog.json`)
			.then((r) => r.json())
			.then((content) => {
				return {
					posts: content.posts,
					tags: content.tags,
					categories: content.categories,
				};
			});
	}
</script>

<script>
	export let posts, tags, categories;
</script>

<style>
	.recent-posts {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

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

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="page">
	<aside class="sidebar">
		<Categories {categories} />
		<Tags {tags} />
		<TagCloud {tags} />
	</aside>
	<div class="main">
		<h1>Recent posts</h1>

		<ul class="recent-posts">
			{#each posts as post}
				<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<li>
					<article>
						<a rel="prefetch" href="blog/{post.slug}">
							<h2>{post.title}</h2>
						</a>
						<p>{post.metadata.summary}</p>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</div>
