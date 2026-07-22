<template>
	<div class="bg-gray-100 px-6 py-6 h-full">
		<h2 class="font-semibold text-lg text-text-primary mb-4">
			My Trainings
		</h2>

		<Tabs v-model="activeTab" default-value="pending" class="">
			<TabsList
				class="h-auto w-full justify-start rounded-none border-b border-gray-200 bg-white px-2 pb-0"
			>
				<div class="flex">
					<TabsTrigger
						value="pending"
						class="flex items-center gap-2 rounded-none border-b-2 border-transparent py-1 px-3 text-gray-500 data-[state=active]:border-b-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
					>
						<Circle class="h-4 w-4" />
						Trainings
					</TabsTrigger>
					<TabsTrigger
						value="completed"
						class="flex items-center gap-2 rounded-none border-b-2 border-transparent py-1 px-3 text-gray-500 data-[state=active]:border-b-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
					>
						<CheckCircle2 class="h-4 w-4" />
						History
					</TabsTrigger>
				</div>
			</TabsList>

			<TabsContent value="pending" class="m-0">
				<div class="mb-4 flex items-center gap-2">
					<Select v-model="pendingType">
						<SelectTrigger class="w-45">
							<SelectValue placeholder="request types" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem
								v-for="t in requestTypes"
								:key="t.value"
								:value="t.value"
							>
								{{ t.label }}
							</SelectItem>
						</SelectContent>
					</Select>
					<Button @click="applyPending">Apply</Button>
				</div>

				<div class="overflow-hidden rounded border border-gray-200">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Request</TableHead>
								<TableHead>Days and event dates</TableHead>
								<TableHead>Request summary</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Request date</TableHead>
								<TableHead>State</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow v-if="pendingRows.length === 0">
								<TableCell
									colspan="7"
									class="py-14 text-center text-gray-500"
								>
									No results.
								</TableCell>
							</TableRow>
							<TableRow v-for="(row, i) in pendingRows" :key="i">
								<TableCell>{{ row.name }}</TableCell>
								<TableCell>{{ row.request }}</TableCell>
								<TableCell>{{ row.days }}</TableCell>
								<TableCell>{{ row.summary }}</TableCell>
								<TableCell>{{ row.amount }}</TableCell>
								<TableCell>{{ row.requestDate }}</TableCell>
								<TableCell>{{ row.state }}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>

				<div
					class="flex items-center justify-between px-1 pt-3 text-sm text-gray-500"
				>
					<span class="block w-full text-text-primary"
						>Page {{ pendingPage }} of {{ pendingTotalPages }}</span
					>
					<Pagination
						:total="pendingTotalPages * 10"
						:sibling-count="1"
						:items-per-page="10"
						:default-page="pendingPage"
						@update:page="pendingPage = $event"
					>
						<PaginationContent v-slot="{ items }">
							<PaginationPrevious />
							<template
								v-for="(item, index) in items"
								:key="index"
							>
								<PaginationItem
									v-if="item.type === 'page'"
									:value="item.value"
									:is-active="item.value === pendingPage"
								>
									{{ item.value }}
								</PaginationItem>
								<PaginationEllipsis v-else />
							</template>
							<PaginationNext />
						</PaginationContent>
					</Pagination>
				</div>
			</TabsContent>

			<TabsContent value="completed" class="m-0">
				<div class="mb-4 flex items-center gap-2">
					<Popover>
						<PopoverTrigger as-child>
							<Button
								variant="outline"
								class="w-40 justify-start text-left font-normal text-gray-600"
							>
								<CalendarIcon
									class="mr-2 h-4 w-4 text-gray-400"
								/>
								{{
									startDate
										? startDate.toString()
										: "yyyy-mm-dd"
								}}
							</Button>
						</PopoverTrigger>
						<PopoverContent class="w-auto p-0">
							<Calendar v-model="startDate" mode="single" />
						</PopoverContent>
					</Popover>

					<Popover>
						<PopoverTrigger as-child>
							<Button
								variant="outline"
								class="w-40 justify-start text-left font-normal text-gray-600"
							>
								<CalendarIcon
									class="mr-2 h-4 w-4 text-gray-400"
								/>
								{{
									endDate ? endDate.toString() : "yyyy-mm-dd"
								}}
							</Button>
						</PopoverTrigger>
						<PopoverContent class="w-auto p-0">
							<Calendar v-model="endDate" mode="single" />
						</PopoverContent>
					</Popover>

					<Select v-model="completedType">
						<SelectTrigger class="w-45">
							<SelectValue placeholder="request types" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem
								v-for="t in requestTypes"
								:key="t.value"
								:value="t.value"
							>
								{{ t.label }}
							</SelectItem>
						</SelectContent>
					</Select>
					<Button @click="applyCompleted">Apply</Button>
				</div>

				<div class="overflow-hidden rounded border border-gray-200">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Request</TableHead>
								<TableHead>Days and event dates</TableHead>
								<TableHead>Request summary</TableHead>
								<TableHead>Amount</TableHead>
								<TableHead>Request date</TableHead>
								<TableHead>State</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow v-if="completedRows.length === 0">
								<TableCell
									colspan="7"
									class="py-14 text-center text-gray-500"
								>
									No results.
								</TableCell>
							</TableRow>
							<TableRow
								v-for="(row, i) in completedRows"
								:key="i"
							>
								<TableCell>{{ row.name }}</TableCell>
								<TableCell>{{ row.request }}</TableCell>
								<TableCell>{{ row.days }}</TableCell>
								<TableCell>{{ row.summary }}</TableCell>
								<TableCell>{{ row.amount }}</TableCell>
								<TableCell>{{ row.requestDate }}</TableCell>
								<TableCell>{{ row.state }}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>

				<div
					class="flex items-center justify-between px-1 pt-3 text-sm text-gray-500"
				>
					<span class="block w-full text-text-primary"
						>Page {{ completedPage }} of
						{{ completedTotalPages }}</span
					>
					<Pagination
						:total="completedTotalPages * 10"
						:sibling-count="1"
						:items-per-page="10"
						:default-page="completedPage"
						@update:page="completedPage = $event"
					>
						<PaginationContent v-slot="{ items }">
							<PaginationPrevious />
							<template
								v-for="(item, index) in items"
								:key="index"
							>
								<PaginationItem
									v-if="item.type === 'page'"
									:value="item.value"
									:is-active="item.value === completedPage"
								>
									{{ item.value }}
								</PaginationItem>
								<PaginationEllipsis v-else />
							</template>
							<PaginationNext />
						</PaginationContent>
					</Pagination>
				</div>
			</TabsContent>
		</Tabs>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Circle, CheckCircle2, CalendarIcon } from "lucide-vue-next";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const requestTypes = [
	{ value: "all", label: "All request types" },
	{ value: "leave", label: "Leave" },
	{ value: "expense", label: "Expense" },
	{ value: "travel", label: "Travel" },
	{ value: "equipment", label: "Equipment" },
];

const activeTab = ref("pending");

// Pending Requests state
const pendingType = ref("all");
const pendingPage = ref(1);
const pendingRows = ref([]); // wire up to your API
const pendingTotalPages = computed(() =>
	Math.ceil(pendingRows.value.length / 10),
);

function applyPending() {
	pendingPage.value = 1;
	// TODO: fetch pending requests filtered by pendingType.value
}

// Completed state
const completedType = ref("all");
const startDate = ref(null);
const endDate = ref(null);
const completedPage = ref(1);
const completedRows = ref([]); // wire up to your API
const completedTotalPages = computed(() =>
	Math.ceil(completedRows.value.length / 10),
);

function applyCompleted() {
	completedPage.value = 1;
	// TODO: fetch completed requests filtered by completedType.value, startDate.value, endDate.value
}
</script>
