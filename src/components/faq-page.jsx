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
      question: "¿Cómo inicio con NERD.LAT?",
      answer: (
        <div>
          <p>Iniciar con NERD.LAT es muy sencillo:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Visita la página web y haz clic en 'Empezar'</li>
            <li>Regístrate usando tu cuenta de Google</li>
            <li>Una vez dentro, automáticamente tendrás acceso a la IA</li>
            <li>Recibirás tokens gratuitos diariamente para comenzar</li>
          </ol>
        </div>
      )
    },
    {
      question: "¿Cómo genero código con la plataforma?",
      answer: (
        <div>
          <p>Generar código con NERD.LAT es muy simple:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Describe tu idea:</strong> Escribe un prompt detallando lo que quieres crear</li>
            <li><strong>La IA procesa:</strong> Automáticamente convierte tu descripción en código funcional</li>
            <li><strong>Resultado inmediato:</strong> Obtienes una aplicación completa lista para usar</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Tip: Mientras más específico seas en tu prompt, mejores resultados obtendrás.</p>
        </div>
      )
    },
    {
      question: "¿Cómo creo videojuegos con NERD.LAT?",
      answer: (
        <div>
          <p>NERD.LAT no tiene un modelo específico para crear videojuegos, pero sí puedes crear modelos sencillos. Incluso puede ser en 3D, aunque no es muy viable. Todo depende de la cantidad de código que necesites generar.</p>
        </div>
      )
    },
    {
      question: "¿Cómo descargo mi proyecto?",
      answer: (
        <div>
          <p>Para descargar tu proyecto sigue estos pasos:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Accede a tu proyecto en NERD.LAT</li>
            <li>Haz clic en el <strong>ícono de configuración</strong> (rueda dentada)</li>
            <li>Selecciona la opción <strong>'Descargar'</strong> del menú desplegable</li>
            <li>Se descargará un archivo con todas las dependencias y archivos del proyecto</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">El archivo descargado incluye todo lo necesario para ejecutar tu proyecto localmente.</p>
        </div>
      )
    },
    {
      question: "¿Cómo ingreso o realizo cambios a mi proyecto?",
      answer: (
        <div>
          <p>Para realizar cambios, solo indícale a NERD el cambio específico en el chat y envía el mensaje. La IA programará automáticamente los cambios solicitados.</p>
        </div>
      )
    },
    {
      question: "¿Puedo editar el código generado por NERD manualmente?",
      answer: (
        <div>
          <p>Sí puedes verlo y modificarlo, pero los cambios no se pueden guardar porque el código solo lo puede manipular la IA.</p>
        </div>
      )
    },
    {
      question: "¿Qué tipo de proyectos puedo crear con NERD.LAT?",
      answer: (
        <div>
          <p>Puedes crear aplicaciones web, videojuegos y más. Próximamente también podrás generar APKs o software con NERD.LAT.</p>
        </div>
      )
    },
    {
      question: "¿Se puede trabajar en equipo dentro de un mismo proyecto?",
      answer: (
        <div>
          <p>Próximamente será posible. Se desplegará un modelo de colaboración donde podrás invitar a varias personas a tu proyecto mediante correo electrónico.</p>
        </div>
      )
    },
    {
      question: "¿NERD.LAT es gratis o necesito tokens para todo?",
      answer: (
        <div>
          <p>NERD.LAT es gratis diariamente, otorgando entre 250.000 y 500.000 tokens. También hay planes de pago con más tokens y acceso a distintos modelos de IA.</p>
        </div>
      )
    },
    {
      question: "¿Cómo integro la base de datos en mi proyecto?",
      answer: (
        <div>
          <p>NERD.LAT se integra perfectamente con <strong>Supabase</strong>:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Indica a NERD que quieres usar base de datos</li>
            <li>Haz clic en el <strong>ícono de Supabase</strong></li>
            <li>Crea tu cuenta y proyecto en Supabase</li>
            <li>Genera un token de API en Supabase</li>
            <li>Copia el token en NERD.LAT</li>
            <li>La IA configurará automáticamente el SQL con las tablas necesarias</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">La configuración es completamente automática una vez proporcionadas las credenciales.</p>
        </div>
      )
    },
    {
      question: "¿Qué base de datos son compatibles con NERD.LAT?",
      answer: (
        <div>
          <p>Actualmente la integrada es Supabase. Para otras, como Firebase o SQL, se deben integrar mediante su API o dependencias.</p>
        </div>
      )
    },
    {
      question: "¿Cómo gestiono mis tablas y registros desde NERD.LAT?",
      answer: (
        <div>
          <p>La gestión se realiza directamente desde Supabase, donde puedes ver tablas, registros y almacenamiento.</p>
        </div>
      )
    },
    {
      question: "¿Puedo exportar mi base de datos?",
      answer: (
        <div>
          <p>Sí, puedes hacerlo desde Supabase exportando tus tablas y proyectos.</p>
        </div>
      )
    },
    {
      question: "¿Cómo conectar una API a NERD.LAT?",
      answer: (
        <div>
          <p>Dirígete a la API que desees usar, obtén su clave y pídele a NERD que la integre. Por ejemplo, con Google Gemini, basta con obtener la clave de API y pedir a NERD que la conecte.</p>
        </div>
      )
    },
    {
      question: "¿Puedo usar APIs externas como Google Maps, Stripe o Firebase?",
      answer: (
        <div>
          <p>Sí, y próximamente habrá una store de APIs dentro de NERD.LAT para facilitar integraciones.</p>
        </div>
      )
    },
    {
      question: "¿Cómo creo mi propia API con NERD.LAT?",
      answer: (
        <div>
          <p>Es posible, aunque puede ser más complejo. Con instrucciones claras y detalladas, NERD.LAT puede ayudarte a generarla.</p>
        </div>
      )
    },
    {
      question: "¿Cómo probar si mi API está funcionando correctamente?",
      answer: (
        <div>
          <p>Asegúrate de que las dependencias estén instaladas, que la clave de API esté bien configurada y revisa el código antes de integrarlo a tu proyecto.</p>
        </div>
      )
    },
    {
      question: "¿Cómo ganar más tokens en NERD.LAT?",
      answer: (
        <div>
          <p>Puedes obtener tokens adicionales de varias formas:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Sistema de referidos:</strong> Invita amigos por correo electrónico y recibe 500.000 tokens gratis por cada referido exitoso</li>
            <li><strong>Tokens diarios:</strong> Recibe entre 250.000 y 500.000 tokens gratuitos cada día</li>
            <li><strong>Planes premium:</strong> Adquiere un plan de pago para obtener más tokens mensualmente</li>
          </ul>
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">💡 Tip: El sistema de referidos es la forma más rápida de conseguir tokens extra.</p>
        </div>
      )
    },
    {
      question: "¿Cómo compro tokens en NERD.LAT?",
      answer: (
        <div>
          <p>NERD.LAT ofrece varios planes de suscripción:</p>
          <div className="mt-3 space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p><strong>Plan Básico - $14/mes</strong></p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ideal para proyectos pequeños y pruebas</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
              <p><strong>Plan Popular - $29/mes</strong> ⭐</p>
              <p className="text-sm text-blue-600 dark:text-blue-400">El más elegido por los usuarios</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
              <p><strong>Plan Pro - $199/mes</strong></p>
              <p className="text-sm text-purple-600 dark:text-purple-400">Acceso completo a todos los modelos de IA</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "¿Qué pasa si me quedo sin tokens?",
      answer: (
        <div>
          <p>Si se acaban tus tokens diarios gratuitos, puedes esperar al siguiente día para recibir más. También puedes recargar adquiriendo un plan premium.</p>
        </div>
      )
    },
    {
      question: "¿Cómo realizar pagos desde NERD.LAT?",
      answer: (
        <div>
          <p>Aún no es posible realizar pagos directamente, pero próximamente se integrará esa función.</p>
        </div>
      )
    },
    {
      question: "¿Cómo implemento pagos en mi app/web con NERD.LAT?",
      answer: (
        <div>
          <p>Puedes integrar plataformas como PayPal, Stripe u otras APIs de pago directamente en tu proyecto.</p>
        </div>
      )
    },
    {
      question: "¿Cómo genero ingresos con NERD.LAT?",
      answer: (
        <div>
          <p>Puedes crear webs, apps o sistemas con NERD.LAT y ofrecerlos como servicio a negocios. Por ejemplo, restaurantes, autolavados o talleres. Generas el proyecto, lo publicas y lo entregas a tu cliente.</p>
        </div>
      )
    },
    {
      question: "¿Puedo monetizar mis apps/webs creadas en NERD.LAT?",
      answer: (
        <div>
          <p>Sí, se pueden monetizar sin problema. Próximamente también habrá monetización directa en la plataforma.</p>
        </div>
      )
    },
    {
      question: "¿NERD.LAT cobra comisión por los pagos recibidos en mis apps?",
      answer: (
        <div>
          <p>Actualmente no, porque los pagos aún no están integrados. Cuando se active, se informará si habrá comisión.</p>
        </div>
      )
    },
    {
      question: "¿Cómo publico mi proyecto con NERD.LAT?",
      answer: (
        <div>
          <p>Publicar tu proyecto es muy sencillo:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>Accede a tu proyecto en NERD.LAT</li>
            <li>Haz clic en el botón <strong>'Publicar'</strong></li>
            <li>Tu proyecto estará disponible inmediatamente con una URL de NERD.LAT</li>
            <li><em>Opcional:</em> Puedes añadir un dominio personalizado si lo prefieres</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">La publicación es instantánea y tu aplicación estará disponible para todos los usuarios.</p>
        </div>
      )
    },
    {
      question: "¿Dónde se alojan los proyectos creados?",
      answer: (
        <div>
          <p>Los proyectos se alojan en la infraestructura de NERD.LAT, con seguridad garantizada.</p>
        </div>
      )
    },
    {
      question: "¿Puedo usar mi propio dominio en NERD.LAT?",
      answer: (
        <div>
          <p>Sí, puedes añadir tu dominio y NERD.LAT te dará las configuraciones de DNS necesarias.</p>
        </div>
      )
    },
    {
      question: "¿Cómo genero un APK para Android?",
      answer: (
        <div>
          <p>Aún no está disponible, pero próximamente se podrá generar.</p>
        </div>
      )
    },
    {
      question: "¿Se puede publicar en iOS con NERD.LAT?",
      answer: (
        <div>
          <p>Sí, aunque por ahora se generan apps web. Pronto podrás generar también archivos IPA para iOS.</p>
        </div>
      )
    },
    {
      question: "¿Cómo actualizo un proyecto publicado?",
      answer: (
        <div>
          <p>Realiza el cambio en NERD.LAT y vuelve a publicar tu proyecto. La actualización será inmediata.</p>
        </div>
      )
    },
    {
      question: "No puedo entrar a mi cuenta, ¿qué hago?",
      answer: (
        <div>
          <p>Revisa si no tienes un VPN o DNS que bloquee la página. Intenta ingresar de nuevo con Google.</p>
        </div>
      )
    },
    {
      question: "Mi proyecto no carga, ¿cómo lo soluciono?",
      answer: (
        <div>
          <p>Revisa la consola de desarrolladores de tu navegador. Si no identificas el problema, restaura una versión anterior del proyecto.</p>
        </div>
      )
    },
    {
      question: "¿Qué hago si mis tokens desaparecen o no se acreditan?",
      answer: (
        <div>
          <p>Contacta al soporte de NERD.LAT para que puedan revisar tu caso y acreditarte los tokens.</p>
        </div>
      )
    },
    {
      question: "¿Puedo recuperar un proyecto borrado?",
      answer: (
        <div>
          <p>No, actualmente los proyectos eliminados no se pueden recuperar. Se muestra una advertencia antes de borrarlos.</p>
        </div>
      )
    },
    {
      question: "¿Qué hago si la plataforma se queda trabada?",
      answer: (
        <div>
          <p>Si se queda bloqueada durante la codificación, intenta refrescar, esperar unos minutos o volver a ejecutar el prompt.</p>
        </div>
      )
    },
    {
      question: "¿Cómo contacto con soporte en NERD.LAT?",
      answer: (
        <div>
          <p>Hay varias formas de contactar con soporte:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Botón 'Reportar errores':</strong>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                <li>Contacto directo por WhatsApp</li>
                <li>Envío automático de reportes de error</li>
              </ul>
            </li>
            <li><strong>Sección de Planes:</strong>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                <li>Ve a la parte inferior de la página</li>
                <li>Haz clic en 'Contactar con soporte'</li>
              </ul>
            </li>
          </ul>
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">📱 El soporte por WhatsApp es la opción más rápida y directa.</p>
        </div>
      )
    },
    {
      question: "¿Qué nuevas funciones están por llegar en NERD.LAT?",
      answer: (
        <div>
          <p>Estamos trabajando en emocionantes mejoras:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>🤖 Nuevos modelos de IA:</strong> Más opciones y capacidades avanzadas</li>
            <li><strong>💳 Integración de pagos:</strong> Procesamiento de pagos directo en la plataforma</li>
            <li><strong>📱 Apps nativas:</strong> Generación de APK e IPA</li>
            <li><strong>🛠️ Mayor estabilidad:</strong> Optimizaciones de rendimiento</li>
            <li><strong>🔌 Store de APIs:</strong> Integraciones pre-configuradas</li>
            <li><strong>👥 Colaboración en equipo:</strong> Trabajo colaborativo en proyectos</li>
          </ul>
          <p className="mt-2 text-sm text-purple-600 dark:text-purple-400">🚀 Las funciones se lanzarán progresivamente. ¡Mantente atento a las actualizaciones!</p>
        </div>
      )
    },
    {
      question: "¿Se podrán generar apps nativas pronto?",
      answer: (
        <div>
          <p>Sí, muy pronto será posible generar apps nativas completas sin ningún problema.</p>
        </div>
      )
    },
    {
      question: "¿Habrá integraciones con más servicios externos?",
      answer: (
        <div>
          <p>Sí, se integrarán muchos más servicios externos para ampliar las capacidades de la plataforma.</p>
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