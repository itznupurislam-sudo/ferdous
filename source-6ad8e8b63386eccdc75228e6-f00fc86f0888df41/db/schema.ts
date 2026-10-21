import { pgTable, text, integer, boolean, timestamp, jsonb, uuid } from 'drizzle-orm/pg-core';
import type { Profile } from '../lib/content.js';
export const profiles = pgTable('profiles', {
  id: integer('id').primaryKey(),
  data: jsonb('data').$type<Profile>().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
export const items = pgTable('items', {
  id: uuid('id').defaultRandom().primaryKey(),
  section: text('section').notNull(),
  title: text('title').notNull(),
  subtitle: text('subtitle').notNull().default(''),
  description: text('description').notNull().default(''),
  period: text('period').notNull().default(''),
  imageUrl: text('image_url').notNull().default(''),
  linkUrl: text('link_url').notNull().default(''),
  position: integer('position').notNull().default(0),
  published: boolean('published').notNull().default(true),
});
export const messages = pgTable('messages', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  read: boolean('read').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
