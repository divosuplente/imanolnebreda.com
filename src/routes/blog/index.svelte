<script context="module">
	export function preload() {
		return this.fetch(`blog.json`)
			.then((r) => r.json())
			.then((content) => {
				return {
					posts: content.posts,
				};
			});
	}
</script>

<script>
	export let posts;
</script>

<style>
	.recent-posts {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

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
