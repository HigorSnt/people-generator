<template>
	<div>
		<div id="slogan" class="text-center">
			<h1>Gerador de Pessoas</h1>
			<h6 class="text-secondary">Gerador de nome utilizando Vue.js, GraphQL e NodeJS</h6>
		</div>
		<div id="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default {
	name: "app"
};
</script>

<style>
#slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}

#main {
  background-color: #F2F2F2;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
