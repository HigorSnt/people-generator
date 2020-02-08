const mutations = {
	addName(state, payload) {
		const { name, newName } = payload;
		state.names[name.type].push(newName);
	},
	deleteName(state, payload) {
		const { name } = payload;
		state.names[name.type].splice(
			state.names[name.type].indexOf(name), 1
		);
	},
	setNames(state, payload) {
		const { type, names } = payload;
		state.names[type] = names;
	},
	setPeople(state, playload) {
		const { people } = playload;
		state.people = people;
	}
};

export default mutations;