"use client"

import { createContext, useContext, useState, useEffect } from 'react'

const TitleContext = createContext()

export function TitleProvider({ children }) {
  const [currentTitle, setCurrentTitle] = useState('Introducción')

  // Initialize from URL parameter on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const pageParam = urlParams.get('page')
      if (pageParam) {
        setCurrentTitle(decodeURIComponent(pageParam))
      }
    }
  }, [])

  const updateTitle = (title) => {
    setCurrentTitle(title)
    // Update URL parameter when title changes
    if (typeof window !== 'undefined') {
      const url = new URL(window.location)
      url.searchParams.set('page', encodeURIComponent(title))
      window.history.replaceState({}, '', url.toString())
    }
  }

  return (
    <TitleContext.Provider value={{ currentTitle, updateTitle }}>
      {children}
    </TitleContext.Provider>
  )
}

export function useTitle() {
  const context = useContext(TitleContext)
  if (!context) {
    throw new Error('useTitle must be used within a TitleProvider')
  }
  return context
}
