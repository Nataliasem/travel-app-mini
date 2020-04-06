<template>
    <nav id="nav">
        <p class="logo">Travel App Mini</p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li v-for="destination in destinations"
                :key="destination.name"
                class="links"
            >
                <router-link
                        :to="{
                    name: 'DestinationDetails',
                    params: {slug:destination.slug}
                }"
                >
                    {{destination.name}}
                </router-link>
            </li>
            <li class="links">
                <router-link to="/user">Dashboard</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import store from "../store";

    export default {
        data() {
            return {
                destinations: store.destinations
            }
        }
    }
</script>

<style scoped>
    #nav {
        display: flex;
        justify-content: start;
        position: sticky;
        top: 0;
        background-color: #fff;
        border-bottom: 1px solid grey;
        z-index: 1;

    }

    #nav a {
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .nav-links {
        display: flex;
    }

    .links {
        padding-right: 20px;
        list-style: none;
    }

    .links:hover {
        text-decoration: underline;
    }

    .logo {
        font-size: 20px;
        color: purple;
        font-weight: bold;
    }

</style>
