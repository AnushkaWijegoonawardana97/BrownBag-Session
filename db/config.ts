// db/config.ts
import { defineDb, defineTable, column } from "astro:db";

// Define the Authors table
const Author = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // Primary key (id column)
    name: column.text(), // Name of the author
    bio: column.text(), // Bio of the author
    avatarUrl: column.text(), // Avatar URL of the author
    articleCount: column.number(), // Number of articles the author has written
  },
});

// Export the database configuration
export default defineDb({
  tables: { Author },
});
