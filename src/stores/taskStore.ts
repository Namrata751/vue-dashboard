import { defineStore } from "pinia";

export const useTask = defineStore("taskStore", {
	// arrow function recommended for full type inference
	state: () => {
		return {
			// all these properties will have their type inferred automatically
			tasks: [
				{
					id: 1,
					name: "My Todo",
					description: "todo description",
					onTrack: 0,
					behind: 0,
					overdue: 0,
					others: 0,
				},
			],
		};
	},
	actions: {
		saveTask(data: any) {
			let newTask = {
				id: Math.random(),
				name: data.name,
				description: data.description,
				onTrack: 0,
				behind: 0,
				overdue: 0,
				others: 0,
			};

			console.log("n ", newTask);
			this.tasks.push(newTask);
		},
	},
	persist: true,
});
