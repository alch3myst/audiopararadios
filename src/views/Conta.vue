<script setup lang="ts">
import { onMounted, ref } from 'vue';

let user = ref("")
onMounted(() => {
	user.value = localStorage.getItem("login-user")!
})
</script>

<template>
	<main>
		<section class="info-cadastro">
			<h3>Conta</h3>
			<div style="margin-bottom: 10px;"></div>

			<p>Nome no cadastro</p>
			<p>{{ user }}</p>
			<div style="margin-bottom: 10px;"></div>

			<p>Senha</p>
			<input type="password" value="1236484">
			<button>Salvar</button>
			<div style="margin-bottom: 10px;"></div>

			<p>Cpf</p>
			<p>***.***.***-**</p>
		</section>

		<section>
			<h3>Assinatura</h3>
			<p>Vencimento 25/1/2022</p>
			<p>Sua assinatura expira em 23 dias</p>
		</section>
	</main>
</template>

<style scoped lang="scss">
	main {
		margin-top: 75px;
		min-height: calc(100vh - 107px);
	}

	section {
		background-color: #fff;
		margin: 20px 10vw;
		padding: 15px;
		border-radius: 7px;
	}

	section.info-cadastro {
		& button {
			border: none;
			padding: 9px;
			border-radius: 7px;
		}

		& input {
			border: 1px solid black;
			margin-right: 10px;
			padding: 8px;
			border-radius: 7px;
		}
	}

	@media screen and (max-width: 750px) {
		section {
			margin: 20px 7vw;
		}
	}
</style>