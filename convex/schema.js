import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    content: v.string(),
    author: v.string(),
    email: v.string(),
    type: v.string(),
    status: v.string(),
    votes: v.number(),
    likes: v.number(),
    createdAt: v.number(),
  }),
  
  comments: defineTable({
    postId: v.id("posts"),
    author: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }),
  
  replies: defineTable({
    commentId: v.id("comments"),
    author: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }),
});