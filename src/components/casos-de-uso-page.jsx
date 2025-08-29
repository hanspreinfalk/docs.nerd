import { useState, useEffect } from 'react'

function CasosDeUsoTableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sections])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="hidden xl:block fixed top-[7.5rem] right-8 z-30">
      <div className="bg-white dark:bg-black p-4 max-w-xs">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          En esta página
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                activeSection === section.id
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-900 font-medium border-l-2 border-blue-600 pl-3'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export function CasosDeUsoPage() {
  const sections = [
    { id: 'inspiracion', title: 'Tiempo de Inspiración' },
    { id: 'proyectos-credito', title: 'Proyectos de Crédito' }
  ]

  return (
    <>
      <CasosDeUsoTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="inspiracion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Tiempo de Inspiración
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            ¿Qué está construyendo la gente con Nerd.lat?
          </p>
        </div>

        <div className="max-w-2xl mt-6 px-4 lg:px-4 md:px-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              La gente está construyendo cosas increíbles con Nerd.lat. Nos encanta compartir algunas que nos gustan que están construidas total o parcialmente con Nerd.lat:
            </p>
          </div>
        </div>

        <div id="proyectos-credito" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Proyectos de Crédito
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">
                    <a 
                      href="https://silly-kashata-0611c7.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      Página Web de Promoción de Crédito
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sitio web promocional para servicios de crédito construido con Nerd.lat.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">
                    <a 
                      href="https://credit-simulator-j97-0ezxm8b1.nerdlat.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      Simulador de Crédito
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Herramienta interactiva para simular diferentes escenarios de crédito y préstamos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Páginas Web para Comunidades
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">
                    <a 
                      href="https://chatcerex.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      ChatCerex
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sitio web para la comunidad agrícola.
                  Conecta, comunica y colabora, creado en Nerd.lat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Puedes encontrar más aplicaciones construidas con Nerd.lat en nuestras redes sociales o navegando por 'nerd.lat' en X.
            </p>
          </div>
        </div> */}
      </div>
    </>
  )
}