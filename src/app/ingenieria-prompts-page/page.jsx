"use client"

import { IngenieriaPromptsPage } from "@/components/ingenieria-prompts-page"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"
import { TitleProvider } from "@/contexts/TitleContext"

export default function IngenieriaPromptsPageRoute() {
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
                <div className="w-full">
                  <IngenieriaPromptsPage />
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TitleProvider>
  )
}