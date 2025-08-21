"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { TitleProvider } from "@/contexts/TitleContext"
import { useState } from "react"
import { useQuery, useMutation } from "convex/react"
import { api } from "../../../convex/_generated/api"

function SolicitudesDeMejorasPage() {
  const posts = useQuery(api.posts.getAllPosts) || []
  const mostUsefulPosts = useQuery(api.posts.getMostUsefulPosts, { limit: 8 }) || []
  const createPost = useMutation(api.posts.createPost)
  const votePost = useMutation(api.posts.votePost)
  const likePost = useMutation(api.posts.likePost)
  const createComment = useMutation(api.comments.createComment)
  const createReply = useMutation(api.comments.createReply)
  const seedData = useMutation(api.seedData.seedSampleData)

  const [newPost, setNewPost] = useState({ 
    title: "", 
    content: "", 
    name: "", 
    email: "", 
    type: "💡 Solicitud de Funcionalidades" 
  })
  const [showForm, setShowForm] = useState(false)
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState(null)
  const [newReply, setNewReply] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const comments = useQuery(api.comments.getCommentsWithReplies, selectedPost ? { postId: selectedPost._id } : "skip") || []

  // Filtrar posts basado en el filtro seleccionado
  const filteredPosts = selectedFilter === "all" 
    ? posts 
    : posts.filter(post => post.type === selectedFilter)

  // Tipos de filtros disponibles
  const filterTypes = [
    { key: "all", label: "Ver todas las publicaciones", emoji: "" },
    { key: "💡 Solicitud de Funcionalidades", label: "Solicitud de Funcionalidades", emoji: "💡" },
    { key: "📣 Feedback", label: "Feedback", emoji: "📣" },
    { key: "🧩 Integraciones", label: "Integraciones", emoji: "🧩" },
    { key: "⁉️ Preguntas", label: "Preguntas", emoji: "⁉️" },
    { key: "🐛 Caza de Errores", label: "Caza de Errores", emoji: "🐛" }
  ]

  // Función para obtener el conteo de publicaciones por tipo
  const getPostCountByType = (type) => {
    if (type === "all") return posts.length;
    return posts.filter(post => post.type === type).length;
  }

  // Funciones para manejar localStorage de votos y likes
  const hasVoted = (postId) => {
    if (typeof window === 'undefined') return false;
    const votedPosts = JSON.parse(localStorage.getItem('votedPosts') || '[]');
    return votedPosts.includes(postId);
  }

  const hasLiked = (postId) => {
    if (typeof window === 'undefined') return false;
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    return likedPosts.includes(postId);
  }

  const markAsVoted = (postId) => {
    if (typeof window === 'undefined') return;
    const votedPosts = JSON.parse(localStorage.getItem('votedPosts') || '[]');
    if (!votedPosts.includes(postId)) {
      votedPosts.push(postId);
      localStorage.setItem('votedPosts', JSON.stringify(votedPosts));
    }
  }

  const markAsLiked = (postId) => {
    if (typeof window === 'undefined') return;
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (!likedPosts.includes(postId)) {
      likedPosts.push(postId);
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPost.title.trim() && newPost.content.trim() && newPost.name.trim() && newPost.email.trim()) {
      try {
        await createPost({
          title: newPost.title,
          content: newPost.content,
          author: newPost.name,
          email: newPost.email,
          type: newPost.type
        })
        setNewPost({ 
          title: "", 
          content: "", 
          name: "", 
          email: "", 
          type: "💡 Solicitud de Funcionalidades" 
        })
        setShowNewPostModal(false)
      } catch (error) {
        console.error("Error creating post:", error)
      }
    }
  }

  const handleVote = async (id) => {
    if (hasVoted(id)) {
      // En lugar de alert, mostrar feedback visual más elegante
      const button = document.querySelector(`button[onclick*="${id}"]`);
      if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);
      }
      return
    }
    
    try {
      await votePost({ id })
      markAsVoted(id)
    } catch (error) {
      console.error("Error voting:", error)
    }
  }

  const handleLike = async (id, e) => {
    e.stopPropagation()
    
    if (hasLiked(id)) {
      // Feedback visual elegante en lugar de alert
      e.target.closest('button').style.transform = 'scale(0.95)';
      setTimeout(() => {
        const button = e.target.closest('button');
        if (button) button.style.transform = 'scale(1)';
      }, 150);
      return
    }
    
    try {
      await likePost({ id })
      markAsLiked(id)
    } catch (error) {
      console.error("Error liking:", error)
    }
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setShowModal(true)
  }

  const handleAddComment = async (e) => {
    e.preventDefault()
    if (newComment.trim() && selectedPost) {
      try {
        await createComment({
          postId: selectedPost._id,
          author: "Usuario Anónimo",
          content: newComment
        })
        setNewComment("")
      } catch (error) {
        console.error("Error adding comment:", error)
      }
    }
  }

  const handleAddReply = async (e, commentId) => {
    e.preventDefault()
    if (newReply.trim() && selectedPost && commentId) {
      try {
        await createReply({
          commentId,
          author: "Usuario Anónimo",
          content: newReply
        })
        setNewReply("")
        setReplyingTo(null)
      } catch (error) {
        console.error("Error adding reply:", error)
      }
    }
  }

  return (
    <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
      <div className="text-center space-y-3 px-4 lg:px-6">
        <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
          Foro de Solicitudes de Mejoras
        </h1>
        <p className="text-base text-black dark:text-white lg:text-lg text-left">
          Comparte tus ideas y vota por las mejoras que más te interesen
        </p>
      </div>
      
      <div className="w-full max-w-none xl:max-w-6xl xl:pr-80 mt-6 px-4 lg:px-6">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setShowNewPostModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Nueva Publicación
              </button>
            </div>

            {/* Dropdown de filtros */}
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:min-w-[200px]"
              >
                {filterTypes.map((filter) => (
                  <option key={filter.key} value={filter.key}>
                    {filter.emoji && `${filter.emoji} `}{filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Información del filtro activo */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {selectedFilter === "all" 
                ? `Mostrando ${filteredPosts.length} publicaciones` 
                : `Mostrando ${filteredPosts.length} publicaciones de tipo "${filterTypes.find(f => f.key === selectedFilter)?.label}"`
              }
            </div>
          </div>
          
          {/* Línea horizontal */}
          <hr className="mt-4 border-gray-200 dark:border-gray-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.length === 0 && selectedFilter !== "all" ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No hay publicaciones de este tipo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No se encontraron publicaciones del tipo "{filterTypes.find(f => f.key === selectedFilter)?.label}"
              </p>
              <button
                onClick={() => setSelectedFilter("all")}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Ver todas las publicaciones
              </button>
            </div>
          ) : filteredPosts.length === 0 && posts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No hay publicaciones aún
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sé el primero en compartir una solicitud de mejora
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
            <div 
              key={post._id} 
              onClick={() => handlePostClick(post)}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-black dark:text-white line-clamp-2 flex-1 pr-2">
                  {post.title}
                </h3>
                <button
                  onClick={(e) => handleLike(post._id, e)}
                  className={`flex items-center space-x-1 transition-colors flex-shrink-0 ${
                    hasLiked(post._id) 
                      ? 'text-red-600 cursor-not-allowed opacity-70' 
                      : 'text-red-500 hover:text-red-600'
                  }`}
                  disabled={hasLiked(post._id)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">{post.likes || 0}</span>
                </button>
              </div>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Por {post.author} • {new Date(post.createdAt).toLocaleDateString()}
              </p>
              
              <p className="text-sm text-black dark:text-white line-clamp-2 mb-3">
                {post.content}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{post.votes}</span>
                  </span>
                  
                  <span>{post.replies} respuestas</span>
                </div>
                
                <span className="text-blue-600 hover:text-blue-700 font-medium">
                  Ver más →
                </span>
              </div>
            </div>
            ))
          )}
        </div>

        {/* <div className=" max-w-3xl mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            💡 Consejos para una buena solicitud
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Sé específico sobre qué quieres mejorar</li>
            <li>• Explica cómo beneficiaría a otros usuarios</li>
            <li>• Vota por las ideas que te gusten</li>
            <li>• Participa en las discusiones con comentarios constructivos</li>
          </ul>
        </div> */}

        {/* <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
            🚧 En desarrollo
          </h3>
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Próximamente este foro estará conectado con Convex para persistir los datos y permitir respuestas en tiempo real.
          </p>
        </div> */}
      </div>

      {/* Modal para nueva publicación */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
            {/* Contenido principal */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-black dark:text-white pr-4">
                    Crear Nueva Solicitud
                  </h2>
                  <button
                    onClick={() => setShowNewPostModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0 p-1"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black dark:text-white mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={newPost.name}
                        onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black dark:text-white mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        value={newPost.email}
                        onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2">
                      Tipo de solicitud *
                    </label>
                    <select
                      value={newPost.type}
                      onChange={(e) => setNewPost({ ...newPost, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="💡 Solicitud de Funcionalidades">💡 Solicitud de Funcionalidades</option>
                      <option value="📣 Feedback">📣 Feedback</option>
                      <option value="🧩 Integraciones">🧩 Integraciones</option>
                      <option value="⁉️ Preguntas">⁉️ Preguntas</option>
                      <option value="🐛 Caza de Errores">🐛 Caza de Errores</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2">
                      Título de la solicitud *
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe tu solicitud en pocas palabras..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black dark:text-white mb-2">
                      Descripción detallada *
                    </label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Explica tu idea en detalle, cómo beneficiaría a los usuarios, y cualquier información adicional relevante..."
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 sm:space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      type="button"
                      onClick={() => setShowNewPostModal(false)}
                      className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors order-2 sm:order-1"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors order-1 sm:order-2"
                    >
                      Publicar Solicitud
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar derecho con preview/ayuda */}
            <div className="hidden lg:block w-80 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    💡 Consejos para una buena solicitud
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <li>• Sé específico sobre qué quieres mejorar</li>
                    <li>• Explica cómo beneficiaría a otros usuarios</li>
                    <li>• Incluye ejemplos si es posible</li>
                    <li>• Revisa si alguien ya hizo la misma solicitud</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    📝 Tu información
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    Usamos tu nombre y email para identificarte como autor y enviarte actualizaciones sobre tu solicitud.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    🚀 Proceso de revisión
                  </h4>
                  <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                    <div>1. Tu solicitud se marca como "Abierto"</div>
                    <div>2. El equipo la revisa y comenta</div>
                    <div>3. Se decide si implementar</div>
                    <div>4. Te notificamos los cambios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col lg:flex-row">
            {/* Contenido principal */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-black dark:text-white pr-4 leading-tight">
                    {selectedPost.title}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0 p-1"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Por {selectedPost.author} • {new Date(selectedPost.createdAt).toLocaleDateString()}
                </p>
                
                <p className="text-base text-black dark:text-white mb-6">
                  {selectedPost.content}
                </p>
                
                <div className="flex items-center gap-4 mb-6 sm:mb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleVote(selectedPost._id)}
                    className={`flex items-center space-x-2 transition-colors px-3 py-2 rounded-lg ${
                      hasVoted(selectedPost._id)
                        ? 'text-green-700 bg-green-100 dark:bg-green-800 cursor-not-allowed opacity-70'
                        : 'text-green-600 hover:text-green-700 bg-green-50 dark:bg-green-900/20'
                    }`}
                    disabled={hasVoted(selectedPost._id)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-sm sm:text-base">
                      {selectedPost.votes} votos {hasVoted(selectedPost._id) && '✓'}
                    </span>
                  </button>
                  
                  <button
                    onClick={(e) => handleLike(selectedPost._id, e)}
                    className={`flex items-center space-x-2 transition-colors px-3 py-2 rounded-lg ${
                      hasLiked(selectedPost._id)
                        ? 'text-red-700 bg-red-100 dark:bg-red-800 cursor-not-allowed opacity-70'
                        : 'text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/20'
                    }`}
                    disabled={hasLiked(selectedPost._id)}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-sm sm:text-base">
                      {selectedPost.likes || 0} likes {hasLiked(selectedPost._id) && '✓'}
                    </span>
                  </button>
                </div>

                {/* Comentarios */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white mb-4">
                    Comentarios ({comments.length})
                  </h3>
                  
                  {/* Form para nuevo comentario */}
                  <form onSubmit={handleAddComment} className="mb-4 sm:mb-6">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escribe un comentario..."
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
                      rows={3}
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
                    >
                      Comentar
                    </button>
                  </form>

                  {/* Lista de comentarios */}
                  <div className="space-y-3 sm:space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="space-y-2 sm:space-y-3">
                        {/* Comentario principal */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-black dark:text-white">{comment.author}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                          </div>
                          <p className="text-sm text-black dark:text-white mb-3">{comment.content}</p>
                          <button
                            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                            className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded"
                          >
                            Responder
                          </button>
                        </div>
                        
                        {/* Respuestas */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="ml-6 space-y-2">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 border-l-2 border-blue-200 dark:border-blue-600">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="font-medium text-black dark:text-white text-sm">{reply.author}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">{reply.date}</span>
                                </div>
                                <p className="text-xs text-black dark:text-white">{reply.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Formulario de respuesta */}
                        {replyingTo === comment.id && (
                          <div className="ml-3 sm:ml-6">
                            <form onSubmit={(e) => handleAddReply(e, comment.id)} className="space-y-2 sm:space-y-3">
                              <textarea
                                value={newReply}
                                onChange={(e) => setNewReply(e.target.value)}
                                placeholder="Escribe una respuesta..."
                                className="w-full p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                                rows={2}
                              />
                              <div className="flex flex-col xs:flex-row gap-2 xs:space-x-2">
                                <button
                                  type="submit"
                                  className="w-full xs:w-auto bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors order-1"
                                >
                                  Responder
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setReplyingTo(null)
                                    setNewReply("")
                                  }}
                                  className="w-full xs:w-auto bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors order-2"
                                >
                                  Cancelar
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar derecho */}
            <div className="hidden lg:block w-80 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Votos a Favor</h4>
                  <p className="text-2xl font-bold text-black dark:text-white">{selectedPost.votes}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Estado</h4>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedPost.status === 'In Review' 
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {selectedPost.status === 'In Review' ? 'En Revisión' : 'Abierto'}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Categoría</h4>
                  <p className="text-sm text-black dark:text-white">{selectedPost.board}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Fecha</h4>
                  <p className="text-sm text-black dark:text-white">
                    {selectedPost.daysAgo === 0 ? 'Hoy' : selectedPost.daysAgo === 1 ? 'Hace 1 día' : `Hace ${selectedPost.daysAgo} días`}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Autor</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {selectedPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm text-black dark:text-white">{selectedPost.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden xl:block fixed top-[7.5rem] right-8 z-30">
        <div className="bg-white dark:bg-black p-4 max-w-xs">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
            Tableros
          </h3>
          <div className="space-y-1">
            {filterTypes.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  selectedFilter === filter.key
                    ? "text-blue-600 bg-blue-50 dark:bg-blue-900 font-medium border-l-2 border-blue-600 pl-3"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {filter.key === "all" ? (
                  <span className="text-xs text-gray-500 dark:text-gray-400">{filter.label}</span>
                ) : (
                  `${filter.emoji} ${filter.label}`
                )}
              </button>
            ))}
          </div>
{/* 
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Proyecto Nerd
            </h4>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              AMA
            </button>
          </div> */}

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Más Útiles
            </h4>
            <div className="space-y-2 text-xs">
              {mostUsefulPosts.map((post, index) => {
                const medals = ['🥇', '🥈', '🥉'];
                const medal = index < 3 ? medals[index] : null;
                
                return (
                  <div key={post._id} className="flex items-center justify-between px-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors cursor-pointer" onClick={() => handlePostClick(post)}>
                    <div className="flex items-center space-x-2">
                      {medal ? (
                        <span>{medal}</span>
                      ) : (
                        <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">
                          {index + 1}
                        </span>
                      )}
                      <span className="text-gray-900 dark:text-white truncate max-w-[120px]" title={post.author}>
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-red-500">❤️</span>
                      <span className="text-gray-500 dark:text-gray-400">{post.likes}</span>
                    </div>
                  </div>
                );
              })}
              {mostUsefulPosts.length === 0 && (
                <div className="text-center text-gray-500 dark:text-gray-400 py-4">
                  No hay publicaciones con likes aún
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolicitudesDeMejorasPageRoute() {
  return (
    <TitleProvider>
      <SidebarProvider
        style={{
          "--sidebar-width": "20rem",
          "--header-height": "calc(var(--spacing) * 12)",
        }}
      >
        <SiteHeader />
        <AppSidebar variant="inset" />
        <SidebarInset>
          <div className="flex flex-1 flex-col pt-16 md:pt-28 pt-28">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <SolicitudesDeMejorasPage />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  )
}