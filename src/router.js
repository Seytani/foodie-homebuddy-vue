import { createRouter, createWebHistory} from 'vue-router';

import Login from './pages/Login.vue';
import Recipes from './pages/Recipes.vue'
import RecipeEdit from './pages/RecipeEdit.vue'

export const routes = [
    { path: '/', redirect: '/recipes'},
    { path: '/login', component: Login },
    { path: '/recipes', component: Recipes, meta: { auth: true }},
    { path: '/recipes/:id', component: RecipeEdit, meta: { auth: true }},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
