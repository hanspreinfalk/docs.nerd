import Image from 'next/image'
import { useState } from 'react'
import { TableOfContents } from '@/components/table-of-contents'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-4 border-t border-gray-100 dark:border-gray-700">
          <div className="text-base text-black dark:text-white lg:text-lg space-y-3 pt-4">
            {answer}
          </div>
        </div>
      )}
    </div>
  )
}

export function GettingStartedPage() {
  const [openItems, setOpenItems] = useState({})
  const [openItems2, setOpenItems2] = useState({})

  // Define sections for table of contents
  const sections = [
    { id: 'introduccion', title: 'Empezando en Nerd.lat' },
    { id: 'vision-general', title: 'Una visión general de lo que es Nerd' },
    { id: 'vistazo-nerd', title: 'Hechemos un vistazo a Nerd' },
    { id: 'empieza-proyecto', title: 'Empieza tu Proyecto' },
    { id: 'edita-proyecto', title: 'Edita tu Proyecto' },
    { id: 'publica-proyecto', title: 'Publica tu Proyecto' }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const toggleItem2 = (index) => {
    setOpenItems2(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [

    {
      question: "Como Crear tu Primer Proyecto",
      answer: (
        <div>
          {/* Video de YouTube */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
            <iframe
              src="https://www.youtube.com/embed/dRu1lFGniDM"
              title="Cómo Crear tu Primer Proyecto en Nerd.lat"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Para comenzar, dirígete a Nerd.lat y crea una cuenta.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una vez registrado, podrás crear tu primer proyecto.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 3
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Simplemente ingresa una descripción inicial para comenzar, ¡y Nerd hará el resto! Este es el punto de partida para cualquier proyecto en Nerd, donde puedes dar vida a tus ideas al instante.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Como Editar tu Proyecto",
      answer: (
        <div>
          {/* Video de YouTube */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
            <iframe
              src="https://www.youtube.com/embed/_nBdQYaaNT0"
              title="Cómo Editar tu Proyecto en Nerd.lat"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una vez creado tu proyecto, haz click en la caja de texto de abajo a la izquierda.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Detalla los cambios que quieres hacer en tu proyecto. Se lo más detallado posible para mejores resultados.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 3
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Envía tu mensaje y Nerd se encargará de hacer los cambios.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Como Publicar tu Proyecto",
      answer: (
        <div>
          {/* Video de YouTube */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
            <iframe
              src="https://www.youtube.com/embed/XJxFgRm2Jtk"
              title="Cómo Publicar tu Proyecto en Nerd.lat"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una vez estas satisfecho con tu proyecto, haz click en el boton de "Publicar" en la parte superior derecha.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da click en el boton de "Publicar" y espera un momento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Paso 3
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Una vez terminado el proceso Nerd te dará la liga de tu proyecto.
                </p>
                <div className="mt-4">
                  <Image src="/marketing/liga.png" alt="Liga del proyecto" width={600} height={400} className="rounded-lg" />
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">
                    Ejemplo de la liga que recibirás al finalizar tu proyecto
                  </p>
                  
                  <h3 className="font-semibold text-black dark:text-white mb-1 mt-3">
                  ¡Listo!
                </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Da click en la liga para abrir tu proyecto publicado.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    {
      question: "Como Ver tus Proyectos",
      answer: (
        <div>
          {/* Video de YouTube */}
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
            <iframe
              src="https://www.youtube.com/embed/qCEj00Z9gmw"
              title="Cómo Ver tus Proyectos en Nerd.lat"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Opción 1
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Dirgitete a la página principal de Nerd.lat y haz desliza hacia abajo, ahi podrás ver tus proyectos recientes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#5ED63E] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-white mb-1">
                  Opción 2
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Haz click en el menu de arriba a la derecha y selecciona "Mis Proyectos".
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
  ]

  const faqData2 = [
    {
      question: "Prompt",
      answer: (
        <div className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            El sistema basado en prompts de Nerd hace que la creación de aplicaciones sea simple. Solo describe lo que quieres construir en el cuadro de prompt. Cuanto más específico seas, mejores serán los resultados.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Comienza con prompts claros y detallados. Puedes refinar y ajustar tu proyecto mientras avanzas.
          </p>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Ejemplo:</p>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                "Crea un dashboard con inicio de sesión de usuario, ventas mensuales en un gráfico de líneas y demografía de clientes en un gráfico circular."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Como Editar tu Proyecto",
    },
    {
      question: "Como Publicar tu Proyecto",
    },
  ]

  return (
    <>
      <TableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[80vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Empezando en Nerd.lat
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg text-left">
            El limite de Nerd.lat es tu imaginación
          </p>
        </div>
        <div id="vision-general" className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mt-10 text-black dark:text-white">
            Una visión general de lo que es Nerd
          </h2>
          <p className="text-base text-black dark:text-white lg:text-lg text-left">
            ¡Bienvenido a esta guía paso a paso sobre cómo crear una aplicación full-stack usando Nerd!
          </p>
        </div>
      <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <Image src="/marketing/banner.png" alt="Getting Started" width={1000} height={1000} className="rounded-lg" />
      </div>

      {/* <div className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mt-10">
          Hechemos un vistazo a Nerd
        </h2>
        <p className="text-base text-black lg:text-lg text-left">
          Nerd.lat es una plataforma impulsada por inteligencia artificial que permite a usuarios de cualquier nivel de habilidad crear sitios web completos (full-stack) a través de lenguaje natural. Simplemente describe lo que quieres, y Nerd lo construye para ti.
        </p>
      </div> */}
      
      <div id="vistazo-nerd" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6 text-black dark:text-white">
        Hechemos un vistazo a Nerd
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div id="empieza-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6 text-black dark:text-white">
          Empieza tu Proyecto
        </h2>
        <p className="text-base text-black dark:text-white lg:text-lg text-left mb-6">
          Hay muchas formas de empezar a crear tu proyecto en Nerd.lat. Aquí te mostramos algunas de las más comunes.
        </p>
        <div className="space-y-0">
          {faqData2.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems2[index]}
              onClick={() => toggleItem2(index)}
            />
          ))}
        </div>
      </div>
      <div id="edita-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6 text-black dark:text-white">
          Edita tu Proyecto
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div id="publica-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6 text-black dark:text-white">
          Publica tu Proyecto
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      
    </div>
    </>
  )
}
  
  