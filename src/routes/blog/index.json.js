import posts, { tags, categories } from "./_posts.js";

const postsData = posts.map((post) => {
  return {
    title: post.title,
    slug: post.slug,
    metadata: { ...post },
  };
});

const contents = JSON.stringify({
  posts: postsData,
  tags,
  categories,
});

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
