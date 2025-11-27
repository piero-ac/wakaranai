import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  // Other tables here...

  kanji: defineTable({
    kun_readings: v.array(v.string()),
    level: v.string(),
    meanings: v.array(v.string()),
    on_readings: v.array(v.string()),
    type: v.string(),
    character: v.optional(v.string()),
  }),
})
