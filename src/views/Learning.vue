<template>
	<div class="bg-gray-100 px-6 py-6 h-full">
		<h2 class="font-semibold text-lg text-text-primary mb-4">Courses</h2>

		<div class="grid grid-cols-5 gap-4">
			<div
				v-for="card in cards"
				:key="card.label"
				@click="active = card.label"
				:class="[
					'rounded-lg p-7.5 text-center cursor-pointer transition-colors shadow flex flex-col justify-center items-center',
					active === card.label ? ' bg-brand-primary' : 'bg-white',
				]"
			>
				<template v-if="card.label === 'All Courses'">
					<span
						:class="[
							'font-medium',
							active === card.label
								? 'text-white'
								: 'text-gray-900',
						]"
					>
						All Courses
					</span>
				</template>
				<template v-else>
					<div
						:class="[
							'text-2xl font-bold',
							active === card.label
								? 'text-white'
								: 'text-gray-900',
						]"
					>
						{{ card.value }}
					</div>
					<div
						:class="[
							'text-sm mt-1',
							active === card.label
								? 'text-white/90'
								: 'text-gray-500',
						]"
					>
						{{ card.label }}
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const active = ref("All Courses");

const cards = ref([
	{ label: "Assigned", value: 0 },
	{ label: "In Progress", value: 0 },
	{ label: "Deadlines", value: 0 },
	{ label: "All Courses", value: 0 },
	{ label: "Completed", value: 0 },
]);
</script>
