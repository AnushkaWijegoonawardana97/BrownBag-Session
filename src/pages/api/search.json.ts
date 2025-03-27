import { getCollection } from "astro:content";
import { type CollectionEntry } from "astro:content";

// Fetch all blog posts
const allBlogPosts: CollectionEntry<"blog">[] = await getCollection("blog");

export async function get(request: Request) {
  const query = new URLSearchParams(new URL(request.url).search).get("q") || "";
  const filteredPosts = allBlogPosts.filter((post) => {
    // Check if the search query exists in the title, description, or content
    const content = post.data.title + " " + post.data.description + " " + (post.body || "");
    return content.toLowerCase().includes(query.toLowerCase());
  });

  return {
    body: JSON.stringify(filteredPosts), // Return filtered posts as JSON
  };
}
