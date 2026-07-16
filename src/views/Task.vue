<template>
	<div class="flex h-full bg-gray-50">
		<div
			class="relative shrink-0 transition-all duration-300"
			:class="showSidebar ? 'w-[320px]' : 'w-0'"
		>
			<aside
				class="absolute inset-y-0 left-0 w-[320px] overflow-hidden border-r border-gray-200 bg-white px-5 py-6 transition-all duration-300"
				:class="
					showSidebar
						? 'translate-x-0 opacity-100'
						: '-translate-x-full opacity-0'
				"
			>
				<h1 class="text-lg font-semibold text-text-primary">Boards</h1>

				<input
					v-model="filterText"
					type="text"
					placeholder="filter boards"
					class="mb-6 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
				/>

				<div class="mb-6">
					<div class="mb-2 flex items-center gap-2">
						<h2 class="text-base font-semibold text-text-primary">
							My Boards
						</h2>
						<button
							class="flex h-5 w-5 items-center justify-center text-gray-500 hover:text-gray-800"
							@click="createBoard"
						>
							<Plus class="h-4 w-4" />
						</button>
					</div>

					<ul class="space-y-1">
						<li v-for="board in myBoards" :key="board.name">
							<button
								class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
							>
								<LayoutGrid class="h-4 w-4 text-gray-500" />
								{{ board.name }}
							</button>
						</li>
					</ul>
				</div>

				<div>
					<h2 class="text-base font-semibold text-text-primary">
						Team Boards
					</h2>
				</div>
			</aside>

			<button
				@click="showSidebar = !showSidebar"
				class="absolute -right-4 top-24 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
			>
				<ChevronLeft v-if="showSidebar" class="h-4 w-4" />
				<ChevronRight v-else class="h-4 w-4" />
			</button>
		</div>

		<main class="flex-1 px-8 py-6">
			<div class="mb-5 flex items-center gap-2">
				<User class="h-5 w-5 text-gray-800" />
				<h2 class="text-lg font-semibold text-text-primary">
					My Boards
				</h2>
				<button
					class="flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100"
					@click="createBoard"
				>
					<Plus class="h-4 w-4" />
				</button>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div
					v-for="board in myBoards"
					:key="board.name"
					class="rounded-lg bg-white p-6 shadow"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900">
						{{ board.name }}
					</h3>

					<div
						class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600"
					>
						<span class="flex items-center gap-1.5">
							On Track
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white"
							>
								{{ board.onTrack }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Behind
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white"
							>
								{{ board.behind }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Overdue
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white"
							>
								{{ board.overdue }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Others
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white"
							>
								{{ board.others }}
							</span>
						</span>
					</div>
				</div>
			</div>

			<div class="mb-4 mt-10 flex items-center gap-2">
				<Users class="h-5 w-5 text-gray-800" />
				<h2 class="text-xl font-bold text-gray-900">Team Boards</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div
					v-for="board in teamBoards"
					:key="board.name"
					class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
				>
					<h3 class="mb-4 text-lg font-semibold text-text-primary">
						{{ board.name }}
					</h3>

					<div
						class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600"
					>
						<span class="flex items-center gap-1.5">
							On Track
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-semibold text-white"
							>
								{{ board.onTrack }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Behind
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white"
							>
								{{ board.behind }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Overdue
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white"
							>
								{{ board.overdue }}
							</span>
						</span>
						<span class="flex items-center gap-1.5">
							Others
							<span
								class="flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white"
							>
								{{ board.others }}
							</span>
						</span>
					</div>
				</div>
			</div>
		</main>

		<Dialog v-model:open="addBoardOpen">
			<DialogContent class="sm:max-w-120">
				<DialogHeader>
					<DialogTitle>Add Board</DialogTitle>
				</DialogHeader>

				<div class="space-y-5 py-2">
					<div>
						<label class="mb-1.5 block text-sm text-gray-700">
							Board Title <span class="text-red-500">*</span>
						</label>
						<Input v-model="form.name" type="text" />
					</div>

					<div>
						<label class="mb-1.5 block text-sm text-gray-700"
							>Board Description</label
						>
						<textarea
							v-model="form.description"
							rows="3"
							class="border rounded p-3 w-full"
						/>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="mb-1.5 block text-sm text-gray-700">
								Start Date <span class="text-red-500">*</span>
							</label>
							<Popover>
								<PopoverTrigger as-child>
									<Button
										variant="outline"
										class="w-full justify-between text-left font-normal text-gray-500"
									>
										{{
											startDate
												? startDate.toString()
												: "yyyy-mm-dd"
										}}
										<span class="text-xl leading-none"
											>🇺🇸</span
										>
									</Button>
								</PopoverTrigger>
								<PopoverContent class="w-auto p-0">
									<Calendar
										v-model="form.start_date"
										mode="single"
									/>
								</PopoverContent>
							</Popover>
						</div>

						<div>
							<label class="mb-1.5 block text-sm text-gray-700">
								Due Date <span class="text-red-500">*</span>
							</label>
							<Popover>
								<PopoverTrigger as-child>
									<Button
										variant="outline"
										class="w-full justify-between text-left font-normal text-gray-500"
									>
										{{
											dueDate
												? dueDate.toString()
												: "yyyy-mm-dd"
										}}
										<span class="text-xl leading-none"
											>🇺🇸</span
										>
									</Button>
								</PopoverTrigger>
								<PopoverContent class="w-auto p-0">
									<Calendar
										v-model="form.due_date"
										mode="single"
									/>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					<div>
						<label class="mb-1.5 block text-sm text-gray-700">
							Board Owner <span class="text-red-500">*</span>
						</label>
						<Select v-model="form.owner">
							<SelectTrigger class="w-full">
								<SelectValue placeholder="select an owner..." />
							</SelectTrigger>
							<SelectContent>
								<SelectItem
									v-for="owner in boardOwners"
									:key="owner.id"
									:value="owner.id"
								>
									{{ owner.name }}
								</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div class="flex items-center gap-2">
						<Switch v-model:checked="taskRatingEnabled" />
						<span class="text-sm text-gray-800"
							>Enable Task Rating and Owner Approval</span
						>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" @click="addBoardOpen = false"
						>Cancel</Button
					>
					<Button @click="saveBoard">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import {
	Plus,
	LayoutGrid,
	ChevronLeft,
	ChevronRight,
	User,
	Users,
} from "lucide-vue-next";
import { Switch } from "reka-ui/namespaced";
import DialogFooter from "@/components/ui/dialog/DialogFooter.vue";
import Select from "@/components/ui/select/Select.vue";
import Popover from "@/components/ui/popover/Popover.vue";
import PopoverTrigger from "@/components/ui/popover/PopoverTrigger.vue";
import Button from "@/components/ui/button/Button.vue";
import PopoverContent from "@/components/ui/popover/PopoverContent.vue";
import Dialog from "@/components/ui/dialog/Dialog.vue";
import DialogContent from "@/components/ui/dialog/DialogContent.vue";
import DialogHeader from "@/components/ui/dialog/DialogHeader.vue";
import DialogTitle from "@/components/ui/dialog/DialogTitle.vue";
import Calendar from "@/components/ui/calendar/Calendar.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";

import { useTask } from "@/stores/taskStore";
import Input from "@/components/ui/input/Input.vue";

const showSidebar = ref(true);
const taskStore = useTask();

const filterText = ref("");

const form = reactive({
	name: "",
	description: "",
	start_date: "",
	due_date: "",
	owner: "",
});

// Wire these up to your API.
const myBoards = ref([]);

const teamBoards = ref([]); // empty state, matches the screenshot
const boardOwners = ref([
	{
		id: 1,
		name: "boss",
	},
]);
const addBoardOpen = ref(false);
function createBoard() {
	// TODO: open your create-board flow.
	console.log("here");
	addBoardOpen.value = true;
}

function saveBoard() {
	console.log("saving", taskStore.tasks);
	taskStore.saveTask(form);
}

onMounted(() => {
	myBoards.value = taskStore.tasks;
});
</script>
