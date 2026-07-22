<script setup lang="ts">
import { ref } from "vue";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Gif from "../assets/user.gif";
import {
	FileText,
	ListTree,
	Wallet,
	ShieldCheck,
	User,
	ClipboardList,
	LineChart,
	Star,
	GraduationCap,
	School,
	Folder,
	Network,
	ChevronDown,
} from "lucide-vue-next";
// import Profile from "../assets/namrata.jpg";
import ProfileInformation from "@/components/card/ProfileInformation.vue";

const activeTab = ref("profile");

const tabs = [
	{ value: "profile", label: "Profile", icon: FileText },
	{ value: "events", label: "Events And History", icon: ListTree },
	{ value: "pay", label: "Pay & Benefits", icon: Wallet },
	{ value: "accounts", label: "Accounts & Tax", icon: ShieldCheck },
	{ value: "personal", label: "Personal Information", icon: User },
	{ value: "job-description", label: "Job Description", icon: ClipboardList },
	{ value: "goals", label: "Goals & KPIs", icon: LineChart },
	{ value: "performance", label: "Performance", icon: Star },
	{ value: "learning", label: "Learning", icon: GraduationCap },
	{ value: "education", label: "Education & Training", icon: School },
	{ value: "documents", label: "Documents", icon: Folder },
];

const employee = {
	name: "Namrata Khati",
	title: "Software Engineer",
	department: "Frontend",
	eid: "EID-68",
	ein: "EIN-68",
	photo: Gif,
	job: {
		level: "Software Engineer",
		jobTitle: "Software Engineer",
		status: "Permanent",
		branch: "Head Office",
		department: "Frontend",
		province: "Bagmati",
		jobDescription: "-",
		servicePeriod: "1 year 6 months 7 days",
		joinDate: "Poush 24, 2081 (January 8, 2025)",
	},
	reporting: {
		reportsTo: "Manager not defined",
		subordinates: "0 subordinates",
	},
	contact: {
		email: "namrata.khati@yenyasoft.com",
		phone: "9843695283",
	},
};
</script>

