import { useState, useEffect } from 'react'

function WelcomeTableOfContents({ sections }) {
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
      <div className="bg-white p-4 max-w-xs">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          En esta página
        </h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block text-left w-full px-2 py-1 rounded text-sm transition-colors hover:bg-gray-100 ${
                activeSection === section.id
                  ? 'text-blue-600 bg-blue-50 font-medium border-l-2 border-blue-600 pl-3'
                  : 'text-gray-600 hover:text-gray-900'
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

export function WelcomePage() {
  const sections = [
    { id: 'bienvenido', title: 'Bienvenido' },
    { id: 'video-introduccion', title: 'Video Introducción' },
    { id: 'sobre-nerd', title: 'Sobre Nerd.lat' },
    { id: 'caracteristicas', title: 'Características Principales' }
  ]

  return (
    <>
      <WelcomeTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="bienvenido" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left">
            Bienvenido
          </h1>
          <p className="text-base text-black lg:text-lg text-left">
            Aprende sobre Nerd y empieza a crear
          </p>
        </div>
        <div id="video-introduccion" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/4y_Qo33FTUc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div id="sobre-nerd" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <p className="text-base text-black lg:text-lg">
          Nerd.lat es una plataforma impulsada por inteligencia artificial que permite a usuarios de cualquier nivel de habilidad crear sitios web completos (full-stack) a través de lenguaje natural. Simplemente describe lo que quieres, y Nerd.lat lo construye para ti.
          </p>
        </div>
      </div>
      <div id="caracteristicas" className="w-full max-w-3xl px-4 lg:px-6 -mt-0 lg:mt-0 lg:ml-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-2">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Comenzando</h1>
            <p className="text-sm text-black flex-grow">Tutorial paso a paso para crear tu primer proyecto</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Características</h1>
            <p className="text-sm text-black flex-grow">Funciones principales de Nerd</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Integraciones</h1>
            <p className="text-sm text-black flex-grow">Extiende la funcionalidad con integraciones</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Consejos y Trucos</h1>
            <p className="text-sm text-black flex-grow">Aprovecha al máximo Nerd</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Ingeniería de Prompts</h1>
            <p className="text-sm text-black flex-grow">Aprende estrategias efectivas de prompting</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Casos de Uso</h1>
            <p className="text-sm text-black flex-grow">Ver tutoriales en video y lo que otros han construido</p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Glosario</h1>
            <p className="text-sm text-black flex-grow">Aprende los términos clave</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Plantillas</h1>
            <p className="text-sm text-black flex-grow">Explora y usa plantillas de proyectos</p>
          </div>
        </div>

        {/* Card 9 */}
        <div className="bg-white rounded-lg shadow-md p-6 border h-[180px] flex flex-col">
          <div className="space-y-3 flex flex-col h-full">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8" style={{color: '#5DD73F'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h1 className="text-lg font-semibold text-black flex-shrink-0">Lanzado</h1>
            <p className="text-sm text-black flex-grow">¡Compite por créditos gratis cada semana!</p>
          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}

