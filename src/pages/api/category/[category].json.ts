import { getCollection } from "astro:content";

export async function GET({ params }: { params: { category: string } }) {
  const { category } = params;

  // Get all blog posts from the collection
  const allPosts = await getCollection("blog");

  // Filter posts by the given category
  const filteredPosts = allPosts.filter(
    (post: { data: { category: string } }) => post.data.category === category
  );

  return new Response(JSON.stringify(filteredPosts), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
