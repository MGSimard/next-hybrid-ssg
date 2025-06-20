"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { NavTeam } from "@/components/sidebar/nav-team";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavAdmin } from "@/components/sidebar/nav-admin";
import { NavUser } from "@/components/sidebar/nav-user";
import { Activity, ChartNoAxesColumnIncreasing, Gauge, Settings2, ShieldCheck, Target } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: Gauge,
      isActive: true,
    },
    {
      title: "Link Two",
      url: "/dashboard/link-two",
      icon: Activity,
    },
    {
      title: "Link Three",
      url: "/dashboard/link-three",
      icon: Target,
    },
    {
      title: "Link Four",
      url: "/dashboard/link-four",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Link Five",
      url: "/dashboard/link-five",
      icon: ShieldCheck,
    },
  ],
  admin: [
    {
      title: "Organization Settings",
      url: "/dashboard/organization-settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/organization-settings",
        },
        {
          title: "Team",
          url: "/dashboard/organization-settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/organization-settings/billing",
        },
        {
          title: "Integrations",
          url: "/dashboard/organization-settings/integrations",
        },
        {
          title: "API Keys",
          url: "/dashboard/organization-settings/api-keys",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavTeam />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.admin} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
