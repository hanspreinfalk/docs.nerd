import { useState, useEffect } from 'react'

function IntegracionesTableOfContents({ sections }) {
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

export function IntegracionesPage() {
  const sections = [
    { id: 'introduccion', title: 'Introducción' },
    { id: 'supabase-api', title: 'Obtener API de Supabase' },
    { id: 'openai-api', title: 'Obtener API de OpenAI' }
  ]

  return (
    <>
      <IntegracionesTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Integraciones
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            Extiende la funcionalidad de tu sitio web usando integraciones y APIs externas.
          </p>
        </div>

        <div className="max-w-2xl mt-6 px-4 lg:px-4 md:px-2">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-800 dark:text-green-200">
              Para usar Nerd.lat al máximo, solo necesitas obtener dos claves API: Supabase y OpenAI. Una vez que tengas estas claves, Nerd.lat las conectará automáticamente y podrás usar todas las funcionalidades avanzadas sin preocuparte por configuraciones técnicas.
            </p>
          </div>
        </div>

        <div id="supabase-api" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Obtener API de Supabase
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Supabase te permitirá tener una base de datos, autenticación de usuarios y almacenamiento de archivos en tu aplicación de Nerd.lat.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Crear una cuenta en Supabase
              </h3>
              <ol className="list-decimal list-inside text-base text-black dark:text-white space-y-2 ml-11">
                <li>Ve a <a href="https://supabase.com" className="text-green-600 dark:text-green-400 underline">supabase.com</a></li>
                <li>Haz clic en "Start your project" (Iniciar tu proyecto)</li>
                <li>Crea una cuenta usando GitHub, Google o email</li>
                <li>Crea un nuevo proyecto y selecciona una región</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Obtener las claves de API
              </h3>
              <div className="ml-11 space-y-3">
                <p className="text-base text-black dark:text-white">Una vez creado el proyecto:</p>
                <ol className="list-decimal list-inside text-base text-black dark:text-white space-y-2">
                  <li>Ve a la configuración del proyecto (Settings)</li>
                  <li>Selecciona "API" en el menú lateral</li>
                  <li>Encontrarás dos claves importantes:</li>
                </ol>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mt-3">
                  <p className="text-sm font-mono text-black dark:text-gray-300 mb-2">
                    <strong>URL del Proyecto:</strong> https://tu-proyecto.supabase.co
                  </p>
                  <p className="text-sm font-mono text-black dark:text-gray-300">
                    <strong>Clave Anónima (anon key):</strong> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Copiar las claves
              </h3>
              <div className="ml-11 space-y-3">
                <p className="text-base text-black dark:text-white">Copia estas dos claves y guárdalas:</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
                  <p className="text-sm font-mono text-black dark:text-gray-300 mb-2">
                    <strong>URL del Proyecto:</strong> https://tu-proyecto.supabase.co
                  </p>
                  <p className="text-sm font-mono text-black dark:text-gray-300">
                    <strong>Clave Anónima:</strong> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Listo:</strong> Una vez que tengas estas claves, Nerd.lat se encargará automáticamente de conectar tu base de datos y autenticación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="openai-api" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Obtener API de OpenAI
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            OpenAI te permitirá usar inteligencia artificial avanzada en tu aplicación para generar texto, imágenes y procesar audio.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Crear cuenta en OpenAI
              </h3>
              <ol className="list-decimal list-inside text-base text-black dark:text-white space-y-2 ml-11">
                <li>Ve a <a href="https://platform.openai.com" className="text-green-600 dark:text-green-400 underline">platform.openai.com</a></li>
                <li>Crea una cuenta o inicia sesión</li>
                <li>Verifica tu número de teléfono</li>
                <li>Configura tu método de pago (se requiere para usar la API)</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Generar clave de API
              </h3>
              <div className="ml-11 space-y-3">
                <ol className="list-decimal list-inside text-base text-black dark:text-white space-y-2">
                  <li>Ve a "API keys" en el menú lateral</li>
                  <li>Haz clic en "Create new secret key"</li>
                  <li>Dale un nombre descriptivo a tu clave</li>
                  <li>Copia la clave generada (solo se muestra una vez)</li>
                </ol>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Importante:</strong> Guarda tu clave de API en un lugar seguro. No la compartas públicamente ni la subas a repositorios de código.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Copiar la clave
              </h3>
              <div className="ml-11 space-y-3">
                <p className="text-base text-black dark:text-white">Copia la clave generada y guárdala:</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
                  <p className="text-sm font-mono text-black dark:text-gray-300">
                    <strong>Clave API:</strong> sk-proj-tu-clave-aqui...
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    <strong>Listo:</strong> Una vez que tengas esta clave, Nerd.lat se encargará automáticamente de conectar la inteligencia artificial a tu aplicación.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Importante: Gestión de costos</h3>
              <p className="text-base text-black dark:text-white mb-3">
                OpenAI cobra por uso. Te recomendamos:
              </p>
              <ul className="list-disc list-inside text-base text-black dark:text-white space-y-2">
                <li>Configura un límite de gasto en tu cuenta de OpenAI</li>
                <li>Empieza con un límite bajo (ej: $10) para probar</li>
                <li>Monitorea tu uso regularmente en el dashboard de OpenAI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Próximos pasos:</strong> Una vez que tengas ambas claves API, simplemente proporciónaselas a Nerd.lat y podrás usar todas las funcionalidades avanzadas sin configuraciones adicionales.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}