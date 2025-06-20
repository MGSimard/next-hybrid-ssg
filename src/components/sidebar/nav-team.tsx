import { GalleryVerticalEnd } from "lucide-react";
import { SidebarMenuButton, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

interface Organization {
  name: string;
  logo: React.ElementType;
  plan: string;
}

export function NavTeam({ organization }: { organization: Organization }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <a href="#">
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{organization.name}</span>
              <span className="truncate text-xs">{organization.plan}</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
