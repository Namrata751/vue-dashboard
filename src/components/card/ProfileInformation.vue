<script setup lang="ts">
import { ref, reactive } from "vue";
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
import Label from "../ui/label/Label.vue";
import { personalInformationStore } from "@/stores/personalInformationStore";

const store = personalInformationStore();
const open = ref(false);

const form = reactive({
	currentAddress: store.currentAddress,
	permanentAddress: store.permanentAddress,
	personalPhone: store.personalPhone,
});

function resetForm() {
	form.currentAddress = store.currentAddress;
	form.permanentAddress = store.permanentAddress;
	form.personalPhone = store.personalPhone;
}

function handleOpenChange(isOpen: boolean) {
	open.value = isOpen;
	if (isOpen) resetForm();
}

function handleSave() {
	store.updatePersonalInformation({ ...form });
	open.value = false;
}
</script>

<template>
	<div>
		<h2 class="font-medium mb-3 text-lg">Personal Information</h2>
		<div class="border rounded p-2 bg-white">
			<div class="flex justify-between">
				<h3 class="text-brand-primary font-medium mb-2">
					Address and Contact
				</h3>

				<Dialog :open="open" @update:open="handleOpenChange">
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
							<DialogTitle>Edit Address and Contact</DialogTitle>
						</DialogHeader>
						<div class="grid gap-4">
							<div class="grid gap-2">
								<Label for="current-address"
									>Current Address</Label
								>
								<Input
									id="current-address"
									name="currentAddress"
									v-model="form.currentAddress"
								/>
							</div>
							<div class="grid gap-2">
								<Label for="permanent-address"
									>Permanent Address</Label
								>
								<Input
									id="permanent-address"
									name="permanentAddress"
									v-model="form.permanentAddress"
								/>
							</div>
							<div class="grid gap-2">
								<Label for="personal-phone"
									>Personal Phone</Label
								>
								<Input
									id="personal-phone"
									name="personalPhone"
									v-model="form.personalPhone"
								/>
							</div>
						</div>
						<DialogFooter>
							<DialogClose as-child>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button @click="handleSave">Save</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			<div class="space-y-2">
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Current Address:</p>
					<label class="text-brand-primary">{{
						store.currentAddress
					}}</label>
				</div>
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Permanent Address:</p>
					<label class="text-brand-primary">{{
						store.permanentAddress
					}}</label>
				</div>
				<div class="flex items-center gap-2">
					<p class="font-medium min-w-40">Personal Phone</p>
					<label class="text-brand-primary">{{
						store.personalPhone
					}}</label>
				</div>
			</div>
		</div>
	</div>
</template>
