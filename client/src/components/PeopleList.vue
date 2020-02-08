<template>
	<div class="container">
		<div class="row">
			<div class="col-md">
				<NameList title="Nomes" type="firstName" v-bind:names="names.firstName" v-on:addName="addName" v-on:deleteName="deleteName"></NameList>
			</div>
			<div class="col-md">
				<NameList title="Sobrenomes" type="lastName" v-bind:names="names.lastName" v-on:addName="addName" v-on:deleteName="deleteName"></NameList>
			</div>
		</div>
		<br/>
		<h5>Pessoas <span class="badge badge-dark">{{ people.length }}</span></h5>
		<div class="card">
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item list-group-item-action list-group-item-dark">
						<div class="row">
							<div class="col text-center">
								<strong>Nome</strong>
							</div>
							<div class="col text-center">
								<strong>CPF</strong>
							</div>
							<div class="col text-center">
								<strong>Data de nascimento</strong>
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action" v-for="person in people" v-bind:key="person.name">
						<div class="row">
							<div class="col text-center">
								{{ person.name }}
							</div>
							<div class="col text-center">
								{{ person.cpf }}
							</div>
							<div class="col text-center">
								{{ person.dateOfBirth }}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NameList from "./NameList";

export default {
	name: "app",
	components: {
		NameList,
	},
	methods: {
		...mapActions([
			"addName", 
			"deleteName", 
			"getNames", 
			"generatePeople"
		])
	},
	computed: {
		...mapState(["names", "people"]),
	}
};
</script>

<style>
</style>
