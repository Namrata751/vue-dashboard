<template>
	<div class="flex h-full bg-gray-100">
		<Tabs
			v-model="activeTab"
			default-value="my-log"
			orientation="vertical"
			class="flex h-full w-full flex-row"
		>
			<aside class="w-55 shrink-0 border-r border-gray-200 bg-white">
				<div class="mb-5 flex items-center gap-2 px-2 border-b p-2">
					<Clock class="h-5 w-5 text-gray-800" />
					<h1 class="font-semibold text-text-primary">
						Goals and KPIs
					</h1>
				</div>

				<p class="px-2 text-sm font-semibold text-text-primary">
					Tracking
				</p>

				<TabsList
					class="flex h-auto w-full flex-col items-stretch gap-1 bg-transparent p-0"
				>
					<div class="p-2">
						<TabsTrigger
							value="my-log"
							class="flex w-full items-center justify-start gap-2 rounded px-2 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
						>
							<ListChecks class="h-4 w-4" />
							KPI Progress
						</TabsTrigger>
						<TabsTrigger
							value="history"
							class="flex w-full items-center justify-start gap-2 rounded px-2 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
						>
							<HistoryIcon class="h-4 w-4" />
							KPI Update
						</TabsTrigger>
						<TabsTrigger
							value="projects"
							class="flex w-full items-center justify-start gap-2 rounded px-2 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
						>
							<FolderOpen class="h-4 w-4" />
							KPI Tracking
						</TabsTrigger>
					</div>
					<TabsTrigger
						value="report"
						class="flex w-full items-center border-x-0 border-gray-200 justify-start gap-2 rounded-none px-2 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
					>
						<FileText class="h-4 w-4" />
						Goals and KPI History
					</TabsTrigger>
				</TabsList>
			</aside>

			<main class="flex-1 p-4">
				<TabsContent value="my-log" class="m-0">
					<h2 class="text-base font-semibold text-text-primary mb-4">
						Goals and KPI Progress
					</h2>

					<button
						class="mb-4 flex flex-col items-center rounded border border-brand-primary bg-white text-brand-primary px-2 py-2"
					>
						My Goals
					</button>
				</TabsContent>

				<TabsContent value="history" class="m-0">
					<h2 class="mb-4 text-lg font-bold text-gray-900">
						Work Log History
					</h2>

					<div class="mb-4 flex items-center gap-2">
						<Popover>
							<PopoverTrigger as-child>
								<button
									class="flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700"
								>
									<CalendarIcon
										class="h-4 w-4 text-gray-400"
									/>
									{{ formatDate(fromDate) }}
									<X
										class="h-3.5 w-3.5 text-gray-400 hover:text-gray-600"
										@click.stop="fromDate = null"
									/>
								</button>
							</PopoverTrigger>
							<PopoverContent class="w-auto p-0">
								<Calendar v-model="fromDate" mode="single" />
							</PopoverContent>
						</Popover>

						<Popover>
							<PopoverTrigger as-child>
								<button
									class="flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700"
								>
									<CalendarIcon
										class="h-4 w-4 text-gray-400"
									/>
									{{ formatDate(toDate) }}
									<X
										class="h-3.5 w-3.5 text-gray-400 hover:text-gray-600"
										@click.stop="toDate = null"
									/>
								</button>
							</PopoverTrigger>
							<PopoverContent class="w-auto p-0">
								<Calendar v-model="toDate" mode="single" />
							</PopoverContent>
						</Popover>

						<span
							class="text-xl leading-none"
							title="Holiday calendar: United States"
							>🇺🇸</span
						>

						<Button @click="applyHistoryFilter">Apply</Button>
					</div>

					<div
						class="overflow-hidden rounded border border-gray-200 bg-white"
					>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Log date</TableHead>
									<TableHead>Work logs</TableHead>
									<TableHead>Customer</TableHead>
									<TableHead>Project</TableHead>
									<TableHead>Log hours</TableHead>
									<TableHead>Submission date</TableHead>
									<TableHead>State</TableHead>
									<TableHead class="w-10"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow v-if="workHistory.length === 0">
									<TableCell
										colspan="8"
										class="py-10 text-center text-gray-500"
									>
										No work history found
									</TableCell>
								</TableRow>
								<TableRow
									v-for="(entry, i) in workHistory"
									:key="i"
								>
									<TableCell>{{ entry.logDate }}</TableCell>
									<TableCell>{{ entry.workLogs }}</TableCell>
									<TableCell>{{ entry.customer }}</TableCell>
									<TableCell>{{ entry.project }}</TableCell>
									<TableCell>{{ entry.logHours }}</TableCell>
									<TableCell>{{
										entry.submissionDate
									}}</TableCell>
									<TableCell>{{ entry.state }}</TableCell>
									<TableCell></TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</TabsContent>

				<TabsContent value="projects" class="m-0">
					<h2 class="mb-4 text-lg font-bold text-gray-900">
						Projects
					</h2>
					<div
						class="rounded-lg border border-gray-200 bg-white px-6 py-10 text-center text-sm text-gray-500"
					>
						No projects to show yet.
					</div>
				</TabsContent>

				<TabsContent value="report" class="m-0">
					<h2 class="mb-4 text-lg font-bold text-gray-900">
						My Work Report
					</h2>
					<div
						class="rounded-lg border border-gray-200 bg-white px-6 py-10 text-center text-sm text-gray-500"
					>
						No report data to show yet.
					</div>
				</TabsContent>
			</main>
		</Tabs>
	</div>
</template>

<script setup>
import { ref } from "vue";
import {
	Clock,
	ListChecks,
	History as HistoryIcon,
	FolderOpen,
	FileText,
	CalendarIcon,
	X,
} from "lucide-vue-next";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "@/components/ui/table";

const activeTab = ref("my-log");

// "Today" header card — replace with real date logic / your date library.
const today = {
	day: "16",
	weekday: "THU",
	full: "16 July, 2026",
};

function formatDate(date) {
	if (!date) return "yyyy-mm-dd";
	return date.toString();
}

// History filters — wire up to your API.
const fromDate = ref(null);
const toDate = ref(null);
const workHistory = ref([]); // empty state, matches the screenshot

function applyHistoryFilter() {
	// TODO: fetch work log history between fromDate.value and toDate.value.
}
</script>
