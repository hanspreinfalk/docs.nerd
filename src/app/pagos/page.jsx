"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { TitleProvider } from "@/contexts/TitleContext";
import PaymentButton from "@/components/PaymentButton";

function PagosPage() {
  const productExamples = [
    {
      id: 1,
      name: "Plan Básico",
      description: "Acceso básico a la plataforma",
      price: 9.99,
      features: ["5 proyectos", "Soporte por email", "1GB almacenamiento"]
    },
    {
      id: 2,
      name: "Plan Pro", 
      description: "Plan profesional con más características",
      price: 29.99,
      features: ["50 proyectos", "Soporte prioritario", "10GB almacenamiento", "API access"]
    },
    {
      id: 3,
      name: "Plan Enterprise",
      description: "Para empresas grandes",
      price: 99.99,
      features: ["Proyectos ilimitados", "Soporte 24/7", "100GB almacenamiento", "API completa", "Custom integrations"]
    }
  ];

  return (
    <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
      <div className="text-center space-y-3 px-4 lg:px-6 mb-8">
        <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
          Sistema de Pagos Integrado
        </h1>
        <p className="text-base text-black dark:text-white lg:text-lg text-left">
          Ejemplo de integración con Stripe para procesar pagos
        </p>
      </div>
      
      <div className="w-full max-w-6xl mx-auto">
        {/* Información sobre la integración */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            🚀 Integración de Pagos con Stripe
          </h2>
          <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
            <p>• <strong>Seguro:</strong> Todos los pagos son procesados por Stripe de forma segura</p>
            <p>• <strong>Rápido:</strong> Configuración en minutos</p>
            <p>• <strong>Flexible:</strong> Soporta múltiples monedas y métodos de pago</p>
            <p>• <strong>Completo:</strong> Manejo de webhooks para confirmaciones</p>
          </div>
        </div>

        {/* Ejemplos de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {productExamples.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {product.description}
                </p>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  ${product.price}
                  <span className="text-sm font-normal text-gray-500">/mes</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <PaymentButton
                amount={product.price}
                productName={product.name}
                productDescription={product.description}
                className="w-full"
              >
                Suscribirse a {product.name}
              </PaymentButton>
            </div>
          ))}
        </div>

        {/* Pago personalizado */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
            Pago Personalizado
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Ejemplo de pago con monto personalizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <PaymentButton
              amount={5.00}
              productName="Donación Pequeña"
              productDescription="Gracias por tu apoyo"
            >
              Donar $5
            </PaymentButton>
            
            <PaymentButton
              amount={25.00}
              productName="Donación Media"
              productDescription="Gracias por tu generoso apoyo"
            >
              Donar $25
            </PaymentButton>
            
            <PaymentButton
              amount={100.00}
              productName="Donación Grande"
              productDescription="¡Eres increíble! Gracias"
            >
              Donar $100
            </PaymentButton>
          </div>
        </div>

        {/* Instrucciones de configuración */}
        <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
            ⚙️ Configuración
          </h3>
          <div className="text-sm text-yellow-800 dark:text-yellow-200 space-y-2">
            <p><strong>1.</strong> Crea una cuenta en <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="underline">Stripe</a></p>
            <p><strong>2.</strong> Obtén tus claves API (publishable key y secret key)</p>
            <p><strong>3.</strong> Configura las variables de entorno en .env.local:</p>
            <div className="bg-yellow-100 dark:bg-yellow-900/40 rounded p-2 mt-2 font-mono text-xs">
              NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...<br />
              STRIPE_SECRET_KEY=sk_test_...<br />
              STRIPE_WEBHOOK_SECRET=whsec_...
            </div>
            <p><strong>4.</strong> ¡Listo! Ya puedes procesar pagos de forma segura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PagosPageRoute() {
  return (
    <TitleProvider>
      <SidebarProvider
        style={{
          "--sidebar-width": "20rem",
          "--header-height": "calc(var(--spacing) * 12)",
        }}
      >
        <SiteHeader />
        <AppSidebar variant="inset" />
        <SidebarInset>
          <div className="flex flex-1 flex-col pt-16 md:pt-28 pt-28">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <PagosPage />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  );
}