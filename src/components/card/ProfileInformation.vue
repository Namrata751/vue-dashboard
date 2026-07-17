<script setup lang="ts">
import { Edit } from "lucide-vue-next";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Input from "../ui/input/Input.vue";
import Button from "../ui/button/Button.vue";
</script>
<template>
	<div>
		<h2 class="font-medium mb-3 text-lg">Personal Information</h2>
		<div class="border rounded p-2 bg-white">
			<div class="flex justify-between">
				<h3 class="text-brand-primary font-medium mb-2">
					Address and Contact
				</h3>

				<Dialog>
					<form>
						<DialogTrigger as-child>
							<Button
								variant="outline"
								class="bg-gray-100 size-6 rounded flex items-center justify-center cursor-pointer border"
							>
								<Edit class="size-4 text-brand-primary" />
							</Button>
						</DialogTrigger>
						<DialogContent class="sm:max-w-131.25">
							<DialogHeader>
								<DialogTitle
									>Edit Address and Contact</DialogTitle
								>
							</DialogHeader>
							<div class="grid gap-4">
								<div class="grid gap-2">
									<Label for="name-1">Current Address</Label>
									<Input
										id="name-1"
										name="name"
										default-value="Pedro Duarte"
									/>
								</div>
								<div class="grid gap-2">
									<Label for="username-1"
										>Permanent Address</Label
									>
									<Input
										id="username-1"
										name="username"
										default-value="@peduarte"
									/>
								</div>
								<div class="grid gap-2">
									<Label for="username-1"
										>Personal Phone</Label
									>
									<Input
										id="username-1"
										name="username"
										default-value="@peduarte"
									/>
								</div>
							</div>
							<DialogFooter>
								<DialogClose as-child>
									<Button variant="outline"> Cancel </Button>
								</DialogClose>
								<Button type="submit"> Save </Button>
							</DialogFooter>
						</DialogContent>
					</form>
				</Dialog>
			</div>

			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Current Address:</p>
					<label class="text-brand-primary">Bausundhara</label>
				</div>
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Permanent Address:</p>
					<label class="text-brand-primary">Bausundhara</label>
				</div>
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Personal Phone</p>
					<label class="text-brand-primary">9843******</label>
				</div>
			</div>
		</div>
	</div>
</template>
