"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { TitleProvider } from "@/contexts/TitleContext"
import { useState } from "react"

function SolicitudesDeMejorasPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Mejorar el sistema de búsqueda",
      content: "Sería genial tener un buscador más avanzado con filtros por categoría y fecha.",
      author: "Juan Pérez",
      date: "2024-08-15",
      votes: 12,
      replies: 3,
      likes: 8,
      status: "In Review",
      board: "💡 Feature Request",
      daysAgo: 6,
      convexId: null
    },
    {
      id: 2,
      title: "Modo oscuro mejorado",
      content: "El modo oscuro actual está bien, pero podría tener mejor contraste en algunos elementos.",
      author: "María García",
      date: "2024-08-14",
      votes: 8,
      replies: 1,
      likes: 5,
      status: "Open",
      board: "💡 Feature Request",
      daysAgo: 2,
      convexId: null
    }
  ])

  const [newPost, setNewPost] = useState({ title: "", content: "" })
  const [showForm, setShowForm] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState({
    1: [
      { id: 1, author: "Ana López", content: "Excelente idea! También sería útil poder filtrar por popularidad.", date: "2024-08-16" },
      { id: 2, author: "Carlos Ruiz", content: "¿Han considerado usar Elasticsearch para esto?", date: "2024-08-16" }
    ],
    2: [
      { id: 1, author: "Pedro Sánchez", content: "Totalmente de acuerdo con el contraste.", date: "2024-08-15" }
    ]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPost.title.trim() && newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: "Usuario Anónimo",
        date: new Date().toISOString().split('T')[0],
        votes: 0,
        replies: 0,
        likes: 0,
        status: "Open",
        board: "💡 Feature Request",
        daysAgo: 0,
        convexId: null
      }
      setPosts([post, ...posts])
      setNewPost({ title: "", content: "" })
      setShowForm(false)
    }
  }

  const handleVote = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, votes: post.votes + 1 } : post
    ))
  }

  const handleLike = (id, e) => {
    e.stopPropagation()
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post
    ))
  }

  const handlePostClick = (post) => {
    setSelectedPost(post)
    setShowModal(true)
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    if (newComment.trim() && selectedPost) {
      const comment = {
        id: (comments[selectedPost.id] || []).length + 1,
        author: "Usuario Anónimo",
        content: newComment,
        date: new Date().toISOString().split('T')[0]
      }
      setComments(prev => ({
        ...prev,
        [selectedPost.id]: [...(prev[selectedPost.id] || []), comment]
      }))
      setNewComment("")
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
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            {showForm ? "Cancelar" : "Nueva Solicitud"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
              Crear Nueva Solicitud
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Título
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
                  Descripción
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Explica tu idea en detalle y cómo beneficiaría a los usuarios..."
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Publicar Solicitud
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => handlePostClick(post)}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-black dark:text-white line-clamp-2 flex-1 pr-2">
                  {post.title}
                </h3>
                <button
                  onClick={(e) => handleLike(post.id, e)}
                  className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium">{post.likes || 0}</span>
                </button>
              </div>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Por {post.author} • {post.date}
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
          ))}
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

      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
            {/* Contenido principal */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-bold text-black dark:text-white pr-4">
                    {selectedPost.title}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex-shrink-0"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Por {selectedPost.author} • {selectedPost.date}
                </p>
                
                <p className="text-base text-black dark:text-white mb-6">
                  {selectedPost.content}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => handleVote(selectedPost.id)}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{selectedPost.votes}</span>
                  </button>
                  
                  <button
                    onClick={() => handleLike(selectedPost.id)}
                    className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{selectedPost.likes || 0}</span>
                  </button>
                </div>

                {/* Comentarios */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                    Comentarios ({(comments[selectedPost.id] || []).length})
                  </h3>
                  
                  {/* Form para nuevo comentario */}
                  <form onSubmit={handleAddComment} className="mb-6">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escribe un comentario..."
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={3}
                    />
                    <button
                      type="submit"
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Comentar
                    </button>
                  </form>

                  {/* Lista de comentarios */}
                  <div className="space-y-4">
                    {(comments[selectedPost.id] || []).map((comment) => (
                      <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-black dark:text-white">{comment.author}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{comment.date}</span>
                        </div>
                        <p className="text-sm text-black dark:text-white">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar derecho */}
            <div className="w-80 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6">
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
            <p className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">Ver todas las publicaciones</p>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              📣 Feedback
            </button>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 bg-blue-50 dark:bg-blue-900 font-medium border-l-2 border-blue-600 pl-3">
              💡 Solicitud de Funcionalidades
            </button>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              🧩 Integraciones
            </button>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              ⁉️ Preguntas
            </button>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              🐛 Caza de Bugs
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Proyecto Nerd
            </h4>
            <button className="block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              AMA
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Más Útiles
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span>🥇</span>
                  <span className="text-gray-900 dark:text-white">Scott Richard</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">1154</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span>🥈</span>
                  <span className="text-gray-900 dark:text-white">Luke</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">943</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span>🥉</span>
                  <span className="text-gray-900 dark:text-white">Yohan Costa</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">797</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">4</span>
                  <span className="text-gray-900 dark:text-white">InsourceGG</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">610</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">5</span>
                  <span className="text-gray-900 dark:text-white">Stephane Boghossian</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">563</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">6</span>
                  <span className="text-gray-900 dark:text-white">Mat</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">558</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">7</span>
                  <span className="text-gray-900 dark:text-white">Mayur</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">470</span>
              </div>
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-300">8</span>
                  <span className="text-gray-900 dark:text-white">Dante A</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">436</span>
              </div>
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