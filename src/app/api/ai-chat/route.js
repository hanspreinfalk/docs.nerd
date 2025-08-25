import { NextResponse } from 'next/server'

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_KEY

// FAQ esencial de Nerd.lat
const FAQ_DATA = `
# Nerd.lat - Información Esencial

## Inicio y Uso Básico
- Para comenzar: Clic en "Empezar" → Registrarse con Google → Recibir tokens gratis diarios
- Para empezar a crear: Describir la idea/prompt y la IA lo convierte automáticamente a código
- Realizar cambios: Indicar cambios específicos en el chat, la IA los programa automáticamente
- Ver/editar código: Sí se puede ver y modificar, pero solo la IA puede guardar cambios

## Tokens y Planes
- Gratis: 250,000 tokens diarios gratuitos
- Planes premium: $14, $49 (más popular), $199 (acceso a todos los modelos IA)
- Ganar tokens: Sistema de referidos (500,000 tokens por referido)
- Sin tokens: Esperar al día siguiente o adquirir plan premium

## Proyectos
- Tipo de proyecto: Aplicaciones web, videojuegos simples, próximamente APKs
- Descargar: Icono configuración → "Descargar" (incluye dependencias)
- Botón de Publicar: Botón "Publicar", opción de dominio personalizado
- Recuperación: No se pueden recuperar proyectos borrados

## Base de Datos
- Integrada: Supabase (fácil configuración con token)
- Le pides a Nerd que te conecte la base de datos y te saldra un icono de supabase para conectar tu proyecto.

## APIs y Integraciones
- Siempre para Conectar APIs: Usuario debe de  Obtener clave → después Pedir a NERD integrarla
- APIs compatibles: OpenAI y Supabase SOLAMENTE


## Publicación y Hosting
- Hosting: Infraestructura propia de Nerd.lat con seguridad garantizada
- Dominio propio: Sí, con configuración DNS proporcionada (se debe de comprar el dominio en un proveedor de dominios)
- Actualizar algo: Hacer cambio → Republicar (actualización inmediata)



## Soporte y Problemas
- Debes de propocionar al usuario esta liga para contactar por whatsapp al soporte: https://wa.me/573178237773

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

    const anthropicMessages = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))

    // System prompt optimizado y conciso
    const systemPrompt = `Eres el asistente oficial de Nerd.lat, plataforma para crear aplicaciones con IA.

${FAQ_DATA}

REGLAS:
- Responde solo en español
- Sé directo y práctico
- Usa la información proporcionada
- Si no sabes algo, dilo claramente
- Para temas no relacionados con Nerd.lat, redirige amablemente
- Tono amigable y profesional
- Estructura respuestas con puntos claros cuando sea útil

Tu objetivo: Ayudar a los usuarios a usar Nerd.lat efectivamente.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1200,
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