<template>
	<div class="bg-gray-100 px-6 py-6 h-full">
		<div class="flex items-center justify-between mb-4">
			<h2 class="font-semibold text-lg text-text-primary">
				Leave Balances
			</h2>

			<Dialog v-model:open="leaveRequestOpen">
				<DialogTrigger as-child>
					<Button variant="outline">
						<Plus class="mr-1 h-4 w-4" />
						Leave Request
					</Button>
				</DialogTrigger>

				<DialogContent class="sm:max-w-160">
					<DialogHeader>
						<DialogTitle>Leave Request</DialogTitle>
					</DialogHeader>

					<div class="space-y-5 py-2">
						<div>
							<label class="mb-1.5 block text-sm text-gray-700">
								Dates <span class="text-red-500">*</span>
							</label>
							<div class="flex items-center gap-2">
								<Popover>
									<PopoverTrigger as-child>
										<Button
											variant="outline"
											class="w-max justify-start text-left font-normal text-gray-500"
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
										<Calendar
											v-model="startDate"
											mode="single"
										/>
									</PopoverContent>
								</Popover>

								<Popover>
									<PopoverTrigger as-child>
										<Button
											variant="outline"
											class="w-max justify-start text-left font-normal text-gray-500"
										>
											<CalendarIcon
												class="mr-2 h-4 w-4 text-gray-400"
											/>
											{{
												endDate
													? endDate.toString()
													: "yyyy-mm-dd"
											}}
										</Button>
									</PopoverTrigger>
									<PopoverContent class="w-auto p-0">
										<Calendar
											v-model="endDate"
											mode="single"
										/>
									</PopoverContent>
								</Popover>
							</div>
						</div>

						<Collapsible v-model:open="balancesOpen">
							<CollapsibleTrigger
								class="flex items-center gap-1 text-sm font-medium text-brand-primary"
							>
								Leave balances
								<ChevronDown
									class="h-4 w-4 transition-transform"
									:class="{ 'rotate-180': balancesOpen }"
								/>
							</CollapsibleTrigger>
							<CollapsibleContent class="mt-2">
								<div
									class="overflow-hidden rounded border border-gray-200"
								>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead
													>Leave Name</TableHead
												>
												<TableHead class="text-right"
													>Current Balance</TableHead
												>
											</TableRow>
										</TableHeader>
										<TableBody>
											<TableRow
												v-for="row in leaveRows"
												:key="row.name"
											>
												<TableCell>{{
													row.name
												}}</TableCell>
												<TableCell class="text-right">{{
													row.balance
												}}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</div>
							</CollapsibleContent>
						</Collapsible>

						<div>
							<label class="mb-1.5 block text-sm text-gray-700">
								Leave type <span class="text-red-500">*</span>
							</label>
							<Select v-model="leaveType">
								<SelectTrigger class="w-full">
									<SelectValue
										placeholder="select an option..."
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										v-for="lt in leaveRows"
										:key="lt.name"
										:value="lt.name"
									>
										{{ lt.name }}
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<!-- Reason -->
						<div>
							<label class="mb-1.5 block text-sm text-gray-700">
								Reason <span class="text-red-500">*</span>
							</label>
							<textarea
								class="border w-full rounded p-2"
								v-model="reason"
								rows="4"
								placeholder=""
							/>
						</div>

						<!-- Substitute -->
						<div>
							<label class="mb-1.5 block text-sm text-gray-700"
								>Substitute in my absence</label
							>
							<Select v-model="substitute">
								<SelectTrigger class="w-full">
									<SelectValue
										placeholder="search and select"
									/>
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										v-for="person in substitutes"
										:key="person"
										:value="person"
									>
										{{ person }}
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<label class="mb-1.5 block text-sm text-gray-700"
								>Upload Documents</label
							>
							<label
								class="flex cursor-pointer items-center gap-3 rounded border border-gray-200 px-4 py-3 hover:bg-gray-50"
							>
								<FileUp class="h-5 w-5 text-gray-500" />
								<div>
									<div class="text-sm text-gray-700">
										Upload image or document
									</div>
									<div class="text-xs text-gray-400">
										PNG, JPG, GIF, WebP, PDF, DOC, DOCX (max
										5 MB)
									</div>
								</div>
								<input
									type="file"
									class="hidden"
									@change="handleFileUpload"
								/>
							</label>
						</div>

						<Collapsible v-model:open="approvalOpen">
							<CollapsibleTrigger
								class="flex items-center gap-1 text-sm font-medium text-gray-800"
							>
								Approval
								<ChevronRight
									class="h-4 w-4 transition-transform"
									:class="{ 'rotate-90': approvalOpen }"
								/>
							</CollapsibleTrigger>
							<CollapsibleContent
								class="mt-2 text-sm text-gray-500"
							>
								Your request will be sent to your reporting
								manager for approval.
							</CollapsibleContent>
						</Collapsible>
					</div>

					<DialogFooter>
						<Button
							variant="outline"
							@click="leaveRequestOpen = false"
							>Cancel</Button
						>
						<Button @click="sendRequest">Send Request</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>

		<div class="overflow-hidden rounded border border-gray-200 bg-white">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Leave Name</TableHead>
						<TableHead>Current Balance</TableHead>
						<TableHead class="w-40"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow v-for="row in leaveRows" :key="row.name">
						<TableCell class="text-brand-primary">{{
							row.name
						}}</TableCell>
						<TableCell>{{ row.balance }}</TableCell>
						<TableCell>
							<Button
								variant="outline"
								size="sm"
								@click="openViewDetails(row)"
							>
								<ListChecks class="mr-1 h-4 w-4" />
								View Details
							</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>

		<Dialog v-model:open="viewDetailsOpen">
			<DialogContent class="sm:max-w-160">
				<DialogHeader>
					<DialogTitle
						>{{ employeeName }} - {{ employeeId }}</DialogTitle
					>
				</DialogHeader>

				<Select v-model="selectedYear">
					<SelectTrigger class="w-35">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem
							v-for="year in yearOptions"
							:key="year"
							:value="year"
						>
							{{ year }}
						</SelectItem>
					</SelectContent>
				</Select>

				<Tabs
					v-model="detailTab"
					default-value="summary"
					class="mt-2 w-full"
				>
					<TabsList
						class="h-auto w-full justify-start rounded-none border-b border-gray-200 bg-transparent p-0"
					>
						<TabsTrigger
							value="summary"
							class="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-500 data-[state=active]:border-b-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
						>
							Year Summary
						</TabsTrigger>
						<TabsTrigger
							value="log"
							class="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-500 data-[state=active]:border-b-brand-primary data-[state=active]:text-brand-primary data-[state=active]:shadow-none"
						>
							Leave Log
						</TabsTrigger>
					</TabsList>

					<TabsContent value="summary" class="m-0 pt-3">
						<div
							class="overflow-hidden rounded border border-gray-200"
						>
							<Table>
								<TableBody>
									<TableRow
										v-for="row in yearSummaryRows"
										:key="row.label"
									>
										<TableCell class="text-gray-700">{{
											row.label
										}}</TableCell>
										<TableCell
											class="text-right text-gray-500"
											>{{ row.value }}</TableCell
										>
									</TableRow>
								</TableBody>
							</Table>
						</div>
					</TabsContent>

					<TabsContent value="log" class="m-0 pt-3">
						<div
							class="overflow-hidden rounded border border-gray-200"
						>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Type</TableHead>
										<TableHead class="text-right"
											>Days</TableHead
										>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow v-if="leaveLog.length === 0">
										<TableCell
											colspan="3"
											class="py-10 text-center text-gray-500"
										>
											No leave log entries yet.
										</TableCell>
									</TableRow>
									<TableRow
										v-for="(entry, i) in leaveLog"
										:key="i"
									>
										<TableCell>{{ entry.date }}</TableCell>
										<TableCell>{{ entry.type }}</TableCell>
										<TableCell class="text-right">{{
											entry.days
										}}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>
					</TabsContent>
				</Tabs>

				<DialogFooter>
					<Button variant="outline" @click="viewDetailsOpen = false"
						>Close</Button
					>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</template>

