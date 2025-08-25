import { NextResponse } from 'next/server'

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_KEY

// Contenido de FAQ de Nerd.lat
const DOCUMENTATION_CONTENT = `
# Preguntas Frecuentes - Nerd.lat

¿Cómo inicio con NERD.LAT?
Es súper fácil, solamente tienes que darle en el botón 'Empezar' al entrar a la web, regístrate con tu cuenta de Google y automáticamente ya estarías dentro de la inteligencia artificial. Se te acreditarían tokens gratis diariamente.

¿Cómo genero código con la plataforma?
Es súper fácil generar código con la plataforma, solamente tienes que indicarle tu idea o prompt de tu aplicación y automáticamente la IA convierte ese prompt de palabras a código.

¿Cómo creo videojuegos con NERD.LAT?
NERD.LAT no tiene un modelo específico para crear videojuegos, pero sí puedes crear modelos sencillos. Incluso puede ser en 3D, aunque no es muy viable. Todo depende de la cantidad de código que necesites generar.

¿Cómo descargo mi proyecto?
Dirígete a tu proyecto, pulsa en el icono de configuración (rueda) y se desplegarán varias opciones. Entre ellas está el botón 'Descargar', que te permitirá bajar todas las dependencias y archivos de tu proyecto.

¿Cómo ingreso o realizo cambios a mi proyecto?
Para realizar cambios, solo indícale a NERD el cambio específico en el chat y envía el mensaje. La IA programará automáticamente los cambios solicitados.

¿Puedo editar el código generado por NERD manualmente?
Sí puedes verlo y modificarlo, pero los cambios no se pueden guardar porque el código solo lo puede manipular la IA.

¿Qué tipo de proyectos puedo crear con NERD.LAT?
Puedes crear aplicaciones web, videojuegos y más. Próximamente también podrás generar APKs o software con NERD.LAT.

¿Se puede trabajar en equipo dentro de un mismo proyecto?
Próximamente será posible. Se desplegará un modelo de colaboración donde podrás invitar a varias personas a tu proyecto mediante correo electrónico.

¿NERD.LAT es gratis o necesito tokens para todo?
NERD.LAT es gratis diariamente, otorgando entre 250.000 y 500.000 tokens. También hay planes de pago con más tokens y acceso a distintos modelos de IA.

¿Cómo integro la base de datos en mi proyecto?
NERD.LAT integra Supabase fácilmente. Solo indícale a NERD que quieres usar base de datos, pulsa en el icono de Supabase, crea tu cuenta y proyecto, genera un token y cópialo en NERD.LAT. Automáticamente se configurará el SQL con las tablas necesarias.

¿Qué base de datos son compatibles con NERD.LAT?
Actualmente la integrada es Supabase. Para otras, como Firebase o SQL, se deben integrar mediante su API o dependencias.

¿Cómo gestiono mis tablas y registros desde NERD.LAT?
La gestión se realiza directamente desde Supabase, donde puedes ver tablas, registros y almacenamiento.

¿Puedo exportar mi base de datos?
Sí, puedes hacerlo desde Supabase exportando tus tablas y proyectos.

¿Cómo conectar una API a NERD.LAT?
Dirígete a la API que desees usar, obtén su clave y pídele a NERD que la integre. Por ejemplo, con Google Gemini, basta con obtener la clave de API y pedir a NERD que la conecte.

¿Puedo usar APIs externas como Google Maps, Stripe o Firebase?
Sí, y próximamente habrá una store de APIs dentro de NERD.LAT para facilitar integraciones.

¿Cómo creo mi propia API con NERD.LAT?
Es posible, aunque puede ser más complejo. Con instrucciones claras y detalladas, NERD.LAT puede ayudarte a generarla.

¿Cómo probar si mi API está funcionando correctamente?
Asegúrate de que las dependencias estén instaladas, que la clave de API esté bien configurada y revisa el código antes de integrarlo a tu proyecto.

¿Cómo ganar más tokens en NERD.LAT?
NERD.LAT tiene un sistema de referidos. Invita amigos por correo electrónico y recibirás 500.000 tokens gratis por cada referido.

¿Cómo compro tokens en NERD.LAT?
Actualmente hay tres planes: 14, 29 y 199 dólares. El más popular es el de 29, pero el de 199 ofrece acceso a todos los modelos de IA.

¿Qué pasa si me quedo sin tokens?
Si se acaban tus tokens diarios gratuitos, puedes esperar al siguiente día para recibir más. También puedes recargar adquiriendo un plan premium.

¿Cómo realizar pagos desde NERD.LAT?
Aún no es posible realizar pagos directamente, pero próximamente se integrará esa función.

¿Cómo implemento pagos en mi app/web con NERD.LAT?
Puedes integrar plataformas como PayPal, Stripe u otras APIs de pago directamente en tu proyecto.

¿Cómo genero ingresos con NERD.LAT?
Puedes crear webs, apps o sistemas con NERD.LAT y ofrecerlos como servicio a negocios. Por ejemplo, restaurantes, autolavados o talleres. Generas el proyecto, lo publicas y lo entregas a tu cliente.

¿Puedo monetizar mis apps/webs creadas en NERD.LAT?
Sí, se pueden monetizar sin problema. Próximamente también habrá monetización directa en la plataforma.

¿NERD.LAT cobra comisión por los pagos recibidos en mis apps?
Actualmente no, porque los pagos aún no están integrados. Cuando se active, se informará si habrá comisión.

¿Cómo publico mi proyecto con NERD.LAT?
Ve a tu proyecto y pulsa en 'Publicar'. También puedes añadir un dominio personalizado si lo deseas.

¿Dónde se alojan los proyectos creados?
Los proyectos se alojan en la infraestructura de NERD.LAT, con seguridad garantizada.

¿Puedo usar mi propio dominio en NERD.LAT?
Sí, puedes añadir tu dominio y NERD.LAT te dará las configuraciones de DNS necesarias.

¿Cómo genero un APK para Android?
Aún no está disponible, pero próximamente se podrá generar.

¿Se puede publicar en iOS con NERD.LAT?
Sí, aunque por ahora se generan apps web. Pronto podrás generar también archivos IPA para iOS.

¿Cómo actualizo un proyecto publicado?
Realiza el cambio en NERD.LAT y vuelve a publicar tu proyecto. La actualización será inmediata.

No puedo entrar a mi cuenta, ¿qué hago?
Revisa si no tienes un VPN o DNS que bloquee la página. Intenta ingresar de nuevo con Google.

Mi proyecto no carga, ¿cómo lo soluciono?
Revisa la consola de desarrolladores de tu navegador. Si no identificas el problema, restaura una versión anterior del proyecto.

¿Qué hago si mis tokens desaparecen o no se acreditan?
Contacta al soporte de NERD.LAT para que puedan revisar tu caso y acreditarte los tokens.

¿Puedo recuperar un proyecto borrado?
No, actualmente los proyectos eliminados no se pueden recuperar. Se muestra una advertencia antes de borrarlos.

¿Qué hago si la plataforma se queda trabada?
Si se queda bloqueada durante la codificación, intenta refrescar, esperar unos minutos o volver a ejecutar el prompt.

¿Cómo contacto con soporte en NERD.LAT?
Es súper fácil, tienes un botón de 'Reportar errores', ahí puedes contactar a soporte directamente desde WhatsApp o mandar tu error automáticamente. También puedes hacerlo desde la sección de Planes, yendo hacia abajo y pulsando en 'Contactar con soporte'.

¿Qué nuevas funciones están por llegar en NERD.LAT?
Estamos preparando muchas sorpresas para ustedes. Próximamente habrá nuevos modelos de inteligencia artificial, integración de métodos de pago, mayor estabilidad en la plataforma y muchas funciones más que se lanzarán progresivamente.

¿Se podrán generar apps nativas pronto?
Sí, muy pronto será posible generar apps nativas completas sin ningún problema.

¿Habrá integraciones con más servicios externos?
Sí, se integrarán muchos más servicios externos para ampliar las capacidades de la plataforma.

¿Puedo cambiar de plan en cualquier momento?
Sí, puedes actualizar o degradar tu plan en cualquier momento desde la configuración de tu cuenta.

Al actualizar:
- Los cambios se aplican inmediatamente
- Se ajusta el número total de créditos mensuales
- Se prorratea la facturación

Al degradar:
- Los cambios se aplican al final del ciclo actual
- Mantienes acceso premium hasta entonces
- Los créditos excedentes pueden perderse

¿Nerd.lat es seguro para mis datos?
Sí, Nerd.lat toma la seguridad muy en serio:
- Encriptación de datos en tránsito y en reposo
- Autenticación segura y SSO disponible (Business)
- Opción de excluirse del entrenamiento de datos (Business)
- Cumplimiento con estándares de seguridad de la industria
- Backups automáticos y redundancia de datos
Para empresas, el plan Business ofrece controles adicionales de privacidad y seguridad.
`;

