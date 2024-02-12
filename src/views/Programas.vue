<script setup lang="ts">
import SmallPlayer from '@/components/SmallPlayer.vue';
import { ref } from 'vue';

// Dados de exemplo
// no site real isso é uma função que usa axios para pegar as informação do bando de dados
let selected = ref([
	{
		titulo: "Segunda Sertanejo Raiz",
		descricao: "Uma viagem pelas raízes da música sertaneja, apresentando clássicos e lendas do gênero.",
		programas: [
			{
				nome: "Só modão",
				audio: "/audios/musica.mp3"
			},{
				nome: "Raiz",
				audio: "/audios/musica.mp3"
			}
		]
	},{
		titulo: "Terça Cantores em Ascensão",
		descricao: "Destaque para artistas emergentes e novidades no cenário sertanejo, com performances e entrevistas exclusivas.",
		programas: [
			{
				nome: "Só modão",
				audio: "/audios/musica.mp3"
			}
		]
	}
])
</script>

<template>
	<main>
		<section class="category-section">
			<div class="noticia-banner">
				<div>
					<h2>O Fenômeno Continua Atraindo Multidões</h2>
					<small>Noticia do dia</small>
				</div>
			</div>
			<p>Apesar das mudanças no cenário musical ao longo dos anos, a música sertaneja mantém sua posição de destaque e continua atraindo multidões em todo o país.</p>
		</section>
		<section class="category-section" v-for="s in selected">
			<h2>{{ s.titulo }}</h2>
			<p>{{ s.descricao }}</p>

			<div class="players">
				<template v-for="a in s.programas">
					<SmallPlayer :nome="a.nome" :audio="a.audio" />
				</template>
			</div>
		</section>
	</main>
</template>


<style lang="scss" scoped>
	main {
		margin-top: 75px;
	}

	.players {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 15px;
		row-gap: 15px;
	}

	div.noticia-banner {
		display: flex;
		margin-bottom: 15px;
		align-items: end;
		overflow: hidden;
		& > div {
			width: 100%;
			padding: 15px;
			background-color: #21120665;
			
			& * {color: #fff;}
		}

		background-image: url("/img/noticia.jpg");
		height: 210px;
		border-radius: 7px;
		background-size: cover;
		background-position: center;
	}

	section.category-section {
		background-color: #fff;
		margin: 20px 10vw;
		padding: 15px;
		border-radius: 7px;

		& > p {
			margin-bottom: 18px;
		}
	}

	@media screen and (max-width: 750px) {
		.players {
			grid-template-columns: 1fr;
		}

		section.category-section {
			margin: 20px 7vw;
		}
	}
</style>