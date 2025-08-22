import { useState, useEffect } from 'react'

function GlosarioTableOfContents({ sections }) {
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

export function GlosarioPage() {
  const sections = [
    { id: 'glosario', title: 'Glosario' },
    { id: 'conceptos-generales', title: 'Conceptos Generales' },
    { id: 'terminos-nerd', title: 'Términos de Nerd.lat' },
    { id: 'producto-desarrollo', title: 'Producto y Desarrollo' },
    { id: 'ui-ux-frontend', title: 'UI/UX y Frontend' },
    { id: 'backend-bases-datos', title: 'Backend y Bases de Datos' },
    { id: 'seguridad-autenticacion', title: 'Seguridad y Autenticación' }
  ]

  return (
    <>
      <GlosarioTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="glosario" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Glosario
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            Aprende los términos clave de desarrollo que necesitas para navegar y usar Nerd.lat efectivamente.
          </p>
        </div>

        {/* Conceptos Generales */}
        <div id="conceptos-generales" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Conceptos Generales
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">IA (Inteligencia Artificial)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">La simulación de procesos de inteligencia humana por máquinas, especialmente sistemas informáticos, que permite tareas como aprendizaje, razonamiento y resolución de problemas.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Prompt</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una pieza de texto o entrada que guía a los modelos de IA en la generación de resultados o la realización de ciertas tareas. Es parte de la funcionalidad central de Nerd.lat y es con prompts que creas, modificas un componente específico o elemento en tu aplicación.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Términos Específicos de Nerd.lat */}
        <div id="terminos-nerd" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Términos Específicos de Nerd.lat
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="space-y-4">
{/* <              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Modo Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Nerd.lat va más allá de solo generar código; se convierte en un asistente interactivo que te guía a través de cada fase del desarrollo. Ayuda a los fundadores a pensar críticamente, planificar efectivamente, depurar inteligentemente y lanzar con confianza.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Modo Edición</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">La acción de hacer cambios o modificaciones al contenido o código.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Historial</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">El sistema de seguimiento y gestión de cambios en tu app y código a lo largo del tiempo.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Conocimiento</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Captura detalles esenciales del proyecto en un documento vivo que evoluciona con tu app.</p>
              </div>> */}
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Vista Previa</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Permite a los usuarios ver o experimentar contenido en vivo o funcionalidades de características antes de que sean finalizadas o publicadas, de manera interactiva.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black dark:text-white">Restaurar Versión</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Restaura una versión específica de tu proyecto borrando tu versión actual.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Producto y Desarrollo */}
        <div id="producto-desarrollo" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Conceptos de Producto y Desarrollo
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-semibold text-black dark:text-white mb-3">Gestión de Producto y Estrategia</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">MVP (Producto Mínimo Viable)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una versión de un producto con las características mínimas necesarias para satisfacer a los primeros usuarios y validar una idea antes del desarrollo a gran escala.</p>
              </div>
              
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Historia de Usuario</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una descripción corta y simple de una característica o requisito escrita desde la perspectiva de un usuario final.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Persona</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una representación ficticia de un usuario objetivo, basada en investigación, para guiar las decisiones de diseño y desarrollo.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-semibold text-black dark:text-white mb-3">Conceptos de Ingeniería</h3>
            <div className="space-y-4">
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">API (Interfaz de Programación de Aplicaciones)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una forma para que diferentes servicios se comuniquen. Los tipos más comunes son las APIs REST y las APIs GraphQL.</p>
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX y Frontend */}
        <div id="ui-ux-frontend" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            UI/UX y Desarrollo Frontend
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-semibold text-black dark:text-white mb-3">Desarrollo Frontend</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">La parte de una aplicación de software con la que los usuarios interactúan directamente, abarcando los elementos de interfaz de usuario y experiencia de usuario.</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">React</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario, particularmente aplicaciones de una sola página.</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Tailwind CSS</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Framework CSS de código abierto basado en utilidades que proporciona un conjunto integral de clases predefinidas.</p>
              </div>
              
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Diseño Responsivo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Un enfoque de diseño web que asegura que el contenido se adapte sin problemas a varios tamaños de dispositivos.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-semibold text-black dark:text-white mb-3">Elementos de Interfaz</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Botón</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Un elemento clickeable que inicia una acción o evento, como enviar un formulario o abrir un diálogo.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Modal (Diálogo)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una ventana que aparece frente al contenido principal para captar la atención del usuario.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Toast</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una notificación breve y no intrusiva que aparece temporalmente para informar a los usuarios del resultado de una acción.</p>
              </div>
              
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Formulario</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una colección estructurada de campos de entrada que permite a los usuarios enviar datos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend y Bases de Datos */}
        <div id="backend-bases-datos" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Desarrollo Backend y Bases de Datos
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <h3 className="font-semibold text-black dark:text-white mb-3">Fundamentos Backend</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">La infraestructura del lado del servidor de una aplicación que maneja el procesamiento de datos, almacenamiento y lógica de negocio.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">Supabase</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una plataforma de backend como servicio de código abierto que proporciona una base de datos Postgres, autenticación, APIs instantáneas y capacidades en tiempo real.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">CRUD (Crear, Leer, Actualizar, Eliminar)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Las cuatro operaciones básicas realizadas en datos en una base de datos o aplicación.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">SQL (Lenguaje de Consulta Estructurada)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Un lenguaje de programación específico de dominio diseñado para gestionar y manipular bases de datos relacionales.</p>
              </div>
              
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-black dark:text-white">RLS (Seguridad a Nivel de Fila)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Una característica en bases de datos que permite controlar el acceso a filas específicas en una tabla basado en roles de usuario o atributos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Este glosario te ayudará a navegar mejor por Nerd.lat y entender los conceptos clave del desarrollo web moderno.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}