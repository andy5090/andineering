import { bigint, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "../users/schema";

export const organizations = pgTable("organizations", {
  organization_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  name: text().notNull(),
  description: text().notNull(),
  users: uuid()
    .array()
    .references(() => users.id, { onDelete: "cascade" }),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});

export const apiKeys = pgTable("api_keys", {
  api_key_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedAlwaysAsIdentity(),
  api_key: text().notNull(),
  organization_id: bigint({ mode: "number" }).references(
    () => organizations.organization_id,
    { onDelete: "cascade" }
  ),
  created_at: timestamp().notNull().defaultNow(),
});
