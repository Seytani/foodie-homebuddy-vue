<template>
  <aside class="navbar">
    <div class="navbar__container">
      <div class="logo">
        <h1>
          Foodie
          <span class="logo__subtitle">homebuddy</span>
        </h1>
      </div>
      <div class="user">
        hello User
      </div>
      <ul class="menu">
        <li class="d-flex fai-center">
          <router-link class="menu__item d-flex fai-center" to="/meal-plan">
            <span class="icon material-icons">date_range</span>
            <span>Meal Plan</span>
          </router-link>
        </li>
        <li class="d-flex fai-center">
          <router-link class="menu__item  d-flex fai-center" to="/shopping-list">
            <span class="icon material-icons">shopping_basket</span>
            <span>Shopping List</span>
          </router-link>
        </li>
        <li class="d-flex fai-center">
          <router-link class="menu__item  d-flex fai-center" to="/recipes">
            <span class="icon material-icons">menu_book</span>
            <span>Recipes</span>
          </router-link>
        </li>
        <li class="d-flex fai-center">
          <router-link class="menu__item  d-flex fai-center" to="/ingredients">
            <span class="icon material-icons">kitchen</span>
            <span>Ingredients</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import '@/assets/styles/components/base/Navbar.scss';

export default {
  name: 'Navbar'
}
</script>
