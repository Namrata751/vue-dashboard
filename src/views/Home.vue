<script setup lang="ts">
const actions = [
	{ label: "Leave Request", external: false },
	{ label: "Leave Balance", external: true },
	{ label: "Time Request", external: false },
	{ label: "Overtime Request", external: false },
	{ label: "Travel Request", external: false },
	{ label: "Allowance Request", external: false },
];

const attendance = [
	{
		date: "14 Tue",
		checkIn: "9:33a",
		checkOut: null,
		tags: ["Time"],
	},
	{
		date: "13 Mon",
		checkIn: "9:34a",
		checkOut: "6:08p",
		tags: [],
	},
	{
		date: "10 Fri",
		checkInLabel: "Check-in",
		checkOutLabel: "Check-out",
		tags: ["Leave", "Time"],
	},
];
</script>
<template>
	<div class="min-h-screen bg-gray-100 p-6">
		<div class="mb-4">
			<h1 class="text-2xl font-bold text-gray-900">
				Good Afternoon, Namrata Khati
			</h1>
			<div class="mt-1 flex items-center gap-2 text-sm text-gray-500">
				<span>Ashadh 30, 2083</span>
				<span class="text-gray-300">|</span>
				<span>July 14, 2026</span>
			</div>
		</div>

		<div class="mb-6 flex flex-wrap gap-3">
			<button
				v-for="action in actions"
				:key="action.label"
				class="flex items-center gap-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
			>
				{{ action.label }}
				<svg
					v-if="action.external"
					xmlns="http://www.w3.org/2000/svg"
					class="h-3.5 w-3.5 text-gray-400"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14 5h5m0 0v5m0-5L10 14M9 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-3"
					/>
				</svg>
			</button>
		</div>

		<div class="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1.4fr]">
			<div class="space-y-6">
				<div class="rounded-lg bg-white p-6 shadow">
					<h2 class="text-base font-semibold text-gray-900">
						Welcome to RigoHR
					</h2>
					<p class="mt-1 text-sm text-gray-500">
						Learn the amazing things you can do with RigoHR
					</p>
					<a
						href="#"
						class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline"
					>
						Learn more
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-3.5 w-3.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14 5h5m0 0v5m0-5L10 14M9 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-3"
							/>
						</svg>
					</a>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-semibold text-gray-900">
						Notices
					</h3>
					<div class="rounded-lg bg-white p-6 shadow">
						<p class="text-sm text-gray-400">
							all read, no new notices
						</p>
						<a
							href="#"
							class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
							All Notices
						</a>
					</div>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-semibold text-gray-900">
						To Do
					</h3>
					<div class="rounded-lg bg-white p-6 shadow">
						<p class="text-sm text-gray-400">
							all clear, nothing pending here
						</p>
					</div>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-semibold text-gray-900">
						My Requests
					</h3>
					<div class="rounded-lg bg-white p-6 shadow">
						<p class="text-sm text-gray-400">
							all clear. no pending request
						</p>
						<a
							href="#"
							class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
							My Requests
						</a>
					</div>
				</div>
			</div>

			<div class="space-y-6">
				<div class="rounded-lg bg-white p-6 text-center shadow">
					<div
						class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-400 text-2xl font-semibold text-white"
					>
						NK
					</div>
					<h2 class="mt-4 text-lg font-bold text-gray-900">
						Namrata Khati
					</h2>
					<p class="mt-1 text-sm font-semibold text-gray-700">
						Software Engineer
					</p>
					<p class="text-sm text-gray-500">Frontend, Head Office</p>
					<div
						class="mt-2 flex items-center justify-center gap-4 text-sm text-gray-500"
					>
						<span>EID 68</span>
						<span>EIN 68</span>
					</div>
					<button
						class="mt-4 rounded-lg bg-brand-primary px-3 py-1 text-sm font-semibold text-white"
					>
						Profile
					</button>
				</div>

				<div>
					<h3 class="mb-2 text-sm font-semibold text-gray-900">
						My Time and Attendance
					</h3>
					<div class="rounded bg-white p-4 shadow">
						<div class="space-y-2">
							<div
								v-for="record in attendance"
								:key="record.date"
								class="flex items-center gap-2 rounded-lg bg-gray-50 p-2"
							>
								<span
									class="w-16 flex-shrink-0 rounded bg-gray-100 px-2 py-1.5 text-center text-sm font-medium text-gray-700"
								>
									{{ record.date }}
								</span>

								<span
									v-if="record.checkIn"
									class="flex items-center gap-1 rounded bg-emerald-50 px-2 py-1.5 text-sm font-medium text-emerald-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M7 7l10 10M7 17V7h10"
										/>
									</svg>
									{{ record.checkIn }}
								</span>
								<span
									v-else-if="record.checkInLabel"
									class="rounded bg-gray-100 px-2 py-1.5 text-sm font-medium text-gray-500"
								>
									{{ record.checkInLabel }}
								</span>

								<span
									v-if="record.checkOut"
									class="flex items-center gap-1 rounded bg-blue-50 px-2 py-1.5 text-sm font-medium text-blue-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-3.5 w-3.5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17 17L7 7m10 0H7v10"
										/>
									</svg>
									{{ record.checkOut }}
								</span>
								<span
									v-else-if="record.checkOutLabel"
									class="rounded bg-rose-50 px-2 py-1.5 text-sm font-medium text-rose-400"
								>
									{{ record.checkOutLabel }}
								</span>

								<div class="ml-auto flex flex-shrink-0 gap-2">
									<span
										v-for="tag in record.tags"
										:key="tag"
										class="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600"
									>
										{{ tag }}
									</span>
								</div>
							</div>
						</div>

						<a
							href="#"
							class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							My Attendance Records
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
