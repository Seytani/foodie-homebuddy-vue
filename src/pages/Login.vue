<template>
    <div class="login">
        <h1>login</h1>
        <form>
            <div>
                <label for="email">email</label>
                <input id="email" v-model="user.email" type="text">
            </div>
            <div>
                <label for="password">password</label>
                <input id="password" v-model="user.password" type="password">
            </div>
            <div>
                <button type="submit" @click.prevent="handleSubmit">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            user: {
                email: '',
                password: '',
            }
        };
    },

    methods: {
        handleSubmit() {
            this.$auth.login({ data: this.user });
        }
    }
}
</script>