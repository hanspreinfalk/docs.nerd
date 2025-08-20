"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { TitleProvider } from "@/contexts/TitleContext"

function SolicitudesDeMejorasPage() {
  return (
    <div className="flex flex-col items-start justify-start min-h-[40vh] px-4 lg:px-6">
      <div className="text-center space-y-3 px-4 lg:px-6">
        <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left text-black dark:text-white">
          Solicitudes de mejoras
        </h1>
        <p className="text-base text-black dark:text-white lg:text-lg text-left">
          Envía tus sugerencias y solicitudes de mejoras para Nerd.lat
        </p>
      </div>
      
      <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">¿Tienes una idea?</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Nos encanta escuchar de nuestra comunidad. Si tienes ideas para mejorar Nerd.lat, compártelas con nosotros.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
            Cómo enviar tu solicitud
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">1</div>
              <p className="text-base text-black dark:text-white">Describe claramente la mejora que te gustaría ver</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">2</div>
              <p className="text-base text-black dark:text-white">Explica cómo esta mejora beneficiaría a los usuarios</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">3</div>
              <p className="text-base text-black dark:text-white">Envía tu solicitud a través de nuestros canales oficiales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolicitudesDeMejorasPageRoute() {
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
                <SolicitudesDeMejorasPage />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  )
}