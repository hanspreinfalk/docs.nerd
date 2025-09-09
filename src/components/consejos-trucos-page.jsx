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
    { id: 'introduccion', title: 'Consejos y Trucos de Nerd.lat' },
    { id: 'consejos-generales', title: 'Consejos Generales' },
    { id: 'principios-prompting', title: 'Principios de Prompting: El Marco C.L.A.R.O.' },
    { id: 'tecnicas-prompting', title: 'Técnicas de Prompting Avanzadas' },
    { id: 'consejos-especificos', title: 'Consejos Específicos para Nerd.lat' },
    { id: 'trucos-practicos', title: 'Trucos Prácticos' }
  ]

  return (
    <>
      <ConsejosTrucosTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Consejos y Trucos de Nerd.lat
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            Domina Nerd.lat con estrategias probadas, evita errores costosos y acelera tu desarrollo con técnicas de expertos.
          </p>
        </div>

        <div className="max-w-2xl mt-6 px-4 lg:px-4 md:px-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">¡Atención!</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Los consejos de esta guía han sido validados por miles de desarrolladores en nuestra comunidad. Implementarlos te ahorrará horas de debugging, evitará pérdidas de progreso y multiplicará tu productividad. Cada estrategia está diseñada para casos reales que enfrentan nuestros usuarios diariamente.
            </p>
          </div>
        </div>

        <div id="consejos-generales" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Consejos Generales
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Fundamentos esenciales que todo usuario de Nerd.lat debe conocer. Estos principios previenen los errores más costosos y establecen las bases para un desarrollo exitoso:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Diversifica tus prompts para mejores resultados</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Reutilizar constantemente prompts extensos de ChatGPT puede generar código inconsistente y patrones conflictivos. Adapta cada prompt al contexto específico de tu proyecto para mantener coherencia arquitectónica.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Resolver errores más rápido con insights y soluciones generadas por IA</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Cuando encuentres errores, usa la IA para obtener análisis detallados y soluciones específicas. En lugar de debuggear manualmente, describe el problema y deja que la IA identifique las causas raíz y proponga fixes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Usa Jarvis estratégicamente</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Jarvis es ideal para arquitectura inicial y refactorización mayor, pero usarlo repetidamente puede sobrecomplicar tu código. Reserva su potencia para decisiones estructurales importantes, no para ajustes menores.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Estrategia de modelos: Jarvis para arquitectura, Nerd para desarrollo</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Jarvis excele en visión general, planificación de features complejas y decisiones arquitectónicas. Nerd es perfecto para implementación iterativa, debugging y refinamiento de funcionalidades existentes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">5. Evita recargar durante sesiones activas</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Recargar la página puede interrumpir el contexto de la IA y causar pérdida de tokens acumulados. Si necesitas refrescar, completa primero la tarea en curso o guarda un checkpoint explícito.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Publica frecuentemente para detectar errores temprano</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Cada publicación es una prueba en tiempo real. Detectar errores inmediatamente es 10x más rápido que debuggear después de múltiples cambios acumulados. Establece un ritmo: codifica → publica → verifica.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Protege tus proyectos: la eliminación es permanente</h3>
              <p className="text-sm text-black dark:text-gray-300">
                No existe papelera de reciclaje para proyectos eliminados. Antes de borrar, consulta con soporte para explorar alternativas como archivado o transferencia. Hemos recuperado proyectos valiosos que usuarios pensaron que debían eliminar.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">8. Combina modelos según tu plan</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Maximiza el valor de tu plan eligiendo la estrategia óptima:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>• <strong>Plan básico:</strong> Prompts concisos y específicos. Una instrucción clara por vez.</p>
                <p>• <strong>Plan alto:</strong> Flujo completo - Jarvis planifica → Nerd ejecuta → Flash depura.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">9. El soporte es tu aliado estratégico</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Nuestro equipo maneja casos únicos diariamente. Pueden recuperar proyectos, resolver bugs complejos, sugerir arquitecturas mejores y personalizar flujos para tu caso específico. No dudes en consultarnos.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">10. Estabilidad de conexión = estabilidad del proyecto</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Conexiones intermitentes causan timeouts, uploads parciales y sincronización incorrecta. En conexiones débiles, trabaja en sesiones más cortas y guarda progreso frecuentemente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">11. Monetiza y comparte tu trabajo</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Cada proyecto es una oportunidad de negocio o portfolio. Publícalos como demos, ofrécelos a clientes potenciales, o úsalos como casos de estudio. Tu próximo proyecto puede ser tu próxima fuente de ingresos.
              </p>
            </div>
          </div>
        </div>

        <div id="principios-prompting" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Principios de Prompting: El Marco C.L.A.R.O.
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Los grandes prompts siguen un conjunto de principios simples. Una forma útil de recordarlos es C.L.A.R.O.: Conciso, Lógico, Explícito, Adaptativo, Reflexivo. Úsalos como una lista de verificación al elaborar tus instrucciones:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Conciso</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Sé claro y ve al grano. El lenguaje vago o innecesario puede confundir al modelo. Usa lenguaje directo.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p className="text-red-600 dark:text-red-400">MALO: "¿Podrías crear una página web bonita para mi negocio?"</p>
                <p className="text-green-600 dark:text-green-400">BUENO: "Crea una landing page para un restaurante con menú, ubicación y formulario de reservas."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Lógico</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Estructura tu prompt de manera que tenga sentido. Presenta la información en el orden correcto y asegúrate de que cada parte se conecte lógicamente con la siguiente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Explícito</h3>
              <p className="text-sm text-black dark:text-gray-300">
                No dejes nada a la interpretación. Especifica exactamente qué quieres, cómo lo quieres, y qué formato esperas. Incluye detalles técnicos, restricciones y preferencias.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Adaptativo</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                No te conformes con la primera respuesta si no es perfecta. Los prompts se pueden refinar iterativamente. Una gran ventaja de la IA de Nerd.lat es que puedes refinar tus instrucciones basándote en los resultados previos.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Primer prompt: "Crea un botón de login"</p>
                <p>Prompt refinado: "Crea un botón de login azul con texto blanco, que se centre en la página y tenga un hover effect suave"</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Reflexivo</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Tómate tiempo para revisar qué funcionó y qué no después de cada interacción con la IA. Esto es más sobre ti que sobre el modelo. Como ingeniero de prompts, nota qué frases de prompt dieron un buen resultado y cuáles llevaron a confusión.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo reflexivo: "En lugar de pedir código directamente, primero analiza el problema: ¿Qué está causando que el botón no funcione? ¿Es un error de JavaScript, CSS o HTML?"</p>
              </div>
            </div>
          </div>
        </div>

        <div id="tecnicas-prompting" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Técnicas de Prompting Avanzadas
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Una vez que domines los principios básicos, estas técnicas te permitirán obtener resultados más precisos y eficientes:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Prompting Directo (Sin Ruedas de Entrenamiento)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                A medida que te sientas cómodo, no siempre necesitarás una estructura tan rígida. El prompting directo significa que puedes escribir instrucciones a la IA de manera más natural, similar a cómo explicarías una tarea a un colega, mientras mantienes claridad y completitud.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Construye una función para subir una foto de perfil. Debe incluir un formulario con un input de archivo de imagen y un botón de envío. Cuando se envíe, debe mostrar una vista previa de la imagen y permitir al usuario confirmar antes de guardar."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Meta Prompting (Mejora de Prompts Asistida por IA)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Esta es una técnica avanzada donde literalmente le pides a la IA que te ayude a mejorar tu prompt o plan. Dado que la IA de Nerd.lat puede razonar sobre el lenguaje, puedes usarla para refinar tus instrucciones.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Revisa mi último prompt e identifica cualquier ambigüedad o información faltante. ¿Cómo puedo reescribirlo para ser más conciso y preciso? No programes, solo analiza el prompt."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Few-Shot Prompting</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Proporciona ejemplos específicos de lo que quieres lograr. Esto ayuda a la IA a entender mejor el patrón y estilo que buscas.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo Few-Shot:</p>
                <p>Corrige la gramática en estas oraciones:</p>
                <p>Input: "la pagina no carga bien" → Output: "La página no carga bien."</p>
                <p>Input: "boton no funciona" → Output: "El botón no funciona."</p>
                <p>Ahora Input: "usuario no puede registrarse" → Output:</p>
              </div>
            </div>
          </div>
        </div>

        <div id="consejos-especificos" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Consejos Específicos para Nerd.lat
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Estrategias específicas para maximizar el potencial de Nerd.lat y evitar problemas comunes:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Comienza con una Base de Conocimientos Sólida</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Antes de escribir un prompt, asegúrate de tener claro el contexto de tu proyecto. Incluye detalles sobre el propósito, tecnologías que usas, y cualquier restricción específica. Esto ayuda a la IA a generar código más relevante y coherente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Integraciones y Casos Extremos</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Nerd.lat se integra con muchos servicios (Stripe, Supabase, etc.). Cuando hagas prompting para estos, trata los detalles de integración como parte de tu contexto y restricciones.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Conecta el formulario a Stripe (modo de prueba) para pagos. En caso de éxito, redirige a /gracias. En caso de error, muestra un mensaje amigable al usuario."</p>
              </div>
            </div>
          </div>
        </div>

        <div id="trucos-practicos" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            🛠️ Trucos Prácticos
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Técnicas avanzadas descubiertas por power users. Estos trucos pueden 2x tu velocidad de desarrollo y resolver problemas que parecían imposibles:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">1. Sistema de especialización de modelos</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Cada modelo tiene fortalezas específicas. Esta distribución optimiza resultados y reduce frustraciones:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>• <strong>Jarvis:</strong> Arquitectura, features complejas, refactorización mayor</p>
                <p>• <strong>Nerd:</strong> Implementación, ajustes, features incrementales</p>
                <p>• <strong>Flash:</strong> Debugging, optimización, resolución de errores</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">2. Flujo Nerd → Jarvis para máxima calidad</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Nerd establece una base sólida y consistente. Jarvis luego puede elevar esa base con arquitectura sofisticada y patrones avanzados, resultando en código más elegante y mantenible.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">3. Estrategia específica para Game Development</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Los juegos requieren arquitectura compleja desde el inicio. Jarvis diseña el motor y sistemas centrales, mientras Flash optimiza performance y elimina bugs críticos que pueden arruinar la experiencia del jugador.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">4. Máxima eficiencia en planes básicos</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Con límites de uso, cada prompt cuenta. Formula instrucciones precisas con un objetivo claro. Evita requests ambiguos que requieran múltiples iteraciones para clarificar.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">5. Fix rápido para pantalla negra</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Este es un truco de la comunidad que funciona sorprendentemente bien. F5 múltiples veces (7 es el número mágico) fuerza un refresh completo del cache y resuelve la mayoría de errores de renderizado.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">6. Manejo de errores de publicación</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Si encuentras problemas al publicar:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>• Intenta publicar varias veces</p>
                <p>• Regresa a una versión anterior si no funciona</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">7. Construye tu biblioteca personal de snippets</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Mantén un repositorio de componentes, funciones y configuraciones que funcionan bien. Reutilizar código probado acelera desarrollo y reduce bugs inesperados.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">8. Desarrolla boilerplates personalizados</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Crea proyectos plantilla con tu stack tecnológico preferido, configuraciones optimizadas y estructura probada. Un buen boilerplate puede ahorrarte 2-3 horas en cada nuevo proyecto.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">9. Monetiza tu trabajo</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Cada proyecto es una semilla de oportunidad. Estrategias de monetización comprobadas:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>• <strong>Venta directa:</strong> Landing pages, e-commerce, dashboards personalizados</p>
                <p>• <strong>Portfolio activo:</strong> Demos funcionales atraen más clientes que screenshots</p>
                <p>• <strong>Licenciamiento:</strong> Tools y utilidades pueden generar ingresos recurrentes</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">10. Sácale provecho total a Nerd.lat</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Nerd.lat trasciende la programación. Casos de uso menos conocidos pero poderosos:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>• <strong>Content generation:</strong> Blogs, newsletters, documentación técnica</p>
                <p>• <strong>Business tools:</strong> Calculadoras, generadores de presupuestos</p>
                <p>• <strong>Automation:</strong> Dashboards de reportes, integraciones API</p>
                <p>• <strong>Flash como comodín:</strong> Cuando otros modelos no funcionan, Flash often puede encontrar la solución</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">11. Estrategia de backup proactiva</h3>
              <p className="text-sm text-black dark:text-gray-300">
                No dependas solo del versionado automático. Exporta proyectos antes de cambios mayores, experimentos arriesgados, o integraciones complejas. Un backup manual puede salvarte días de trabajo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">12. Sistema de nomenclatura inteligente</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Usa convenciones consistentes: [Cliente]-[Proyecto]-[Versión] o [Fecha]-[Feature]. Nombres claros te ahorran tiempo mental y evitan confusiones cuando manejas múltiples proyectos simultáneamente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">13. Testing multi-navegador como debugging</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Los problemas de renderizado a menudo son específicos del navegador. Chrome, Firefox, Safari y Edge pueden comportarse diferente. Probar en múltiples navegadores puede revelar si es un bug real o incompatibilidad.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">14. Filosofía de testing iterativo</h3>
              <p className="text-sm text-black dark:text-gray-300">
                El "testing al final" es un anti-patrón costoso. Implementa un micro-ciclo: codifica 10-15 minutos → prueba inmediatamente → ajusta. Detectar problemas temprano es exponencialmente más rápido que debugging complejo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">15. Desbloquea features avanzadas</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Nerd.lat constantemente agrega capacidades. Explora el menu de herramientas, prueba integraciones experimentales, y mantente atento a updates. Los power users suelen descubrir funcionalidades antes de que sean ampliamente conocidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
