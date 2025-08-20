"use client"

import { useState, useEffect, useMemo } from "react"
import { searchData } from "@/data/searchData"
import { useRouter } from "next/navigation"
import { useTitle } from "@/contexts/TitleContext"

export function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const router = useRouter()
  const { updateTitle } = useTitle()

  // Reset search when overlay opens and handle body scroll
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("")
      setSelectedIndex(0)
      // Prevent body scroll on mobile when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Search function
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      // Show all content when no search query
      return searchData.pages.flatMap(page => 
        page.sections.map(section => ({
          id: `${page.route}-${section.id}`,
          pageTitle: page.title,
          pageRoute: page.route,
          sectionTitle: section.title,
          sectionId: section.id,
          content: section.content,
          type: 'section'
        }))
      )
    }

    const query = searchQuery.toLowerCase()
    const results = []

    searchData.pages.forEach(page => {
      // Search in page title and description
      if (page.title.toLowerCase().includes(query) || 
          (page.description && page.description.toLowerCase().includes(query))) {
        results.push({
          id: `page-${page.route}`,
          pageTitle: page.title,
          pageRoute: page.route,
          sectionTitle: page.title,
          sectionId: null,
          content: page.description || "",
          type: 'page'
        })
      }

      // Search in sections
      page.sections.forEach(section => {
        if (section.title.toLowerCase().includes(query) || 
            section.content.toLowerCase().includes(query)) {
          results.push({
            id: `${page.route}-${section.id}`,
            pageTitle: page.title,
            pageRoute: page.route,
            sectionTitle: section.title,
            sectionId: section.id,
            content: section.content,
            type: 'section'
          })
        }
      })
    })

    return results
  }, [searchQuery])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
          break
        case 'Enter':
          e.preventDefault()
          if (searchResults[selectedIndex]) {
            handleResultClick(searchResults[selectedIndex])
          }
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, searchResults, selectedIndex, onClose])

  // Keep selected index in bounds
  useEffect(() => {
    if (selectedIndex >= searchResults.length) {
      setSelectedIndex(Math.max(0, searchResults.length - 1))
    }
  }, [searchResults.length, selectedIndex])

  // Handle touch gestures for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isTopSwipe = distance > 50
    const isBottomSwipe = distance < -50

    // Close modal on downward swipe
    if (isBottomSwipe) {
      onClose()
    }
  }

  const handleResultClick = (result) => {
    if (result.pageRoute === '/') {
      // Handle home page
      updateTitle("Bienvenido")
      router.push('/')
    } else if (result.pageRoute.startsWith('/')) {
      // Handle route-based pages
      if (result.pageRoute === '/ingenieria-prompts-page') {
        updateTitle("Ingeniería de Prompts")
      } else if (result.pageRoute === '/consejos-y-trucos') {
        updateTitle("Consejos y Trucos")
      } else if (result.pageRoute === '/glosario') {
        updateTitle("Glosario")
      } else if (result.pageRoute === '/casos-de-uso') {
        updateTitle("Casos de Uso")
      } else if (result.pageRoute === '/integraciones') {
        updateTitle("Integraciones")
      } else if (result.pageRoute === '/empezando-en-nerd') {
        updateTitle("Empezando en Nerd.lat")
      } else if (result.pageRoute === '/ayuda') {
        updateTitle("Preguntas Frecuentes")
      } else if (result.pageRoute === '/planes-y-tokens') {
        updateTitle("Planes y Tokens")
      } else if (result.pageRoute === '/anuncios') {
        updateTitle("Anuncios")
      }
      
      router.push(result.pageRoute)
      
      // Scroll to section if it's a section result
      if (result.sectionId) {
        setTimeout(() => {
          const element = document.getElementById(result.sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    } else {
      // Handle title-based navigation
      updateTitle(result.pageTitle)
      
      // Scroll to section if it's a section result
      if (result.sectionId) {
        setTimeout(() => {
          const element = document.getElementById(result.sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
    
    onClose()
  }

  const highlightText = (text, query) => {
    if (!query.trim()) return text
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 text-gray-900 dark:text-white">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  const truncateContent = (content, maxLength) => {
    // Default maxLength based on mobile/desktop, with fallback for SSR
    if (!maxLength) {
      maxLength = (typeof window !== 'undefined' && window.innerWidth < 768) ? 120 : 200
    }
    if (content.length <= maxLength) return content
    return content.slice(0, maxLength) + "..."
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div 
        className="fixed top-4 md:top-20 left-1/2 transform -translate-x-1/2 w-[calc(100%-1rem)] md:w-full max-w-4xl md:mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl z-50 max-h-[calc(100vh-2rem)] md:max-h-[80vh] flex flex-col"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile swipe indicator */}
        <div className="md:hidden flex justify-center pt-2 pb-1">
          <div className="w-8 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Search Input */}
        <div className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            {/* Close button for mobile */}
            <button
              onClick={onClose}
              className="md:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar documentación..."
                className="w-full px-4 py-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-base md:text-lg"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                inputMode="search"
                enterKeyHint="search"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          {/* Search stats */}
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {searchQuery.trim() ? (
              `${searchResults.length} resultado${searchResults.length !== 1 ? 's' : ''} encontrado${searchResults.length !== 1 ? 's' : ''}`
            ) : (
              "Mostrando todo el contenido disponible"
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-2 md:p-2 overscroll-behavior-contain">
          {searchResults.length === 0 && searchQuery.trim() ? (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469-.937-6.013-2.457M12 2.5a9.5 9.5 0 109.5 9.5A9.5 9.5 0 0012 2.5z" />
              </svg>
              <h3 className="text-lg font-medium mb-2">No se encontraron resultados</h3>
              <p>Intenta con diferentes palabras clave o busca términos más generales.</p>
            </div>
          ) : (
            <div className="space-y-1">
              {searchResults.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full text-left p-3 md:p-3 rounded-lg transition-colors touch-manipulation ${
                    index === selectedIndex 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {result.type === 'page' ? (
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469-.937-6.013-2.457M12 2.5a9.5 9.5 0 109.5 9.5A9.5 9.5 0 0012 2.5z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded truncate max-w-[200px] md:max-w-none">
                          {result.pageTitle}
                        </span>
                        {result.type === 'section' && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                            →
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1 text-sm md:text-base leading-tight">
                        {highlightText(result.sectionTitle, searchQuery)}
                      </h3>
                      
                      {result.content && (
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-2 md:line-clamp-3 leading-relaxed">
                          {highlightText(truncateContent(result.content), searchQuery)}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-2 md:p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2 md:space-x-4 overflow-x-auto">
              <span className="flex items-center space-x-1 whitespace-nowrap hidden md:flex">
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">↑↓</kbd>
                <span>navegar</span>
              </span>
              <span className="flex items-center space-x-1 whitespace-nowrap">
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">⏎</kbd>
                <span className="hidden sm:inline">seleccionar</span>
                <span className="sm:hidden">OK</span>
              </span>
              <span className="flex items-center space-x-1 whitespace-nowrap">
                <kbd className="px-1.5 py-0.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">esc</kbd>
                <span>cerrar</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}