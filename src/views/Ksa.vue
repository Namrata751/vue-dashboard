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
					<h1 class="font-semibold text-text-primary">Ksa</h1>
				</div>

				<TabsList
					class="flex h-auto w-full flex-col items-stretch gap-1 bg-transparent p-2"
				>
					<TabsTrigger
						value="my-log"
						class="flex w-full items-center justify-start gap-2 rounded-md px-2 py-2 text-sm font-medium text-gray-700 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
					>
						<ListChecks class="h-4 w-4" />
						My KSAs
					</TabsTrigger>
				</TabsList>
			</aside>

			<main class="flex-1 p-4">
				<TabsContent value="my-log" class="m-0">
					<h2 class="text-base font-semibold text-text-primary mb-4">
						My KSAs
					</h2>

					<div
						class="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-6 py-10 text-center"
					>
						<div
							class="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-gray-100"
						>
							<FileText class="h-5 w-5 text-gray-500" />
						</div>

						<p class="text-sm text-gray-500">Nothing here</p>
					</div>
				</TabsContent>
			</main>
		</Tabs>
	</div>
</template>

<script setup lang="ts">
import { Clock, ListChecks, FileText } from "lucide-vue-next";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
</script>
