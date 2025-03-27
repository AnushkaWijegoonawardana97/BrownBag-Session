// db/seed.ts
import { db, Author } from "astro:db";

export default async function () {
  await db.insert(Author).values([
    {
      id: "alex-smith",
      name: "Alex Smith",
      // Use avatarUrl here to match the schema
      avatarUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Tech enthusiast and software developer with 10+ years of experience in web technologies.",
      articleCount: 8,
    },
    {
      id: "emma-johnson",
      name: "Emma Johnson",
      // Use avatarUrl here as well
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "UX designer focused on creating intuitive and accessible digital experiences.",
      articleCount: 12,
    },
    {
      id: "marcus-williams",
      name: "Marcus Williams",
      // Use avatarUrl here
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "Business strategist and marketing expert helping startups scale effectively.",
      articleCount: 6,
    },
    {
      id: "sophia-chen",
      name: "Sophia Chen",
      // Use avatarUrl here
      avatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      bio: "Health and wellness writer passionate about mental health and balanced living.",
      articleCount: 5,
    },
  ]);
}
