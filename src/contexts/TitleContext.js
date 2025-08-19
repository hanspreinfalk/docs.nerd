"use client"

import { createContext, useContext, useState } from 'react'

const TitleContext = createContext()

export function TitleProvider({ children }) {
  const [currentTitle, setCurrentTitle] = useState('Introducción')

  const updateTitle = (title) => {
    setCurrentTitle(title)
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
