import { GalleryVerticalEnd } from "lucide-react";
import { SidebarMenuButton, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavTeam() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href="#">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Company Name</span>
              <span className="truncate text-xs">Enterprise Plan</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
