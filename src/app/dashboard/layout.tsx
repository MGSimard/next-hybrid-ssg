import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BreadcrumbHeader } from "@/components/sidebar/breadcrumb-header";

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex flex-col">
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset>
          <BreadcrumbHeader />
          <div className="max-w-8xl w-full mx-auto flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
