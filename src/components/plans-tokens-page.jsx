import { useState, useEffect } from 'react'

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
    { id: 'visualizacion-creditos', title: 'Visualización de Créditos' },
    { id: 'uso-creditos', title: 'Uso de Créditos' },
    { id: 'acumulacion-creditos', title: 'Acumulación de Créditos' }
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
              Cuando pagas por una suscripción, obtienes acceso a más funciones y más créditos. 
              Necesitas créditos para enviar mensajes en Nerd.lat.
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
                  <li>5 créditos diarios hasta un máximo de 30 por mes</li>
                  <li>Colaboración en workspace con miembros ilimitados</li>
                </ul>
              </div>

              {/* Plan Pro */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">Plan Pro</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                  <li>5 créditos diarios hasta un máximo de 150 por mes</li>
                  <li>Créditos mensuales según tu plan</li>
                  <li>Colaboración en workspace con miembros ilimitados</li>
                  <li>Roles y permisos de workspace</li>
                  <li>Proyectos privados</li>
                  <li>Capacidad de conectar dominios personalizados</li>
                  <li>Capacidad de remover la insignia "Edit with Nerd.lat"</li>
                  <li>Acceso al modo Code para editar código directamente</li>
                </ul>
              </div>

              {/* Plan Business */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-black dark:text-white">Plan Business</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                  <li>Todo lo del plan Pro, más:</li>
                  <li>SSO (Single Sign-On)</li>
                  <li>Proyectos personales dentro de workspaces</li>
                  <li>Opción de excluirse del entrenamiento de datos</li>
                  <li>Crear plantillas de diseño reutilizables</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Planes de pago disponibles */}
          <div id="planes-disponibles" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Planes de Pago Disponibles</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Cada plan de pago incluye un número determinado de créditos mensuales asignados. 
              Ofrecemos planes Pro y Business, cada uno con diferentes opciones de precios y beneficios únicos 
              para usuarios individuales o equipos. Puedes elegir pagar estos planes mensualmente o anualmente. 
              La facturación anual ofrece beneficios adicionales como una tarifa mensual con descuento y límites 
              más altos de acumulación para créditos no utilizados.
            </p>

            {/* Plan Pro Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">Plan Pro</h3>
              <p className="text-base text-black dark:text-white lg:text-lg">
                El plan Pro incluye todas las características del plan gratuito, más funcionalidades avanzadas para usuarios profesionales y equipos.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                <li><strong>100 créditos mensuales:</strong> $25/mes o $250/año ($21/mes)</li>
                <li><strong>200 créditos mensuales:</strong> $50/mes o $500/año ($42/mes)</li>
                <li><strong>400 créditos mensuales:</strong> $100/mes o $1,000/año ($84/mes)</li>
                <li><strong>800 créditos mensuales:</strong> $200/mes o $2,000/año ($167/mes)</li>
                <li><strong>1,200 créditos mensuales:</strong> $294/mes o $2,940/año ($245/mes)</li>
                <li><strong>2,000 créditos mensuales:</strong> $480/mes o $4,800/año ($400/mes)</li>
                <li><strong>3,000 créditos mensuales:</strong> $705/mes o $7,050/año ($588/mes)</li>
                <li><strong>4,000 créditos mensuales:</strong> $920/mes o $9,200/año ($767/mes)</li>
                <li><strong>5,000 créditos mensuales:</strong> $1,125/mes o $11,250/año ($938/mes)</li>
                <li><strong>7,500 créditos mensuales:</strong> $1,688/mes o $16,880/año ($1,407/mes)</li>
                <li><strong>10,000 créditos mensuales:</strong> $2,250/mes o $22,500/año ($1,875/mes)</li>
              </ul>
            </div>

            {/* Plan Business Pricing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600">Plan Business</h3>
              <p className="text-base text-black dark:text-white lg:text-lg">
                El plan Business incluye todo lo del plan Pro, más características empresariales avanzadas para equipos y organizaciones.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
                <li><strong>100 créditos mensuales:</strong> $50/mes o $500/año ($42/mes)</li>
                <li><strong>200 créditos mensuales:</strong> $100/mes o $1,000/año ($84/mes)</li>
                <li><strong>400 créditos mensuales:</strong> $200/mes o $2,000/año ($167/mes)</li>
                <li><strong>800 créditos mensuales:</strong> $400/mes o $4,000/año ($334/mes)</li>
                <li><strong>1,200 créditos mensuales:</strong> $588/mes o $5,880/año ($490/mes)</li>
                <li><strong>2,000 créditos mensuales:</strong> $960/mes o $9,600/año ($800/mes)</li>
                <li><strong>3,000 créditos mensuales:</strong> $1,410/mes o $14,100/año ($1,175/mes)</li>
                <li><strong>4,000 créditos mensuales:</strong> $1,840/mes o $18,400/año ($1,534/mes)</li>
                <li><strong>5,000 créditos mensuales:</strong> $2,250/mes o $22,500/año ($1,875/mes)</li>
                <li><strong>7,500 créditos mensuales:</strong> $3,300/mes o $33,000/año ($2,750/mes)</li>
                <li><strong>10,000 créditos mensuales:</strong> $4,300/mes o $43,000/año ($3,584/mes)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Nota importante:</strong> Cuando actualizas tu plan, por ejemplo, de un plan de 100 créditos 
                a un plan de 200 créditos, no obtienes 200 créditos nuevos. En su lugar, tus créditos totales 
                para el mes se actualizan a 200. Entonces, si ya tenías 100 créditos mensuales, actualizar te 
                da 100 más, no 200 más.
              </p>
            </div>
          </div>

          {/* Visualización de créditos */}
          <div id="visualizacion-creditos" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Visualización de Créditos</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Para ver cuántos créditos tienes o has usado, simplemente presiona el nombre de tu workspace 
              en el dashboard principal o el nombre del proyecto cuando estés dentro del editor de proyectos. 
              Verás cuántos créditos te quedan en este período de facturación, así como la barra de créditos. 
              La barra de créditos proporciona una representación visual de cuántos créditos le quedan a un 
              usuario y cuántos se han usado.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
              <li><strong>Parte gris:</strong> Muestra la cantidad de créditos ya utilizados en este período de facturación.</li>
              <li><strong>Partes azules:</strong> Muestran diferentes tipos de créditos restantes. Al pasar el cursor sobre cada sección coloreada se mostrará un tooltip indicando el tipo de crédito y el número exacto de créditos disponibles para ese tipo.</li>
            </ul>
          </div>

          {/* Uso de créditos */}
          <div id="uso-creditos" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Uso de Créditos</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Nerd.lat tiene un sistema de créditos basado en el uso, donde enviar mensajes deduce créditos. 
              El costo de un mensaje depende de su complejidad para asegurar que solo pagues por lo que realmente usas.
            </p>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Muchos mensajes cuestan menos de 1 crédito, mientras que otros más complejos pueden costar más. 
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
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left text-black dark:text-white">Créditos usados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Haz el botón gris</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Cambia los estilos del botón</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">0.50</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Remueve el footer</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Remueve el componente footer</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">0.90</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Agrega autenticación</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Agrega lógica de login y autenticación</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">1.20</td></tr>
                  <tr><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Construye una landing page con imágenes</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">Crea una landing page con imágenes generadas, tema y secciones</td><td className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-black dark:text-white">2.00</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Puedes ver el costo de cada mensaje en el historial de chat presionando los tres puntos debajo de un mensaje.
            </p>
          </div>

          {/* Acumulación de créditos */}
          <div id="acumulacion-creditos" className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-white">Acumulación de Créditos</h2>
            <p className="text-base text-black dark:text-white lg:text-lg">
              Los créditos no utilizados se acumulan automáticamente al final de cada ciclo de facturación 
              tanto para planes mensuales como anuales de pago, siempre que mantengas una suscripción activa, 
              sujeto a las limitaciones descritas a continuación.
            </p>

            <h3 className="text-xl font-semibold text-black dark:text-white">Límites de acumulación de créditos:</h3>
            <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
              <li><strong>Planes mensuales:</strong> Los créditos acumulados pueden acumularse hasta el límite de créditos mensuales.</li>
              <li><strong>Planes anuales:</strong> Los créditos acumulados pueden acumularse hasta 12 veces el límite de créditos mensuales (es decir, el límite anual).</li>
            </ul>

            <h3 className="text-xl font-semibold text-black dark:text-white">Vencimiento de créditos acumulados:</h3>
            <ul className="list-disc list-inside space-y-2 text-base text-black dark:text-white">
              <li>Los créditos acumulados son válidos hasta un mes después de ser agregados para planes mensuales.</li>
              <li>Los créditos acumulados son válidos hasta 12 meses después de ser agregados para planes anuales.</li>
            </ul>

            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">Cancelación:</h3>
              <p className="text-sm text-red-800 dark:text-red-200">
                Al cancelar una suscripción de pago, todos los créditos no utilizados y acumulados expirarán 
                al final del período de facturación actual y no se transferirán.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Nota:</strong> Los créditos diarios no se acumulan. Los créditos diarios no utilizados 
                no se acumularán de día a día para el nivel gratuito o para los niveles de pago.
              </p>
            </div>

          <p className="text-base text-black dark:text-white lg:text-lg">
              Para información detallada sobre las opciones de suscripción, visita nuestra página de precios.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}