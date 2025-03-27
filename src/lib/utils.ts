import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCategoryBadgeColor = (categoryId: string): string => {
  console.log(categoryId);
  const categoryColors: Record<string, string> = {
    Technology: "bg-blue-600 text-white",
    Design: "bg-purple-600 text-white",
    Business: "bg-green-600 text-white",
    Lifestyle: "bg-yellow-500 text-black",
    Health: "bg-red-600 text-white",
    Travel: "bg-teal-600 text-white",
  };

  return categoryColors[categoryId] || "bg-gray-600 text-white"; // Default color
};

export function sortByDate(posts: { data: { date: string } }[]) {
  return posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