export async function POST(request) {
  try {
    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key de Anthropic no configurada' },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Formato de mensajes inválido' },
        { status: 400 }
      )
    }

    // Preparar mensajes para Anthropic
    const anthropicMessages = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    // System prompt con toda la información de la documentación
    const systemPrompt = `Eres un asistente especializado en Nerd.lat, una plataforma de construcción de aplicaciones impulsada por IA. Tu trabajo es ayudar a los usuarios con cualquier pregunta sobre cómo usar Nerd.lat de manera efectiva.

Información completa sobre Nerd.lat:
${DOCUMENTATION_CONTENT}

INSTRUCCIONES IMPORTANTES:
1. Responde SIEMPRE en español
2. Sé específico y práctico en tus respuestas
3. Si no sabes algo específico sobre Nerd.lat, di que no tienes esa información
4. Proporciona ejemplos concretos cuando sea posible
5. Si alguien pregunta sobre algo no relacionado con Nerd.lat, redirige educadamente hacia temas de la plataforma
6. Mantén un tono amigable y profesional
7. Estructura tus respuestas con puntos claros cuando sea apropiado
8. Si mencionas código o prompts, usa ejemplos realistas

Tu objetivo es ser el mejor asistente posible para usuarios de Nerd.lat, ayudándolos a aprovechar al máximo la plataforma.`

    // Llamada a la API de Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1500,
        system: systemPrompt,
        messages: anthropicMessages
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Error de Anthropic:', errorData)
      
      return NextResponse.json(
        { error: 'Error al comunicarse con el servicio de IA' },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
      return NextResponse.json(
        { error: 'Respuesta inválida del servicio de IA' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      message: data.content[0].text 
    })

  } catch (error) {
    console.error('Error en chat AI:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}