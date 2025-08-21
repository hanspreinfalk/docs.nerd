import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Crear nuevo post
export const createPost = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    author: v.string(),
    email: v.string(),
    type: v.string(),
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("posts", {
      title: args.title,
      content: args.content,
      author: args.author,
      email: args.email,
      type: args.type,
      status: "Open",
      votes: 0,
      likes: 0,
      createdAt: Date.now(),
    });
    return postId;
  },
});

// Votar por un post
export const votePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) throw new Error("Post not found");
    
    await ctx.db.patch(args.id, {
      votes: post.votes + 1,
    });
  },
});

// Dar like a un post
export const likePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) throw new Error("Post not found");
    
    await ctx.db.patch(args.id, {
      likes: post.likes + 1,
    });
  },
});

// Obtener todos los posts
export const getAllPosts = query({
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").order("desc").collect();
    
    // Para cada post, obtener el conteo de comentarios
    const postsWithCounts = await Promise.all(
      posts.map(async (post) => {
        const comments = await ctx.db
          .query("comments")
          .filter((q) => q.eq(q.field("postId"), post._id))
          .collect();
        
        return {
          ...post,
          replies: comments.length,
          daysAgo: Math.floor((Date.now() - post.createdAt) / (1000 * 60 * 60 * 24)),
        };
      })
    );
    
    return postsWithCounts;
  },
});

// Obtener un post por ID
export const getPostById = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id);
    if (!post) return null;
    
    const comments = await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("postId"), post._id))
      .collect();
    
    return {
      ...post,
      replies: comments.length,
      daysAgo: Math.floor((Date.now() - post.createdAt) / (1000 * 60 * 60 * 24)),
    };
  },
});

// Obtener posts más útiles (ordenados por likes)
export const getMostUsefulPosts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit || 8;
    const posts = await ctx.db
      .query("posts")
      .filter((q) => q.gt(q.field("likes"), 0))
      .collect();
    
    // Ordenar por likes de mayor a menor y tomar los primeros
    const sortedPosts = posts
      .sort((a, b) => b.likes - a.likes)
      .slice(0, limit);
    
    return sortedPosts.map(post => ({
      ...post,
      daysAgo: Math.floor((Date.now() - post.createdAt) / (1000 * 60 * 60 * 24)),
    }));
  },
});