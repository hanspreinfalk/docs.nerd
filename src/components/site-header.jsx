"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useTitle } from "@/contexts/TitleContext"
import { useTheme } from "@/contexts/ThemeContext"
import { SearchOverlay } from "@/components/search-overlay"

export function SiteHeader() {
  const { currentTitle, updateTitle } = useTitle()
  const { isDarkMode, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  const getNavUrl = (title) => {
    const navMapping = {
      "Introducción": "/",
      "Integraciones": "/integraciones",
      "Consejos y Trucos": "/consejos-y-trucos", 
      "Ingeniería de Prompts": "/ingenieria-prompts-page",
      "Casos de Uso": "/casos-de-uso",
      "Glosario": "/glosario"
    }
    return navMapping[title] || "/"
  }

  const isNavActive = (title) => {
    const url = getNavUrl(title)
    return pathname === url
  }

  const handleNavClick = (title) => {
    const url = getNavUrl(title)
    if (url !== "/") {
      window.location.href = url
    } else {
      updateTitle(title)
    }
  }
  
  return (
    <>
      {/* Main header */}
      <header
        className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-100 dark:border-gray-800 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
        <div className="flex w-full items-center justify-between px-4 lg:px-6">
          {/* Left side - Logo and title */}
          <div className="flex items-center gap-3">
            <img src="/lentes.svg" alt="Lentes" className="size-10" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Nerd.lat</span>
          </div>
          
          {/* Center - Search bar (Desktop only) */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-left flex items-center"
              >
                <span className="text-gray-500 dark:text-gray-400">Buscar documentación...</span>
                <kbd className="ml-auto text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded border hidden lg:inline">⌘K</kbd>
              </button>
              <svg
                className="absolute right-12 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
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
          
          {/* Right side - Search and Theme toggle */}
          <div className="flex items-center gap-2">
            {/* Mobile search icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
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
            </button>
            
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Desktop secondary header */}
      <header className="hidden md:flex h-12 shrink-0 items-center bg-white dark:bg-black gap-2 border-b border-gray-100 dark:border-gray-800 fixed top-16 left-0 right-0 z-40">
        <div className="flex w-full items-center px-6">
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick("Introducción")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Introducción") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Introducción
            </button>
            <button 
              onClick={() => handleNavClick("Integraciones")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Integraciones") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Integraciones
            </button>
            <button 
              onClick={() => handleNavClick("Consejos y Trucos")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Consejos y Trucos") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Consejos y Trucos
            </button>
            <button 
              onClick={() => handleNavClick("Ingeniería de Prompts")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Ingeniería de Prompts") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Ingeniería de Prompts
            </button>
            <button 
              onClick={() => handleNavClick("Casos de Uso")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Casos de Uso") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Casos de Uso
            </button>
            <button 
              onClick={() => handleNavClick("Glosario")} 
              className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
                isNavActive("Glosario") 
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold" 
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              Glosario
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile secondary header */}
      <header className="md:hidden flex h-12 shrink-0 items-center bg-white dark:bg-black gap-2 border-b border-gray-200 dark:border-gray-800 fixed top-16 left-0 right-0 z-40">
        <div className="flex w-full items-center px-6">
          <SidebarTrigger className="-ml-1" />
          <span className="ml-3 text-sm font-medium text-gray-600 dark:text-gray-300">{currentTitle}</span>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
}
