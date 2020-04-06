<template>
    <div>
        <h1>Not Found</h1>
        <p>
            Такой страницы не существует. Вернитесь
            <router-link :to="{ name: 'home' }">на главную</router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
