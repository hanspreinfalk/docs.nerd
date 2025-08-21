import { mutation } from "./_generated/server";

// Función para agregar datos de ejemplo
export const seedSampleData = mutation({
  handler: async (ctx) => {
    // Verificar si ya hay posts
    const existingPosts = await ctx.db.query("posts").collect();
    if (existingPosts.length > 0) {
      return { message: "Sample data already exists" };
    }

    // Crear posts de ejemplo
    const samplePosts = [
      {
        title: "Quiero poder recibir pagos en mi aplicación",
        content: "Estaría muy bien que implementaran una funcionalidad para poder integrar pasarelas de pagos a los proyectos.",
        author: "Juan Pablo Narchi",
        email: "juan@example.com",
        type: "💡 Solicitud de Funcionalidades",
        status: "Open",
        votes: 0,
        likes: 0,
        createdAt: Date.now(),
      },
      {
        title: "Mejorar el sistema de búsqueda",
        content: "Sería genial tener un buscador más avanzado con filtros por categoría y fecha.",
        author: "Juan Pérez",
        email: "juan.perez@example.com", 
        type: "💡 Solicitud de Funcionalidades",
        status: "In Review",
        votes: 12,
        likes: 8,
        createdAt: Date.now() - (6 * 24 * 60 * 60 * 1000), // 6 días atrás
      },
      {
        title: "Modo oscuro mejorado",
        content: "El modo oscuro actual está bien, pero podría tener mejor contraste en algunos elementos.",
        author: "María García",
        email: "maria@example.com",
        type: "💡 Solicitud de Funcionalidades", 
        status: "Open",
        votes: 8,
        likes: 5,
        createdAt: Date.now() - (2 * 24 * 60 * 60 * 1000), // 2 días atrás
      }
    ];

    const createdPosts = [];
    for (const post of samplePosts) {
      const postId = await ctx.db.insert("posts", post);
      createdPosts.push(postId);
    }

    // Crear comentarios de ejemplo
    if (createdPosts.length > 0) {
      await ctx.db.insert("comments", {
        postId: createdPosts[1], // Para el post de búsqueda
        author: "Ana López",
        content: "Excelente idea! También sería útil poder filtrar por popularidad.",
        createdAt: Date.now() - (1 * 24 * 60 * 60 * 1000),
      });

      const commentId = await ctx.db.insert("comments", {
        postId: createdPosts[1],
        author: "Carlos Ruiz", 
        content: "¿Han considerado usar Elasticsearch para esto?",
        createdAt: Date.now() - (1 * 24 * 60 * 60 * 1000),
      });

      // Crear respuesta de ejemplo
      await ctx.db.insert("replies", {
        commentId,
        author: "Juan Pérez",
        content: "Sí, Elasticsearch sería una buena opción, aunque también podríamos considerar Algolia.",
        createdAt: Date.now() - (12 * 60 * 60 * 1000), // 12 horas atrás
      });
    }

    return { message: "Sample data created successfully", postsCreated: createdPosts.length };
  },
});