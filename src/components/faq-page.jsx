import { useState } from "react"

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

export function FAQPage() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "¿Qué es Nerd.lat?",
      answer: (
        <div>
          <p>Nerd.lat es una plataforma de desarrollo de aplicaciones web impulsada por IA que permite crear, editar y desplegar aplicaciones completas directamente desde tu navegador.</p>
          <p className="mt-2">Utiliza tecnología de inteligencia artificial avanzada para generar código, crear interfaces y manejar la lógica backend de manera automática, facilitando el desarrollo tanto para principiantes como para desarrolladores experimentados.</p>
        </div>
      )
    },
    {
      question: "¿Cómo funcionan los créditos en Nerd.lat?",
      answer: (
        <div>
          <p>Los créditos son la moneda interna de Nerd.lat que se utiliza para procesar tus solicitudes de desarrollo. Cada acción que realices (como generar código, crear componentes, o hacer modificaciones) consume una cantidad específica de créditos.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Acciones simples: 0.5-0.9 créditos</li>
            <li>Funcionalidades medianas: 1-2 créditos</li>
            <li>Proyectos complejos: 2+ créditos</li>
          </ul>
          <p className="mt-2">Los créditos se renuevan mensualmente según tu plan de suscripción.</p>
        </div>
      )
    },
    {
      question: "¿Cuál es la diferencia entre el plan gratuito y los planes de pago?",
      answer: (
        <div>
          <p><strong>Plan Gratuito:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-3">
            <li>5 créditos diarios (máximo 30 por mes)</li>
            <li>Colaboración básica en workspace</li>
            <li>Funcionalidades limitadas</li>
          </ul>
          <p><strong>Planes de Pago (Pro y Business):</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Más créditos mensuales (100-10,000+)</li>
            <li>Proyectos privados</li>
            <li>Dominios personalizados</li>
            <li>Modo Code para edición directa</li>
            <li>Roles y permisos avanzados</li>
            <li>SSO (solo Business)</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Puedo colaborar con mi equipo en Nerd.lat?",
      answer: (
        <div>
          <p>Sí, Nerd.lat está diseñado para la colaboración en equipo. Puedes:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Invitar miembros ilimitados a tu workspace (todos los planes)</li>
            <li>Asignar roles y permisos específicos (planes de pago)</li>
            <li>Trabajar simultáneamente en proyectos</li>
            <li>Compartir y revisar código en tiempo real</li>
            <li>Gestionar proyectos personales dentro del workspace (Business)</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Cómo puedo ver mis créditos restantes?",
      answer: (
        <div>
          <p>Para visualizar tus créditos disponibles:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Presiona el nombre de tu workspace en el dashboard principal</li>
            <li>O haz clic en el nombre del proyecto cuando estés en el editor</li>
          </ol>
          <p className="mt-2">Verás una barra de créditos que muestra:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Área gris:</strong> Créditos ya utilizados</li>
            <li><strong>Áreas azules:</strong> Diferentes tipos de créditos restantes</li>
          </ul>
          <p className="mt-2">Puedes pasar el cursor sobre cada sección para ver detalles específicos.</p>
        </div>
      )
    },
    {
      question: "¿Los créditos no utilizados se acumulan?",
      answer: (
        <div>
          <p>Sí, los créditos no utilizados se acumulan automáticamente, pero con límites:</p>
          <p className="mt-2"><strong>Planes mensuales:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
            <li>Acumulación hasta el límite de créditos mensuales</li>
            <li>Validez de 1 mes después de ser agregados</li>
          </ul>
          <p><strong>Planes anuales:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
            <li>Acumulación hasta 12 veces el límite mensual</li>
            <li>Validez de 12 meses después de ser agregados</li>
          </ul>
          <p className="text-sm bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded p-2 mt-2 text-black dark:text-yellow-200">
            <strong>Importante:</strong> Los créditos diarios no se acumulan, y al cancelar la suscripción, todos los créditos acumulados expiran.
          </p>
        </div>
      )
    },
    {
      question: "¿Puedo conectar mi propio dominio?",
      answer: (
        <div>
          <p>Sí, con los planes de pago (Pro y Business) puedes conectar dominios personalizados a tus proyectos.</p>
          <p className="mt-2">Esta funcionalidad te permite:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Usar tu propia marca y dominio</li>
            <li>Mantener una presencia profesional</li>
            <li>Controlar completamente la URL de tu aplicación</li>
            <li>Remover la insignia "Edit with Nerd.lat"</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Qué es el modo Code?",
      answer: (
        <div>
          <p>El modo Code es una funcionalidad exclusiva de los planes de pago que te permite editar directamente el código de tu aplicación.</p>
          <p className="mt-2">Con el modo Code puedes:</p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Acceder y modificar el código fuente directamente</li>
            <li>Hacer ajustes finos que la IA podría no entender</li>
            <li>Integrar librerías y dependencias personalizadas</li>
            <li>Tener control total sobre la implementación</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Cómo funciona la facturación anual vs mensual?",
      answer: (
        <div>
          <p>Nerd.lat ofrece opciones de facturación flexible:</p>
          <p className="mt-2"><strong>Facturación Mensual:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
            <li>Pago mes a mes</li>
            <li>Mayor flexibilidad para cambios</li>
            <li>Precio mensual estándar</li>
          </ul>
          <p><strong>Facturación Anual:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
            <li>Descuento significativo (generalmente ~15-20%)</li>
            <li>Límites más altos de acumulación de créditos</li>
            <li>Créditos válidos por 12 meses</li>
            <li>Un solo pago anual</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Qué sucede si cancelo mi suscripción?",
      answer: (
        <div>
          <p>Al cancelar tu suscripción de pago:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Mantienes acceso hasta el final del período de facturación actual</li>
            <li>Todos los créditos no utilizados y acumulados expiran</li>
            <li>Los proyectos privados pueden volverse inaccesibles</li>
            <li>Pierdes acceso a funcionalidades premium</li>
            <li>Vuelves automáticamente al plan gratuito</li>
          </ul>
          <p className="mt-2 text-sm bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded p-2 text-black dark:text-red-200">
            <strong>Nota:</strong> Los créditos no son reembolsables y no se transfieren al plan gratuito.
          </p>
        </div>
      )
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: (
        <div>
          <p>Sí, puedes actualizar o degradar tu plan en cualquier momento desde la configuración de tu cuenta.</p>
          <p className="mt-2"><strong>Al actualizar:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1 mb-2">
            <li>Los cambios se aplican inmediatamente</li>
            <li>Se ajusta el número total de créditos mensuales</li>
            <li>Se prorratea la facturación</li>
          </ul>
          <p><strong>Al degradar:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Los cambios se aplican al final del ciclo actual</li>
            <li>Mantienes acceso premium hasta entonces</li>
            <li>Los créditos excedentes pueden perderse</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Nerd.lat es seguro para mis datos?",
      answer: (
        <div>
          <p>Sí, Nerd.lat toma la seguridad muy en serio:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Encriptación de datos en tránsito y en reposo</li>
            <li>Autenticación segura y SSO disponible (Business)</li>
            <li>Opción de excluirse del entrenamiento de datos (Business)</li>
            <li>Cumplimiento con estándares de seguridad de la industria</li>
            <li>Backups automáticos y redundancia de datos</li>
          </ul>
          <p className="mt-2">Para empresas, el plan Business ofrece controles adicionales de privacidad y seguridad.</p>
        </div>
      )
    }
  ]

  return (
    <div className="flex flex-col items-start justify-start min-h-[80vh] px-4 lg:px-6">
      <div className="text-center space-y-3 px-4 lg:px-6">
        <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
          Preguntas Frecuentes
        </h1>
        <p className="text-base text-black dark:text-white lg:text-lg text-left">
          Encuentra respuestas a las preguntas más comunes sobre Nerd.lat
        </p>
      </div>
      
      <div className="w-full max-w-3xl mt-6 px-4 lg:px-6 space-y-0">
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
        
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">¿No encuentras lo que buscas?</h3>
          <p className="text-base text-blue-700 dark:text-blue-200">
            Si tienes otras preguntas o necesitas ayuda adicional, no dudes en contactar a nuestro equipo de soporte. 
            Estamos aquí para ayudarte a aprovechar al máximo Nerd.lat.
          </p>
        </div>
      </div>
    </div>
  )
}