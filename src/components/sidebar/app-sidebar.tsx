"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavAdmin } from "@/components/sidebar/nav-admin";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Activity,
  AudioWaveform,
  ChartNoAxesColumnIncreasing,
  Command,
  GalleryVerticalEnd,
  PanelsTopLeft,
  Settings2,
  ShieldCheck,
  Target,
} from "lucide-react";
import { NavTeam } from "./nav-team";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: PanelsTopLeft,
      isActive: true,
    },
    {
      title: "Link Two",
      url: "#",
      icon: Activity,
    },
    {
      title: "Link Three",
      url: "#",
      icon: Target,
    },
    {
      title: "Link Four",
      url: "#",
      icon: ChartNoAxesColumnIncreasing,
    },
    {
      title: "Link Five",
      url: "#",
      icon: ShieldCheck,
    },
  ],
  admin: [
    {
      title: "Organization Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Integrations",
          url: "#",
        },
        {
          title: "API Keys",
          url: "#",
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
