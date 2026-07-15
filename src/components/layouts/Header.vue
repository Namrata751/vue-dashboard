<script setup lang="ts">
import User from "../../assets/namrata.jpg";
import SidebarTrigger from "../ui/sidebar/SidebarTrigger.vue";
import { KeyRound, IdCard, LogOut } from "lucide-vue-next";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../../components/ui/popover";
</script>
<template>
	<header
		class="bg-white px-4 border-b border-border-gray flex items-center justify-between h-15 sticky top-0"
	>
		<div class="p-2 flex gap-2">
			<SidebarTrigger />

			<h2 class="text-text-primary font-medium">Yenya Soft Pvt. Ltd.</h2>
		</div>

		<Popover>
			<PopoverTrigger as-child>
				<Button
					variant="outline"
					class="flex items-center cursor-pointer gap-2"
				>
					<img
						:src="User"
						alt=""
						class="size-8 rounded-full object-cover"
					/>
					<span class="block text-secondary font-medium text-sm"
						>Namrata Khati</span
					>
				</Button>
			</PopoverTrigger>
			<PopoverContent class="w-80 p-0 m-2">
				<div class="flex items-center gap-3 p-4 border-b">
					<img
						:src="User"
						alt=""
						class="size-10 rounded-full object-cover"
					/>
					<div class="flex flex-col">
						<span class="font-semibold text-brand-primary">
							Namrata Khati
						</span>
						<span class="text-sm text-muted-foreground">
							Software Engineer
						</span>
					</div>
				</div>

				<div class="flex flex-col py-1">
					<button
						class="border-b flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-accent transition-colors cursor-pointer"
						@click="onChangePassword"
					>
						<KeyRound class="size-4 text-muted-foreground" />
						<span>Change Password</span>
					</button>

					<button
						class="border-b flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-accent transition-colors cursor-pointer"
						@click="onPersonalProfile"
					>
						<IdCard class="size-4 text-muted-foreground" />
						<span>Personal Profile</span>
					</button>
				</div>

				<Separator />

				<div class="flex flex-col py-1">
					<button
						class="border-b flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-accent transition-colors cursor-pointer"
						@click="onSignOut"
					>
						<LogOut class="size-4 text-muted-foreground" />
						<span>Sign Out</span>
					</button>
				</div>

				<Separator />

				<!-- Version -->
				<div class="px-4 py-2.5">
					<span class="text-xs text-muted-foreground">
						Version: {{ appVersion }}
					</span>
				</div>
			</PopoverContent>
		</Popover>
	</header>
</template>
