import { useState, useEffect } from 'react'
import Image from 'next/image'

function PlansTableOfContents({ sections }) {
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

export function PlansTokensPage() {
  const sections = [
    { id: 'introduccion', title: 'Planes y Tokens' },
    { id: 'que-es-nerd', title: '¿Qué es Nerd.lat?' },
    { id: 'comparacion-planes', title: 'Comparación de características' },
    { id: 'planes-disponibles', title: 'Planes de Pago Disponibles' },
    { id: 'visualizacion-tokens', title: 'Visualización de Tokens' },
    { id: 'uso-tokens', title: 'Uso de Tokens' },
    { id: 'acumulacion-tokens', title: 'Acumulación de Tokens' }
  ]

  return (
    <>
      <PlansTableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[80vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
            Planes y Tokens
          </h1>
          <p className="text-base text-black dark:text-white lg:text-lg">
            Entendiendo los planes y tokens en Nerd.lat
          </p>
        </div>
        
        <div className="w-full max-w-3xl mt-6 px-4 lg:px-6 space-y-8">
          {/* Introducción */}
          <div id="que-es-nerd" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">¿Qué es Nerd.lat?</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Nerd.lat es un servicio basado en suscripción con un plan gratuito y varios planes de pago. 
              Cuando pagas por una suscripción, obtienes acceso a más funciones y más tokens lo que te permite hacer mejores proyectos. 
              Necesitas tokens para enviar mensajes en Nerd.lat.
            </p>
          </div>

          {/* Comparación de características */}
          <div id="comparacion-planes" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Comparación de características: Plan gratuito vs. Planes de pago</h2>
            
            <div className="space-y-6">
              {/* Plan Gratuito */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">Plan Gratuito</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                  <li>250,000 tokens diarios</li>
                  <li>Creación con modelos de IA básicos</li>
                </ul>
              </div>

              {/* Plan Pro */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">Plan Mini</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                  <li>11,200,000 tokens</li>
                  <li>Modelos de IA básicos</li>
                  <li>Soporte en proyectos</li>
                  <li>Proyectos de escala media</li>
                  <li>Recarga de tokens 20% más barata</li>
                </ul>
              </div>

              {/* Plan Business */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">Plan Plus</h3>
                  <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                    <li>49,000,000 tokens</li>
                    <li>Modelos de IA premium</li>
                    <li>Soporte en proyectos</li>
                    <li>Proyectos de escala media</li>
                    <li>Recarga de tokens 36% más barata</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-black dark:text-white">Plan Premium</h3>
                  <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                    <li>270,000,000 tokens</li>
                    <li>Modelos de IA de ultima generación</li>
                    <li>Recarga de tokens 54% más barata</li>
                    <li>Soporte personalizado en proyectos</li>
                    <li>Elige tu Inteligencia Artificial</li>
                  </ul>
                </div>
            </div>
          </div>

          {/* Planes de pago disponibles */}
          <div id="planes-disponibles" className="space-y-6">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Planes de Pago Disponibles</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* Plan Mini */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">Mini</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-black dark:text-white">$14</span>
                      <span className="text-gray-600 dark:text-gray-400"> USD / mes</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">11,200,000 Tokens</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ideal para terminar tu primer prototipo.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-black dark:text-white">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Modelo de alta calidad
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Desarrollo sin límites
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte en proyectos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Proyectos de escala media
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Recarga de tokens 20% más barata
                    </li>
                  </ul>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Suscribir
                  </button>
                </div>
              </div>

              {/* Plan Plus */}
              <div className="bg-white dark:bg-gray-900 border-2 border-blue-500 rounded-lg p-6 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">Plus</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-black dark:text-white">$49</span>
                      <span className="text-gray-600 dark:text-gray-400"> USD / mes</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">49,000,000 Tokens</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Para profesionales que usan Nerd unas veces por semana.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-black dark:text-white">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Modelo premium
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Desarrollo sin límites
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte en proyectos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Proyectos de escala media
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Recarga de tokens 36% más barata
                    </li>
                  </ul>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Suscribir
                  </button>
                </div>
              </div>

              {/* Plan Premium */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white">Premium</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-black dark:text-white">$199</span>
                      <span className="text-gray-600 dark:text-gray-400"> USD / mes</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">270,000,000 Tokens</p>
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold px-2 py-1 rounded-full">
                      Premium
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Para profesionales que requieren uso intensivo de Nerd.
                  </p>
                  
                  <ul className="space-y-2 text-sm text-black dark:text-white">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Modelo de última generación
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Desarrollo sin límites
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Soporte en proyectos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Proyectos de escala media
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Recarga de tokens 54% más barata
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Elige tu Inteligencia Artificial
                    </li>
                  </ul>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Suscribir
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Visualización de tokens */}
          <div id="visualizacion-tokens" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Visualización de Tokens</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Para ver tus tokens dirigete a la página principal de Nerd.lat y arriba del texto "¿Qué quieres crear?" estan los tokens que tienes disponibles.
            </p>
            
            <div className="mt-6">
              <Image src="/marketing/tokens.png" alt="Visualización de tokens" width={1000} height={1000} className="rounded-lg" />
            </div>
          </div>

          {/* Uso de tokens */}
          <div id="uso-tokens" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Uso de Tokens</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Nerd.lat tiene un sistema de tokens basado en el uso, donde enviar mensajes deduce tokens. 
              El costo de un mensaje depende de su complejidad para asegurar que solo pagues por lo que realmente usas.
            </p>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Muchos mensajes cuestan menos tokens, mientras que otros más complejos pueden costar más. 
              Este enfoque permite ediciones más precisas y mayor eficiencia por mensaje, haciendo Nerd.lat más 
              asequible en general.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white">Ejemplos de prompts y su costo:</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-black dark:text-white">Prompt del Usuario</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-black dark:text-white">Trabajo realizado</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-black dark:text-white">Tokens usados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Haz el botón gris</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Cambia los estilos del botón</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">15,000</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Remueve el footer</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Remueve el componente footer</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">29,000</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Agrega una página de servicios</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Agrega lógica de login y autenticación</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">53,000</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Haz una página para un taller mecánico simple</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Crea una landing page con imágenes generadas, tema y secciones</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">36,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Puedes ver el costo de cada mensaje en el historial de chat presionando los tres puntos debajo de un mensaje.
            </p>
          </div>

          {/* Acumulación de tokens */}
          <div id="acumulacion-tokens" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Acumulación de Tokens</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Los tokens no utilizados no se acumulan automáticamente al final de cada ciclo de facturación.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}