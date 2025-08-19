"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useTitle } from "@/contexts/TitleContext"

export function SiteHeader() {
  const { currentTitle } = useTitle()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  return (
    <>
      {/* Main header */}
      <header
        className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex w-full items-center justify-between px-4 lg:px-6">
          {/* Left side - Logo and title */}
          <div className="flex items-center gap-3">
            <img src="/lentes.svg" alt="Lentes" className="size-10" />
            <span className="text-xl font-bold">Nerd.lat</span>
          </div>
          
          {/* Center - Search bar (Desktop only) */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
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
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
            >
              <svg
                className="w-5 h-5 text-gray-600"
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
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
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
            </button>
          </div>
        </div>
      </header>

      {/* Mobile secondary header */}
      <header className="md:hidden flex h-12 shrink-0 items-center bg-white gap-2 border-b fixed top-16 left-0 right-0 z-40">
        <div className="flex w-full items-center px-6">
          <SidebarTrigger className="-ml-1" />
          <span className="ml-3 text-sm font-medium text-gray-600">{currentTitle}</span>
        </div>
      </header>

      {/* Mobile search overlay */}
      {isSearchOpen && (
        <>
          {/* Blur backdrop - covers everything except the search input */}
          <div 
            className="md:hidden fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm z-40"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Search input - positioned above the backdrop */}
          <div className="md:hidden fixed left-0 right-0 z-50 bg-white border-b shadow-sm">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4 text-gray-400"
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
