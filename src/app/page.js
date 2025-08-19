"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { WelcomePage, FeaturesGrid } from "@/components/welcome-page"
import { PlansTokensPage } from "@/components/plans-tokens-page"
import { FAQPage } from "@/components/faq-page"
import { GettingStartedPage } from "@/components/getting-started"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TitleProvider, useTitle } from "@/contexts/TitleContext"

// import data from "./data.json"

function DynamicContent() {
  const { currentTitle } = useTitle()

  switch (currentTitle) {
    case "Planes y tokens":
      return (
        <div className="w-full">
          <PlansTokensPage />
        </div>
      )
    case "Ayuda":
      return (
        <div className="w-full">
          <FAQPage />
        </div>
      )
    case "Empezando en Nerd.lat":
      return (
          <GettingStartedPage />
        
      )
    case "Introducción":
    default:
      return (
        <>
          <WelcomePage />

        </>
      )
  }
}

export default function Page() {
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
                {/* <SectionCards /> */}
                <DynamicContent />
                {/* <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div> */}
              
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  )
}
