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
    { id: 'landing-pages', title: 'Páginas de Aterrizaje' },
    { id: 'plataformas-educativas', title: 'Plataformas Educativas' },
    { id: 'productos-fullstack', title: 'Productos Full-stack' },
    { id: 'juegos', title: 'Juegos' }
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

        <div id="landing-pages" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Páginas de Aterrizaje
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Dream Catcher</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Registra, analiza y descubre patrones en tus sueños.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Awaken Ambiance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">IA de voz en tiempo real que responde de manera natural.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Alpine Ventures</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Inversionista en fundadores obsesionados con el producto.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">PrintPigeon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Envía cartas en línea con facilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="plataformas-educativas" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Plataformas Educativas
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Vpromise</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Herramientas interactivas y soluciones innovadoras para la educación moderna.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Backchannel</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Sistema que revoluciona la búsqueda de empleo.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">CAR33R</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Mercado de contratación impulsado por criptomonedas.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Eva</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Recibe tus recomendaciones personalizadas de IA.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">SkillStep</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ayuda a las mujeres a encontrar trabajos seguros y educación en Europa.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">CodeLearn</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Plataforma interactiva para aprender programación a través de proyectos prácticos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="productos-fullstack" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Productos Full-stack
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">LOOK AI <span className="text-green-600">(recaudó $500K)</span></h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Búsqueda asistida por IA para ropa construida con Nerd.lat.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Wiktok</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">TikTok para páginas de Wikipedia.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">BluePrintA</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Simplifica el desarrollo de productos.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Wildcard AI <span className="text-orange-600">(YC)</span></h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">API de selección inteligente de herramientas para agentes de IA.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">BlueMint AI</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">IA que transforma ideas de productos en especificaciones detalladas listas para desarrolladores.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Stardust Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ayuda a propietarios de tiendas Shopify a encontrar el KPI exacto que bloquea su crecimiento.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Access AI</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Transforma cualquier sitio en una experiencia interactiva por voz.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">HealthSync</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Plataforma de gestión que integra información con seguimiento de salud personal.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">ChatPDF</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Habla con tus documentos de manera natural.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">RaiseFlow</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Un CRM para inversores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="juegos" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Juegos
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Echo of the Forge</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Experiencia narrativa de IA que se adapta a tus decisiones.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Kaleidoscope</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Texto que genera un espacio 3D.</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-black dark:text-white">Color Islands</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Juego multijugador.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Puedes encontrar más aplicaciones construidas con Nerd.lat en nuestras redes sociales o navegando por 'nerd.lat' en X.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}