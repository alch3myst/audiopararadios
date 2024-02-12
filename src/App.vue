<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from 'vue-router'

let mobileMenuToggle = ref(false);
function mobileMenuClick() {
	mobileMenuToggle.value = !mobileMenuToggle.value
}

let logged = ref(0)
onMounted(() => {
	logged.value = parseInt(localStorage.getItem("logged")!)
	user.value = localStorage.getItem("login-user")!
})


let user = ref("")
function login() {
	localStorage.setItem("logged", '1')
	if (document.getElementById("login-user")) {
		localStorage.setItem("login-user", document.getElementById("login-user")!.value)
	}

	user.value = localStorage.getItem("login-user")!
	logged.value = 1
}

function logout() {
	user.value = ""
	logged.value = 0	

	localStorage.setItem("logged", '0')
	localStorage.setItem("login-user", '')
}
</script>

<template>
	<template v-if="logged == 1">
	<header>
		<nav class="main-menu">
			<section class="menu-nav">
				<!-- Menu para desktop -->
				<div class="desk-only">
					<RouterLink to="/Programas">Programas</RouterLink>
					<RouterLink to="/Musicas">Musicas</RouterLink>
					<RouterLink to="/Efeitos">Efeitos</RouterLink>
				</div>

				<!-- menu para mobile -->
				<div class="mobile-only">
					<button class="mob-cat-btn" @click="mobileMenuClick">
						<img src="/img/menu-bar.svg" width="15"> Categorias
					</button>
					<div v-if="mobileMenuToggle" class="mob-nav-category">
						<ul>
							<li><RouterLink to="/Programas" @click="mobileMenuClick">Programas</RouterLink></li>
							<li><RouterLink to="/Musicas" @click="mobileMenuClick">Musicas</RouterLink></li>
							<li><RouterLink to="/Efeitos" @click="mobileMenuClick">Efeitos</RouterLink></li>
						</ul>
					</div>
				</div>

				<div class="expiration" title="Expiração">
					<div class="expiration-text">
						<small>23 dias restantes</small>
					</div>
				</div>
			</section>

			<section class="menu-account">
				<p><RouterLink to="/Conta">{{ user }}</RouterLink></p>
				<button @click="logout">Sair</button>
			</section>
		</nav>
	</header>

	<RouterView />

	<footer>
		<p>Copyright</p>
	</footer>
	</template>

	<template v-else>
		<main class="login-form">
			<form v-on:submit.prevent="login()">
				<h1>Radio</h1>
				<input type="text" placeholder="Usuário" id="login-user" required>
				<input type="password" placeholder="Senha" required>
				<button>Entrar</button>
				<a href="#">Contratar</a>
			</form>
		</main>
	</template>
</template>

<style scoped lang="scss">

main {
	margin-top: 75px;
	min-height: calc(100vh - 107px);
}
.router-link-active {
	border-bottom: 1px solid var(--accent);
}

.login-form {
	width: 100vw;
	height: 100vh;
	margin-top: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	background-image: url("/img/login-bg.jpg");
	background-size: cover;

	& form {
		background: #fff;
		padding: 17px;
		display: grid;
		text-align: center;
		border-radius: 7px;

		& a {
			color: var(--accent);
		}

		& * {
			font-size: 1rem;
			color: var(--darkPrimary);
		}

		& h1 {
			font-size: 2rem;
			margin-bottom: 15px;
		}

		& input {
			border: 1px solid var(--darkPrimary);
			padding: 5px 7px;
			margin-bottom: 8px;
			color: var(--darkPrimary);
			border-radius: 7px;
			text-align: center;
		}

		& button {
			border: none;
			padding: 7px 7px;
			margin-bottom: 10px;
			color: var(--darkPrimary);
			background-color: var(--background);
			border-radius: 7px;
			cursor: pointer;

			&:hover {
				background-color: var(--accent);
				color: var(--background);
			}
		}
	}
}

nav.main-menu {
	width: 100vw;
	position: fixed;
	z-index: 99;
	height: 55px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	top: 0;
	padding: 0 15px;

	box-shadow: 0 2px 5px var(--background);

	& .desk-only a {
		padding: 5px;
		&:hover {
			border-bottom: 1px solid var(--background);
		}
	}
}

footer {
	width: 100vw;
	background-color: #fff;
	text-align: center;
	& {
		padding: 5px;
	}
}

div.expiration {
	display: flex;
	align-items: center;
	justify-content: center;
	// width: 70px;
	padding: 5px;
}

div.expiration-text {
	display: flex;
	flex-direction: column;
	text-align: center;

	& p {
		margin-bottom: -3px;
	}
}

button.mob-cat-btn {
	display: flex;
	border: none;
	padding: 10px;
	font-size: 0.9rem;
	align-items: end;
	background: none;
	cursor: pointer;

	& img {
		margin-right: 7px;
	}
}

.mob-nav-category {
	position: absolute;
	background: #fff;
	top: 38px;
	padding: 5px 0;

	& a {
		padding: 7px 20px 7px 10px;
		display: block;

		&:hover {
			background: var(--background);
		}
	}
}

section.menu-nav, section.menu-account {
	display: flex;
	align-items: center;

	& * {
		color: var(--darkPrimary);
	}

	& .desk-only a {
		margin-right: 15px;
	}
}

.menu-account {
	& p {
		margin-right: 20px;

		& a {
			padding: 5px;
		}
	}

	& button {
		padding: 5px;
		font-size: 1rem;
		background: none;
		border: none;
		cursor: pointer;
	}
}

@media screen and (max-width: 750px) {
	.mob-nav-category {
		font-size: 1.1rem;
	}
}
</style>
