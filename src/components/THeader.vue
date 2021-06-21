<template>
    <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <router-link class="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
                <img alt="hero" class="object-cover object-center" src="../assets/img/turing-128-128.png">
                <p class="mx-2 text-2xl">Turing</p>
            </router-link>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <router-link class="mr-5 hover:text-white" to="/">Home</router-link>
                <router-link class="mr-5 hover:text-white" to="/commands">Commands</router-link>
                <router-link class="mr-5 hover:text-white" to="/about">About</router-link>
                <a class="mr-5 hover:text-white" href="https://discord.com/api/oauth2/authorize?client_id=840913496128487453&permissions=8&redirect_uri=https%3A%2F%2Fturingdiscordbot.netlify.app%2F&response_type=code&scope=bot%20identify">Invite</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'THeader',
}
</script>

<style scoped>
img {
    width: 48px;
}
</style>
