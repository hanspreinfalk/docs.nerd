import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

let resend

export async function POST(request) {
  try {
    // Initialize Resend only when the function is called
    if (!resend) {
      const apiKey = process.env.RESEND_API || process.env.RESEND_API_KEY
      if (!apiKey) {
        console.error('RESEND_API environment variable is not set. Available env vars:', Object.keys(process.env).filter(key => key.includes('RESEND')))
        return NextResponse.json(
          { error: 'Server configuration error' },
          { status: 500 }
        )
      }
      resend = new Resend(apiKey)
    }

    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Send email to juanpablo@nerd.lat
    const emailData = {
      from: 'noreply@nerd.lat',
      to: 'juanpablo@nerd.lat',
      subject: `Nuevo feedback de usuario: ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              💬 Nuevo Feedback de Usuario
            </h1>
          </div>
          
          <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e1e5e9; border-top: none;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
              <h2 style="color: #495057; margin: 0 0 15px 0; font-size: 20px;">Información del Usuario</h2>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; align-items: center;">
                  <strong style="color: #6c757d; min-width: 120px;">👤 Nombre:</strong>
                  <span style="color: #495057; font-size: 16px;">${name}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <strong style="color: #6c757d; min-width: 120px;">📧 Email:</strong>
                  <span style="color: #495057; font-size: 16px;">${email}</span>
                </div>
                <div style="display: flex; align-items: center;">
                  <strong style="color: #6c757d; min-width: 120px;">📝 Asunto:</strong>
                  <span style="color: #495057; font-size: 16px;">${subject}</span>
                </div>
              </div>
            </div>
            
            <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc;">
              <h3 style="color: #0066cc; margin: 0 0 15px 0; font-size: 18px;">💬 Mensaje/Recomendación</h3>
              <p style="color: #495057; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 30px; border-top: 2px solid #e9ecef; text-align: center;">
              <p style="color: #6c757d; margin: 0; font-size: 14px;">
                📅 Fecha de envío: ${new Date().toLocaleString('es-ES', { 
                  timeZone: 'America/Mexico_City',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e1e5e9; border-top: none;">
            <p style="color: #6c757d; margin: 0; font-size: 12px;">
              Este email fue generado automáticamente desde la plataforma Nerd.lat
            </p>
          </div>
        </div>
      `,
    }

    const data = await resend.emails.send(emailData)

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado exitosamente',
      id: data.id 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el email', details: error.message },
      { status: 500 }
    )
  }
}

// Add a simple GET method for testing
export async function GET() {
  try {
    const hasApiKey = !!(process.env.RESEND_API || process.env.RESEND_API_KEY)
    return NextResponse.json({ 
      status: 'Newsletter API is running',
      hasApiKey,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'API configuration error', details: error.message },
      { status: 500 }
    )
  }
}