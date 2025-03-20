import { pgTable } from "drizzle-orm/pg-core";
import { serial, text, integer,varchar } from "drizzle-orm/pg-core";


export const output = pgTable('output',{
  id:serial('id').primaryKey(),
  formData:varchar('formData').notNull(),
  aiResponse:text('aiResponse'),
  templateSlug:varchar('templateSlug').notNull(),
  createdBy:varchar('createdBy').notNull(),
  createdAt:varchar('createdAt')
})
