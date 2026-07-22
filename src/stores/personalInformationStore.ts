import { defineStore } from "pinia";

interface PersonalInformationState {
	currentAddress: string;
	permanentAddress: string;
	personalPhone: string;
}

export const personalInformationStore = defineStore(
	"personalInformationStoreId",
	{
		state: (): PersonalInformationState => ({
			currentAddress: "Bausundhara",
			permanentAddress: "Bausundhara",
			personalPhone: "9843000000",
		}),
		getters: {
			maskedPhone: (state) => {},
		},
		actions: {
			updatePersonalInformation(
				payload: Partial<PersonalInformationState>,
			) {
				this.$patch(payload);
			},
			deletePersonalInformation() {
				this.$patch({
					currentAddress: "",
					permanentAddress: "",
					personalPhone: "",
				});
			},
		},
		persist: true,
	},
);
