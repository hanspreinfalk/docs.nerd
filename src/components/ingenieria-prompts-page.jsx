import { useState, useEffect } from 'react'

function IngenieriaPromptsTableOfContents({ sections }) {
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

export function IngenieriaPromptsPage() {
  const sections = [
    { id: 'introduccion', title: 'Introducción a la Ingeniería de Prompts' },
    { id: 'que-es-prompting', title: '¿Qué es el Prompting?' },
    { id: 'por-que-importa', title: '¿Por qué Importa el Prompting?' },
    { id: 'como-piensa-ai', title: 'Cómo Piensa la IA' },
    { id: 'principios-claros', title: 'Principios C.L.A.R.O.' },
    { id: 'niveles-prompting', title: 'Los Cuatro Niveles de Prompting' },
    { id: 'tecnicas-avanzadas', title: 'Técnicas Avanzadas' },
    { id: 'consejos-lovable', title: 'Consejos Específicos para Nerd.lat' },
    { id: 'casos-uso', title: 'Casos de Uso y Aplicaciones' }
  ]

  return (
    <>
      <IngenieriaPromptsTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Prompting 1.1
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left max-w-3xl">
            Estructura de prompts, niveles de prompting, meta/reverso meta prompting, y tácticas fundamentales con ejemplos.
          </p>
        </div>

        <div className="max-w-2xl mt-6 px-4 lg:px-4 md:px-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">¡Atención!</h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Para ayudarte a aprovechar al máximo Nerd.lat, hemos compilado una lista de estrategias y enfoques de prompting. Algunas de estas fueron recopiladas de la experiencia de nuestro equipo, y otras fueron compartidas con nosotros por miembros de nuestra comunidad. Dado que Nerd.lat se basa en modelos de lenguaje grandes (LLMs), las estrategias de prompting efectivas pueden mejorar significativamente su eficiencia y precisión.
            </p>
          </div>
        </div>
        

        

        <div id="que-es-prompting" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            ¿Qué es el Prompting?
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            El prompting se refiere a las instrucciones textuales que le das a un sistema de IA para realizar una tarea. En Nerd.lat (un constructor de aplicaciones impulsado por IA), los prompts son cómo "le dices" a la IA qué hacer, desde crear una interfaz de usuario hasta escribir lógica de backend. El prompting efectivo es crítico porque Nerd.lat usa modelos de lenguaje grandes (LLMs), por lo que prompts claros y bien elaborados pueden mejorar enormemente la eficiencia y precisión de la IA al construir tu aplicación. En resumen, mejores prompts llevan a mejores resultados.
          </p>
        </div>

        <div id="por-que-importa" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            ¿Por qué Importa el Prompting?
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            La mayoría de las personas piensan que el prompting es solo escribir una solicitud en una IA y esperar lo mejor, pero no es así. La diferencia entre una respuesta mediocre de IA y tener a la IA construyendo flujos de trabajo completos para ti se reduce a cómo haces el prompting. Ya seas desarrollador o no técnico, dominar la ingeniería de prompts en Nerd.lat puede ayudarte a:
          </p>
          <ul className="list-disc list-inside text-base text-black dark:text-white lg:text-lg mb-4 space-y-2">
            <li>Automatizar tareas repetitivas instruyendo a la IA exactamente qué hacer.</li>
            <li>Depurar más rápido con insights y soluciones generadas por IA.</li>
            <li>Construir y optimizar flujos de trabajo sin esfuerzo, dejando que la IA maneje el trabajo pesado una vez que esté correctamente guiada.</li>
          </ul>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            ¿Y la mejor parte? No necesitas ser un programador experto. Con las técnicas de prompting correctas, puedes desbloquear el potencial completo de la IA en Nerd.lat sin desperdiciar tiempo en prueba y error. Esta guía te llevará desde conceptos fundamentales hasta estrategias avanzadas de prompts para que puedas comunicarte efectivamente con la IA y construir más rápido.
          </p>
        </div>

        <div id="como-piensa-ai" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Entendiendo Cómo Piensa la IA
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            A diferencia de la programación tradicional, trabajar con IA se trata de comunicar tus intenciones claramente. Los Modelos de Lenguaje Grandes (LLMs) como los que impulsan Nerd.lat no "entienden" en el sentido humano, sino que predicen salidas basándose en patrones en sus datos de entrenamiento. Esto tiene implicaciones importantes para cómo deberías hacer prompting:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Para resultados consistentes</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Es útil estructurar tu prompt en secciones claras. Un formato recomendado (como "ruedas de entrenamiento" para prompting) usa secciones etiquetadas para Contexto, Tarea, Directrices y Restricciones:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>Proporciona Contexto y Detalles:</strong> Los modelos de IA no tienen sentido común ni contexto implícito más allá de lo que les das. Siempre proporciona antecedentes o requisitos relevantes.</p>
                <p><strong>Sé Explícito con Instrucciones y Restricciones:</strong> Nunca asumas que la IA inferirá tus objetivos. Si tienes restricciones o preferencias, decláralas.</p>
                <p><strong>La Estructura Importa (Orden y Énfasis):</strong> Gracias a la arquitectura transformer, los modelos prestan atención especial al inicio y final de tu prompt.</p>
                <p><strong>Conoce los Límites del Modelo:</strong> El conocimiento de la IA viene de datos de entrenamiento. No puede saber sobre eventos recientes o información propietaria que no le hayas dado.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="principios-claros" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Principios de Prompting: El Marco C.L.A.R.O.
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Los grandes prompts siguen un conjunto de principios simples. Una forma útil de recordarlos es C.L.A.R.O.: Conciso, Lógico, Explícito, Adaptativo, Reflexivo. Úsalos como una lista de verificación al elaborar tus instrucciones:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Conciso</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Sé claro y ve al grano. El lenguaje vago o innecesario puede confundir al modelo. Usa lenguaje directo.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>MALO:</strong> "¿Podrías escribir algo sobre un tema de ciencia?"</p>
                <p><strong>BUENO:</strong> "Escribe un resumen de 200 palabras sobre los efectos del cambio climático en ciudades costeras."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Lógico</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Organiza tu prompt de manera paso a paso o bien estructurada. Divide solicitudes complejas en pasos ordenados o puntos para que la IA pueda seguir fácilmente.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>MALO:</strong> "Construye una función de registro de usuario y también muestra algunas estadísticas de uso."</p>
                <p><strong>BUENO:</strong> "Primero, implementa un formulario de registro con email y contraseña usando Supabase. Luego, después del registro exitoso, muestra un dashboard con estadísticas de usuarios."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Explícito</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Declara exactamente lo que quieres y no quieres. Si algo es importante, dilo claramente. Proporciona ejemplos de formato o contenido si es posible.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>MALO:</strong> "Háblame de perros." (Demasiado abierto)</p>
                <p><strong>BUENO:</strong> "Lista 5 hechos únicos sobre Golden Retrievers, en puntos."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Adaptativo</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                No te conformes con la primera respuesta si no es perfecta. Los prompts se pueden refinar iterativamente. Una gran ventaja de la IA de Nerd.lat es que puedes tener un diálogo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Reflexivo</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Tómate tiempo para revisar qué funcionó y qué no después de cada interacción con la IA. Esto es más sobre ti que sobre el modelo. Como ingeniero de prompts, nota qué frases de prompt dieron un buen resultado y cuáles llevaron a confusión.
              </p>
            </div>
          </div>
        </div>

        <div id="niveles-prompting" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Los Cuatro Niveles de Prompting
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            El prompting efectivo es una habilidad que crece con la práctica. Aquí describimos cuatro niveles de dominio del prompting, desde "ruedas de entrenamiento" estructuradas hasta técnicas meta avanzadas. Cada nivel tiene su caso de uso, combínalos según sea necesario:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">1. Prompting Estructurado "Ruedas de Entrenamiento" (Formato Explícito)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Cuando estás comenzando o abordando una tarea muy compleja, es útil usar una estructura etiquetada en tu prompt. Esto actúa como ruedas de entrenamiento para asegurar que proporciones toda la información necesaria.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>Contexto:</strong> Antecedentes o configuración de rol para la IA. (Ej: "Eres un asistente de codificación IA de clase mundial de Nerd.lat.")</p>
                <p><strong>Tarea:</strong> El objetivo específico que quieres lograr. (Ej: "Construye una aplicación full-stack de lista de tareas con login de usuario y sincronización en tiempo real.")</p>
                <p><strong>Directrices:</strong> Enfoque o estilo preferido. (Ej: "Usa React para frontend, Tailwind para estilos, y Supabase para auth y base de datos.")</p>
                <p><strong>Restricciones:</strong> Límites duros o cosas que no debe hacer. (Ej: "No uses APIs pagas. La app debe funcionar en móvil y desktop.")</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">2. Prompting Conversacional (Sin Ruedas de Entrenamiento)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                A medida que te sientas cómodo, no siempre necesitarás una estructura tan rígida. El prompting conversacional significa que puedes escribir a la IA de manera más natural, similar a cómo explicarías una tarea a un colega, mientras mantienes claridad y completitud.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Construyamos una función para subir una foto de perfil. Debe incluir un formulario con un input de archivo de imagen y un botón de envío. Cuando se envíe, debe almacenar la imagen en Supabase storage y actualizar el perfil del usuario..."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">3. Meta Prompting (Mejora de Prompts Asistida por IA)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Esta es una técnica avanzada donde literalmente le pides a la IA que te ayude a mejorar tu prompt o plan. Dado que la IA de Nerd.lat puede razonar sobre el lenguaje, puedes usarla para refinar tus instrucciones.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Revisa mi último prompt e identifica cualquier ambigüedad o información faltante. ¿Cómo puedo reescribirlo para ser más conciso y preciso?"</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">4. Reverse Meta Prompting (IA como Herramienta de Documentación)</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                El reverse meta prompting significa usar la IA para resumir o documentar lo que sucedió después de una tarea, para que puedas aprender o reutilizarlo más tarde. Piensa en ello como pedirle a la IA que reflexione sobre el proceso.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Resume los errores que encontramos configurando autenticación JWT y explica cómo los resolvimos. Luego, redacta un prompt que podría usar en el futuro para evitar esos errores."</p>
              </div>
            </div>
          </div>
        </div>

        <div id="tecnicas-avanzadas" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Técnicas Avanzadas de Prompting
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Una vez que tengas los conceptos básicos, es momento de aprovechar estrategias más avanzadas para obtener el máximo de la IA de Nerd.lat. Estas técnicas ayudan a manejar escenarios complejos, reducir errores y adaptar la salida de la IA a tus necesidades.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Zero-Shot vs Few-Shot Prompting</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                <strong>Zero-Shot Prompting</strong> significa que le pides al modelo que realice una tarea sin ejemplos. Confías en el entrenamiento general del modelo para saber qué hacer.
              </p>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                <strong>Few-Shot Prompting</strong> significa que proporcionas un par de ejemplos o demostraciones en tu prompt para mostrarle a la IA exactamente el formato o estilo que quieres.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo Few-Shot:</p>
                <p>Corrige la gramática en estas oraciones:</p>
                <p>Input: "el código no funcionando bien" → Output: "El código no está funcionando bien."</p>
                <p>Input: "API dar error en login" → Output: "La API da un error durante el login."</p>
                <p>Ahora Input: "usuario no encontrado en base de datos" → Output:</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Manejando Alucinaciones y Asegurando Precisión</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Las "alucinaciones" de IA son momentos cuando el modelo confiadamente inventa información o código que no es correcto. En una plataforma de codificación como Nerd.lat, las alucinaciones podrían significar que la IA usa una función inexistente o fabrica detalles.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>Proporciona Datos de Base:</strong> Cuanto más contexto confiable des, menos tiene que adivinar la IA.</p>
                <p><strong>Referencias en el Prompt:</strong> Cuando hagas preguntas factuales, incluye fragmentos de documentación relevante.</p>
                <p><strong>Pide Razonamiento Paso a Paso:</strong> A veces sospechas que la IA podría estar improvisando. En esos casos, pídele que muestre su razonamiento.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="consejos-lovable" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Consejos Específicos para Nerd.lat
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Comienza con una Base de Conocimientos Sólida</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Antes de escribir un prompt, configura la Base de Conocimientos de tu proyecto (en la configuración del proyecto de Nerd.lat). Incluye los Requisitos del Proyecto (PRD), flujos de usuario, detalles del stack tecnológico, directrices de diseño de UI, y cualquier detalle específico del backend.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>Ejemplo: "Antes de escribir cualquier código, lee la Base de Conocimientos del proyecto y confirma que entiendes el propósito y restricciones de la aplicación."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Sé Específico, Evita la Vaguedad</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Los prompts vagos llevan a resultados vagos. Siempre aclara qué quieres y cómo.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>NO HAGAS:</strong> "Haz esta aplicación mejor."</p>
                <p><strong>HACER:</strong> "Refactoriza la aplicación para limpiar componentes no utilizados y mejorar el rendimiento, sin cambiar la UI o funcionalidad."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Prompting Incremental</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Resiste la tentación de pedir una aplicación compleja completa en un prompt. Divide tu proceso de desarrollo en pasos lógicos y pide uno a la vez.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>NO HAGAS:</strong> "Construye mi aplicación de e-commerce completa con autenticación, listados de productos y checkout."</p>
                <p><strong>HACER:</strong></p>
                <p>1. "Configura un backend CRM conectado a Supabase."</p>
                <p>2. "Agrega un flujo de autenticación seguro con roles de usuario."</p>
                <p>3. "Integra Google Sheets para exportar registros."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Incluye Restricciones y Requisitos</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                No dudes en especificar restricciones. Si algo debe o no debe hacerse, dilo claramente.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p>"Crea una aplicación simple de lista de tareas con un máximo de 3 tareas visibles a la vez."</p>
                <p>"Optimiza este código, pero asegúrate de que la UI y funcionalidad principal permanezcan sin cambios."</p>
                <p>"Usa como máximo 3 llamadas API para esto, y asegúrate de que no se requiera ninguna librería externa."</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-3">Usa los Modos de Nerd.lat Intencionalmente</h3>
              <p className="text-sm text-black dark:text-gray-300 mb-3">
                Utiliza el Modo Chat para planificar y el Modo Predeterminado para construir. Por ejemplo, cuando comiences una nueva función, podrías entrar al Modo Chat y hacer lluvia de ideas sobre la descomposición de componentes.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3 text-sm font-mono text-black dark:text-gray-300">
                <p><strong>Modo Chat:</strong> "Quiero agregar una sección de blog a mi aplicación. Discutamos cómo estructurar los datos y páginas."</p>
                <p><strong>Modo Predeterminado:</strong> "Crea una página BlogPost y una tabla o esquema de Supabase para posts de blog basado en el plan anterior."</p>
              </div>
            </div>
          </div>
        </div>

        <div id="casos-uso" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Casos de Uso y Aplicaciones
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg mb-4">
            Los principios de prompting anteriores se aplican no solo en el chat de Nerd.lat, sino en cualquier lugar donde interactúes con herramientas de IA o automatización.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">En el Constructor de Nerd.lat</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Principalmente usarás estos prompts en la interfaz de chat de Nerd.lat para construir y refinar tu aplicación. Comienza con un prompt de proyecto amplio, luego itera función por función. Usa el Modo Solo-Chat cuando necesites discutir o depurar sin cambiar código.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-black dark:text-white mb-2">Integraciones y Casos Extremos</h3>
              <p className="text-sm text-black dark:text-gray-300">
                Nerd.lat se integra con muchos servicios (Stripe, GitHub, Supabase, etc.). Cuando hagas prompting para estos, trata los detalles de integración como parte de tu Contexto/Restricciones. Por ejemplo: "Conecta el formulario a Stripe (modo de prueba) para pagos. En caso de éxito, redirige a /gracias."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
