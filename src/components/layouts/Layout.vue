<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "./Header.vue";
</script>

<template>
	<SidebarProvider>
		<AppSidebar />
		<main class="w-full">
			<Header />
			<slot />
		</main>
	</SidebarProvider>
</template>