<template>
	<div class="flex min-h-screen bg-gray-100 text-sm">
		<Tabs
			v-model="activeTab"
			orientation="vertical"
			class="flex w-full flex-col md:flex-row"
		>
			<aside
				class="md:w-72 shrink-0 border-r border-gray-200 bg-white p-5"
			>
				<img
					:src="employee.photo"
					alt="Employee photo"
					class="mb-4 h-56 w-full rounded-lg object-cover"
				/>

				<h2 class="text-lg font-semibold text-brand-primary">
					{{ employee.name }}
				</h2>
				<p class="mt-0.5 text-gray-700">{{ employee.title }}</p>
				<p class="text-gray-500">{{ employee.department }}</p>

				<div class="mt-3 flex gap-2">
					<span
						class="rounded bg-brand-primary px-2 py-1 text-xs font-medium text-white"
					>
						{{ employee.eid }}
					</span>
					<span
						class="rounded bg-gray-700 px-2 py-1 text-xs font-medium text-white"
					>
						{{ employee.ein }}
					</span>
				</div>

				<button
					class="mt-4 flex h-9 w-9 items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"
					aria-label="Org chart"
				>
					<Network class="h-4 w-4" />
				</button>

				<div class="my-4 border-t border-gray-200" />

				<TabsList
					class="flex h-auto w-full flex-col items-stretch gap-0.5 bg-transparent p-0"
				>
					<TabsTrigger
						v-for="tab in tabs"
						:key="tab.value"
						:value="tab.value"
						class="flex w-full items-center justify-start gap-3 rounded px-3 py-2 text-left text-gray-600 data-[state=active]:bg-blue-50 data-[state=active]:text-brand-primary data-[state=active]:shadow-none hover:bg-gray-50"
					>
						<component :is="tab.icon" class="h-4 w-4 shrink-0" />
						<span>{{ tab.label }}</span>
					</TabsTrigger>
				</TabsList>
			</aside>

			<main class="flex-1 overflow-y-auto p-4">
				<TabsContent value="profile" class="mt-0 space-y-4">
					<div class="flex items-center justify-between">
						<h1 class="text-lg font-semibold text-text-primary">
							Profile Summary
						</h1>
						<button
							class="flex h-6 w-6 items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50"
							aria-label="Collapse"
						>
							<ChevronDown class="h-4 w-4" />
						</button>
					</div>

					<section class="space-y-2">
						<h3 class="font-semibold text-text-primary">
							Job Information
						</h3>

						<div class="rounded-lg bg-white p-6 shadow">
							<dl class="grid grid-cols-[140px_1fr] gap-y-2">
								<dt class="font-medium text-text-primary">
									Level
								</dt>
								<dd class="text-brand-primary">
									{{ employee.job.level }}
								</dd>
								<dt class="font-medium text-text-primary">
									Job title
								</dt>
								<dd class="text-brand-primary">
									{{ employee.job.jobTitle }}
								</dd>
								<dt class="font-medium text-text-primary">
									Status
								</dt>
								<dd class="text-gray-700">
									{{ employee.job.status }}
								</dd>
							</dl>
						</div>

						<div class="rounded-lg bg-white p-6 shadow">
							<dl class="grid grid-cols-[140px_1fr] gap-y-2">
								<dt class="font-medium text-text-primary">
									Branch
								</dt>
								<dd class="text-gray-700">
									{{ employee.job.branch }}
								</dd>
								<dt class="font-medium text-text-primary">
									Department
								</dt>
								<dd class="text-gray-700">
									{{ employee.job.department }}
								</dd>
							</dl>
						</div>

						<div class="rounded-lg bg-white p-6 shadow">
							<dl class="grid grid-cols-[140px_1fr] gap-y-2">
								<dt class="font-medium text-text-primary">
									Province
								</dt>
								<dd class="text-gray-700">
									{{ employee.job.province }}
								</dd>
							</dl>
						</div>

						<div class="rounded-lg bg-white p-6 shadow">
							<dl class="grid grid-cols-[140px_1fr] gap-y-2">
								<dt class="font-medium text-text-primary">
									Job description
								</dt>
								<dd class="text-gray-700">
									{{ employee.job.jobDescription }}
								</dd>
								<dt class="font-medium text-text-primary">
									Service period
								</dt>
								<dd class="text-brand-primary">
									{{ employee.job.servicePeriod }}
								</dd>
								<dt class="font-medium text-text-primary">
									Join date
								</dt>
								<dd class="text-brand-primary">
									{{ employee.job.joinDate }}
								</dd>
							</dl>
						</div>
					</section>

					<section class="space-y-2">
						<h3 class="font-semibold text-text-primary">
							Reporting and Responsibility
						</h3>
						<div class="rounded-lg bg-white p-6 shadow">
							<dl class="grid grid-cols-[140px_1fr] gap-y-2">
								<dt class="font-medium text-text-primary">
									Reports to
								</dt>
								<dd class="text-gray-700">
									{{ employee.reporting.reportsTo }}
								</dd>
								<dt class="font-medium text-text-primary">
									Manager history
								</dt>
								<dd>
									<button
										class="text-brand-primary hover:underline"
									>
										view
									</button>
								</dd>
								<dt class="font-medium text-text-primary">
									Subordinates
								</dt>
								<dd class="flex items-center gap-1.5">
									<button
										class="text-brand-primary hover:underline"
									>
										{{ employee.reporting.subordinates }}
									</button>
									<Network
										class="h-3.5 w-3.5 text-brand-primary"
									/>
								</dd>
							</dl>
						</div>
					</section>

					<section class="space-y-2">
						<h3 class="font-semibold text-text-primary">
							Contact Information
						</h3>
						<div class="rounded-lg bg-white p-6 shadow">
							<p class="font-medium text-text-primary">
								Office Contact
							</p>
							<a
								:href="`mailto:${employee.contact.email}`"
								class="block text-brand-primary hover:underline"
							>
								{{ employee.contact.email }}
							</a>
							<p class="text-gray-700">
								{{ employee.contact.phone }}
							</p>
						</div>
					</section>
				</TabsContent>

				<TabsContent
					v-for="tab in tabs.filter((t) => t.value !== 'profile')"
					:key="tab.value"
					:value="tab.value"
					class="mt-0"
				>
					<ProfileInformation />
				</TabsContent>
			</main>
		</Tabs>
	</div>
</template>
