"use client";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { NavTeam } from "@/components/sidebar/nav-team";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavAdmin } from "@/components/sidebar/nav-admin";
import { NavUser } from "@/components/sidebar/nav-user";
import { Activity, ChartNoAxesColumnIncreasing, Gauge, Settings2, ShieldCheck, Target } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  console.log(pathname);

  const isActive = (href: string) => {
    return pathname === href || (pathname.startsWith(href) && href !== "/");
  };

  const navLinks = {
    navMain: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: Gauge,
        isActive: pathname === "/dashboard",
      },
      {
        title: "Link Two",
        url: "/dashboard/link-two",
        icon: Activity,
        isActive: isActive("/dashboard/link-two"),
      },
      {
        title: "Link Three",
        url: "/dashboard/link-three",
        icon: Target,
        isActive: isActive("/dashboard/link-three"),
      },
      {
        title: "Link Four",
        url: "/dashboard/link-four",
        icon: ChartNoAxesColumnIncreasing,
        isActive: isActive("/dashboard/link-four"),
      },
      {
        title: "Link Five",
        url: "/dashboard/link-five",
        icon: ShieldCheck,
        isActive: isActive("/dashboard/link-five"),
      },
    ],
    admin: [
      {
        title: "Organization Settings",
        url: "/dashboard/organization-settings",
        icon: Settings2,
        isActive: isActive("/dashboard/organization-settings"),
        items: [
          {
            title: "General",
            url: "/dashboard/organization-settings",
            isActive: pathname === "/dashboard/organization-settings",
          },
          {
            title: "Team",
            url: "/dashboard/organization-settings/team",
            isActive: isActive("/dashboard/organization-settings/team"),
          },
          {
            title: "Billing",
            url: "/dashboard/organization-settings/billing",
            isActive: isActive("/dashboard/organization-settings/billing"),
          },
          {
            title: "Integrations",
            url: "/dashboard/organization-settings/integrations",
            isActive: isActive("/dashboard/organization-settings/integrations"),
          },
          {
            title: "API Keys",
            url: "/dashboard/organization-settings/api-keys",
            isActive: isActive("/dashboard/organization-settings/api-keys"),
          },
        ],
      },
    ],
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavTeam />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks.navMain} />
        <NavAdmin items={navLinks.admin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
