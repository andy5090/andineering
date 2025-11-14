import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const agents = pgTable("agents", {
  id: serial("id").primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  how_it_works: text().notNull(),
  endpoint: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
