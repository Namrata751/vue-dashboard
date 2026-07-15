<script setup lang="ts">
import {
	Home,
	User,
	FileText,
	Wallet,
	CheckSquare,
	Clock,
	ClipboardList,
	Award,
	Target,
	GraduationCap,
	BookOpen,
	TrendingUp,
	Banknote,
	ShieldCheck,
	FileWarning,
	Edit,
	Users,
	PartyPopper,
} from "@lucide/vue";
import Logo from "../assets/logo.png";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../components/ui/sidebar";
const groups = [
	{
		label: "My Apps",
		items: [
			{
				title: "Home Page",
				url: "/",
				icon: Home,
			},
			{
				title: "My Profile",
				url: "profile",
				icon: User,
			},
			{
				title: "My Requests",
				url: "#",
				icon: FileText,
			},
			{
				title: "Leave Balance",
				url: "#",
				icon: Wallet,
			},
			{
				title: "Tasks",
				url: "#",
				icon: CheckSquare,
			},
			{
				title: "Timesheet",
				url: "#",
				icon: Clock,
			},
			{
				title: "Daily Work Logs",
				url: "#",
				icon: ClipboardList,
			},
			{
				title: "KSAs",
				url: "#",
				icon: Award,
			},
			{
				title: "Goals and KPIs",
				url: "#",
				icon: Target,
			},
			{
				title: "Learning",
				url: "/learning",
				icon: GraduationCap,
			},
			{
				title: "Trainings",
				url: "#",
				icon: BookOpen,
			},
			{
				title: "Performance",
				url: "#",
				icon: TrendingUp,
			},
			{
				title: "Pay and Taxes",
				url: "#",
				icon: Banknote,
			},
			{
				title: "Insurance Records",
				url: "#",
				icon: ShieldCheck,
			},
			{
				title: "Insurance Claims",
				url: "#",
				icon: FileWarning,
			},
			{
				title: "Data Change",
				url: "#",
				icon: Edit,
			},
		],
	},

	{
		label: "My Team Apps",
		items: [
			{ title: "My Team", url: "#", icon: Users },
			{ title: "Team Events", url: "#", icon: PartyPopper },
		],
	},
];
</script>

<template>
	<Sidebar>
		<SidebarContent>
			<a
				href=""
				class="py-2 px-4 flex border-b border-white/12 items-center gap-2"
			>
				<img :src="Logo" alt="" />
			</a>
			<SidebarGroup v-for="group in groups" :key="group.label">
				<SidebarGroupContent>
					<h2 class="px-4 text-white/60 mb-2">{{ group.label }}</h2>

					<SidebarMenu>
						<SidebarMenuItem
							v-for="item in group.items"
							:key="item.title"
						>
							<SidebarMenuButton as-child>
								<a
									:href="item.url"
									class="text-red-white gap-x-1.5"
								>
									<component :is="item.icon" />
									<span>{{ item.title }}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	</Sidebar>
</template>
