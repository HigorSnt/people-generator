<template>
  <div>
    <h5>
      {{ title }}
      <span class="badge badge-dark">{{ names.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item" v-for="name in names" v-bind:key="name.id">
            <div class="row">
              <div class="col-md">{{ name.value }}</div>
              <div class="col-md text-right">
                <button class="btn btn-secondary" v-on:click="deleteName(name)">
                  <span class="fa fa-trash"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Digite o nome"
            v-model="value"
            v-on:keyup.enter="addName(type, value)"
          />
          <div class="input-group-append">
            <button class="btn btn-secondary" v-on:click="addName(type, value)">
              <span class="fa fa-plus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "AppItemList",
	props: ["names", "title", "type"],
	data() {
		return {
			value: ""
		};
	},
	methods: {
		addName(type, value) {
			this.$emit("addName", {
				type,
				value
			});
			this.value = "";
		},
		deleteName(name) {
			this.$emit("deleteName", name);
		}
	}
};
</script>

<style scoped>
</style>
