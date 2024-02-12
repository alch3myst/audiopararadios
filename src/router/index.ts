import { createRouter, createWebHistory } from 'vue-router'
import Programas from '../views/Programas.vue'
import Efeitos from '../views/Efeitos.vue'
import Musicas from '../views/Musicas.vue'
import Conta from '../views/Conta.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Programas
		},{
			path: '/Programas',
			name: 'programas',
			component: Programas
		},{
			path: '/Efeitos',
			name: 'efeitos',
			component: Efeitos
		},{
			path: '/Musicas',
			name: 'musicas',
			component: Musicas
		},{
			path: '/Conta',
			name: 'conta',
			component: Conta
		}
	]
})

export default router
