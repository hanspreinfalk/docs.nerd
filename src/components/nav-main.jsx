"use client"

import { useState } from "react";
import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react";
import { Megaphone } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useTitle } from "@/contexts/TitleContext"
import { NewsletterPopup } from "@/components/newsletter-popup"

export function NavMain({
  items
}) {
  const { updateTitle } = useTitle()
  const router = useRouter()
  const pathname = usePathname()
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)
  
  const handleItemClick = (title, url) => {
    if (url && url !== "#" && url !== "/") {
      // Navigate to dedicated page routes
      router.push(url)
    } else if (url === "/") {
      // Navigate to home page
      router.push("/")
    } else {
      // Update title for dynamic content (legacy behavior)
      updateTitle(title)
    }
  }

  const handleNewsletterClick = () => {
    setIsNewsletterOpen(true)
  }
  
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Anuncios"
              onClick={() => handleItemClick("Anuncios", "/anuncios")}
              className={`min-w-8 duration-200 ease-linear ${
                pathname === "/anuncios" 
                  ? "bg-[#43D354] text-white hover:bg-[#43D354]/90" 
                  : "bg-[#43D354] text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
              }`}>
              <Megaphone />
              <span>Anuncios</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
              onClick={handleNewsletterClick}>
              <IconMail />
              <span className="sr-only">Newsletter</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton 
                  tooltip={item.title}
                  onClick={() => handleItemClick(item.title, item.url)}
                  className={isActive ? "bg-accent text-accent-foreground font-medium" : ""}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
      
      <NewsletterPopup 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </SidebarGroup>
  );
}
