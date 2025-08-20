import { useState, useEffect } from 'react'

function ConsejosTrucosTableOfContents({ sections }) {
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

export function ConsejosTrucosPage() {
  const sections = [
    { id: 'introduccion', title: 'Mejores Prácticas' },
    { id: 'fundacion', title: '1. Establece tu Fundación' },
    { id: 'prompting', title: '2. Mejores Prácticas de Prompting' },
    { id: 'chat-mode', title: '3. Usa el Modo Chat' },
    { id: 'supabase', title: '4. Evita Problemas con Supabase' },
    { id: 'visual-edit', title: '5. Usa la Edición Visual' },
    { id: 'github', title: '6. Usa GitHub y Control de Versiones' },
    { id: 'remix', title: '7. Cuando Todo Falle, Remix' },
    { id: 'paciencia', title: '8. Mantén la Paciencia' },
    { id: 'documentacion', title: '9. Usa la Documentación' },
    { id: 'bonus', title: '10. Consejos Adicionales' }
  ]

  return (
    <>
      <ConsejosTrucosTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Mejores Prácticas
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            Aprovecha al Máximo Nerd.lat
          </p>
        </div>

        <div id="fundacion" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            1. Establece tu Fundación: Usa el Archivo de Conocimiento
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            <strong>Por qué importa:</strong> El archivo de Conocimiento es el cerebro de tu proyecto. Se envía con cada prompt y ayuda a la IA a entender el contexto completo.
          </p>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-4">
            <h3 className="font-semibold text-black dark:text-white mb-3">Qué incluir:</h3>
            <ul className="list-disc list-inside text-sm text-black dark:text-gray-300 space-y-2">
              <li>Tu visión del producto (piénsalo como un PRD)</li>
              <li>Jornadas de usuario y personas</li>
              <li>Características y funcionalidades clave</li>
              <li>Sistemas de diseño y guías de UI</li>
              <li>Comportamiento específico por rol (ej. Admin, Usuario, Inversor)</li>
            </ul>
          </div>
          <p className="text-sm text-black dark:text-gray-300 mb-3">
            Puedes generar automáticamente un archivo de Conocimiento a través del Modo Chat:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
            <p>Genera conocimiento para mi proyecto en T=0 basado en las características que ya he implementado.</p>
          </div>
        </div>

        <div id="prompting" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            2. Mejores Prácticas de Prompting
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Prompts claros y verbosos = mejor salida. Piensa en la IA como tu compañero de ingeniería, solo sabe lo que le dices.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Consejos de Prompting:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    <strong>Sé específico:</strong> Menciona la página exacta (ej. /dashboard) y el comportamiento esperado.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    <strong>Usa lenguaje natural:</strong>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 mt-2 text-sm font-mono text-black dark:text-gray-300">
                      Quiero que los usuarios con rol Inversor accedan a este componente, pero no los Admins.
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    <strong>Agrega capturas de pantalla:</strong> Especialmente útil para describir bugs o problemas de UX.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    <strong>Agrega barreras de protección:</strong> Dile a la IA qué no tocar. Ej:
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 mt-2 text-sm font-mono text-black dark:text-gray-300">
                      No edites /shared/Layout.tsx.
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Plantilla de Desglose de Características:</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>1. Crear la nueva página</p>
                <p>2. Agregar layout de UI</p>
                <p>3. Conectar los datos</p>
                <p>4. Agregar lógica + casos extremos</p>
                <p>5. Probar por rol</p>
              </div>
            </div>
          </div>
        </div>

        <div id="chat-mode" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            3. Usa el Modo Chat Temprano y Frecuentemente
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Modo Chat = tu co-piloto de IA. Te ayuda a depurar, hacer lluvia de ideas y planificar implementaciones, sin editar tu código hasta que estés listo.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Cuándo cambiar al Modo Chat:</h3>
              <ul className="space-y-2 text-sm text-black dark:text-gray-300">
                <li>• Después de 2-3 intentos fallidos de "Intentar Arreglar"</li>
                <li>• Al depurar lógica compleja o problemas de base de datos</li>
                <li>• Al planificar nuevas características</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Consejo de Flujo de Trabajo:</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Algunos usuarios prefieren usar el Modo Chat para 60-70% de su tiempo. Solo haz clic en "Implementar el plan" cuando estés completamente satisfecho.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>En la página /settings, implementa [característica]. El comportamiento esperado es [XYZ]. Por favor no toques el componente A, layout B, o lógica compartida a menos que sea necesario.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="supabase" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            4. Evita Errores Comunes con Supabase
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Atención:</strong> Supabase no revierte limpiamente. Si reviertes una versión, tu esquema de base de datos puede romperse.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Mejores Prácticas:</h3>
              <ul className="space-y-2 text-sm text-black dark:text-gray-300">
                <li>• Conecta Supabase después de que el front-end esté estable</li>
                <li>• Si debes revertir, pídele a la IA:</li>
              </ul>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mt-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Por favor valida el esquema SQL en T=0 y asegúrate de que no hayan ocurrido cambios que rompan la funcionalidad.</p>
              </div>
              <p className="text-sm text-black dark:text-gray-300 mt-3">
                Siempre prueba características vinculadas a la base de datos antes de publicar.
              </p>
            </div>
          </div>
        </div>

        <div id="visual-edit" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            5. Usa la Edición Visual para Arreglos Rápidos de UI
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            La herramienta de Edición Visual es gratuita y rápida. Úsala en lugar de prompts para:
          </p>
          <ul className="list-disc list-inside text-base text-black dark:text-white lg:text-lg space-y-2">
            <li>Cambiar texto, colores, fuentes, ajustes de layout</li>
            <li>Editar múltiples elementos pequeños a la vez</li>
            <li>Commits seguros y sin créditos (con deshacer disponible)</li>
          </ul>
        </div>

        <div id="github" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            6. Usa GitHub y Control de Versiones Sabiamente
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Cada edición es un commit. Usa el pinning para marcar versiones estables.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <ul className="space-y-2 text-sm text-black dark:text-gray-300">
                <li>• Después de cada característica funcional: Pínala</li>
                <li>• Después de cada bug: Compara versiones visualmente</li>
              </ul>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 mt-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Compara la versión en T-1 con T-0. ¿Qué cambió? ¿Qué podría estar rompiendo?</p>
              </div>
            </div>
          </div>
        </div>

        <div id="remix" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            7. Cuando Todo Falle, Remix
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Muchos usuarios se dan cuenta: hacerlo todo de nuevo toma menos tiempo la segunda vez.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Remix crea una copia limpia de tu proyecto en T=0.
              </p>
              <ul className="space-y-2 text-sm text-black dark:text-gray-300">
                <li>• Reconstruye con mejor prompting + conocimiento más claro</li>
                <li>• Usa tu proyecto anterior solo como referencia</li>
                <li>• Casos de uso: estás atascado en un bucle buggy, quieres reiniciar limpio con historia preservada</li>
              </ul>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-3 mt-3">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Nota:</strong> Remix requiere desconectar Supabase primero.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="paciencia" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            8. Mantén la Paciencia, Mantén la Calma
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            No estás solo. La IA puede ser mágica un momento y frustrante al siguiente. El 5% final de cualquier construcción suele ser el más lento, pero el más importante.
          </p>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-black dark:text-white mb-3">Regla de oro:</h3>
            <p className="text-sm text-black dark:text-gray-300">
              Tómate tu tiempo con los prompts. Revisa todo. Divide el trabajo en bloques pequeños y probables. Cuanto más precisos sean tus inputs, mejores serán tus outputs.
            </p>
          </div>
        </div>

        <div id="documentacion" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            9. Usa la Documentación y Pide Ayuda
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            La documentación contiene tutoriales, plantillas, consejos de SEO, integraciones y más. Puedes hacer preguntas directamente en el asistente de IA de la documentación.
          </p>
          <ul className="list-disc list-inside text-base text-black dark:text-white lg:text-lg space-y-2">
            <li>Únete a la comunidad Discord para apoyo entre pares</li>
            <li>Cuando estés listo, envía tu proyecto a Nerd.lat Launch</li>
          </ul>
        </div>

        <div id="bonus" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            10. Consejos Adicionales
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <ul className="space-y-3 text-sm text-black dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    Agrega un prompt de nota de voz usando dictado (ej. En Mac, usa el micrófono para dictar prompts largos) para prompts largos. Crearás mejor input más rápido, especialmente útil cuando estés frustrado o cansado.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    Usa el patrón de prompt "Estoy frustrado..." para empujar mejor enfoque de la IA
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    Después de una edición mayor, siempre re revisa múltiples roles y su comportamiento (especialmente con lógica condicional)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    Almacena versiones estables como respaldos para depuración rápida
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <div>
                    Si ves efectos secundarios inesperados, esto ayuda a evitar bugs causados por lógica demasiado genérica:
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-2 mt-2 text-sm font-mono text-black dark:text-gray-300">
                      Crea un componente específicamente para [rol X] y no reutilices componentes compartidos a menos que estén claramente delimitados.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