<script setup>
import { ref } from "vue";
import {
	Plus,
	CalendarIcon,
	ChevronDown,
	ChevronRight,
	FileUp,
	ListChecks,
} from "lucide-vue-next";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Leave balances table data — wire up to your API.
const leaveRows = ref([
	{ name: "Sick Leave", balance: 0 },
	{ name: "Annual Leave", balance: 0 },
]);

// Leave Request dialog state
const leaveRequestOpen = ref(false);
const balancesOpen = ref(false);
const approvalOpen = ref(false);
const startDate = ref(null);
const endDate = ref(null);
const leaveType = ref("");
const reason = ref("");
const substitute = ref("");
const substitutes = ["Alex Rai", "Bina Shrestha", "Chetan Gurung"];
const uploadedFile = ref(null);

function handleFileUpload(e) {
	uploadedFile.value = e.target.files?.[0] ?? null;
	// TODO: upload the file to your backend/storage.
}

function sendRequest() {
	// TODO: submit { startDate, endDate, leaveType, reason, substitute, uploadedFile } to your API.
	leaveRequestOpen.value = false;
}

// View Details dialog state
const viewDetailsOpen = ref(false);
const employeeName = ref("Namrata Khati");
const employeeId = ref("68");
const yearOptions = ["2082/2083", "2081/2082"];
const selectedYear = ref("2082/2083");
const detailTab = ref("summary");

const yearSummaryRows = ref([
	{ label: "Last year balance", value: "-" },
	{ label: "Added this year", value: "-" },
	{ label: "Adjusted this year", value: "-" },
	{ label: "Total", value: "-" },
	{ label: "Leaves taken this year", value: "-" },
	{ label: "Encashed", value: "-" },
	{ label: "Lapsed", value: "-" },
	{ label: "Leaves taken next leave year", value: "-" },
	{ label: "Current leave balance", value: "-" },
	{ label: "Leaves pending approval", value: "-" },
]);

const leaveLog = ref([]); // wire up to your API

function openViewDetails(row) {
	detailTab.value = "summary";
	viewDetailsOpen.value = true;
}
</script>
