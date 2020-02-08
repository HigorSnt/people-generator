import axios from "axios/dist/axios";

const actions = {
	async addName(context, payload) {
		const name = payload;

		axios({
			url: "http://localhost:4000",
			method: "post",
			data: {
				query: `
                    mutation ($name: NameInput) {
                        newName: saveName(name: $name) {
                            id
                            type
                            value
                        }
                    }
                `,
				variables: {
					name
				}
			}
		}).then(response => {
			const query = response.data;
			const newName = query.data.newName;
			context.commit("addName", { name, newName });
			context.dispatch("generatePeople");
		});
	},

	async deleteName(context, payload) {
		const name = payload;

		axios({
			url: "http://localhost:4000",
			method: "post",
			data: {
				query: `
                    mutation($id: Int) {
                        deleted: deleteName(id: $id) 
                    }
                `,
				variables: {
					id: name.id
				}
			}
		}).then(() => {
			context.commit("deleteName", { name });
			context.dispatch("generatePeople");
		});
	},

	async getNames(context, payload) {
		const type = payload;

		return axios({
			url: "http://localhost:4000",
			method: "post",
			data: {
				query: `
                    query($type: String){
                        names: names (type: $type) {
                            id
                            type
                            value
                        }
                    }
                `,
				variables: {
					type
				}
			},
		}).then(response => {
			const query = response.data;
			context.commit("setNames", { type, names: query.data.names });
		});
	},

	async generatePeople(context) {
		axios({
			url: "http://localhost:4000",
			method: "post",
			data: {
				query: `
                    mutation{
                        people: generatePeople {
                            name
                            dateOfBirth
                            cpf
                        }
                    }
                `
			}
		}).then((response) => {
			const query = response.data;
			context.commit("setPeople", { people: query.data.people });
		});
	}
};

export default actions;