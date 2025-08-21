import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Crear nuevo comentario
export const createComment = mutation({
  args: {
    postId: v.id("posts"),
    author: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const commentId = await ctx.db.insert("comments", {
      postId: args.postId,
      author: args.author,
      content: args.content,
      createdAt: Date.now(),
    });
    return commentId;
  },
});

// Crear nueva respuesta
export const createReply = mutation({
  args: {
    commentId: v.id("comments"),
    author: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const replyId = await ctx.db.insert("replies", {
      commentId: args.commentId,
      author: args.author,
      content: args.content,
      createdAt: Date.now(),
    });
    return replyId;
  },
});

// Obtener comentarios de un post con sus respuestas
export const getCommentsWithReplies = query({
  args: { postId: v.id("posts") },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("postId"), args.postId))
      .order("asc")
      .collect();
    
    // Para cada comentario, obtener sus respuestas
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        const replies = await ctx.db
          .query("replies")
          .filter((q) => q.eq(q.field("commentId"), comment._id))
          .order("asc")
          .collect();
        
        return {
          ...comment,
          id: comment._id,
          date: new Date(comment.createdAt).toISOString().split('T')[0],
          replies: replies.map(reply => ({
            ...reply,
            id: reply._id,
            date: new Date(reply.createdAt).toISOString().split('T')[0],
          })),
        };
      })
    );
    
    return commentsWithReplies;
  },
});