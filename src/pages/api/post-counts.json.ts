import { getCollection } from "astro:content";

export async function GET() {
  const allPosts = await getCollection("blog");

  // Count posts per category
  const categoryCounts: Record<string, number> = {};

  allPosts.forEach((post: { data: { category: any } }) => {
    const category = post.data.category;

    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  });

  return new Response(JSON.stringify(categoryCounts), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
