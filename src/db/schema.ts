import { pgEnum, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const LocationCategory = pgEnum("location_category", [
  "Unlimited",
  "Cafe",
  "Late Night",
  "Quick Service",
  "Portable",
  "Scholar",
]);

export const location = pgTable("location", {
  id: serial("id").primaryKey(),
  category: LocationCategory("category").notNull(),
});

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: text("name").notNull(),
});

export type Location = typeof location.$inferSelect;
export type NewLocation = typeof location.$inferInsert;

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
