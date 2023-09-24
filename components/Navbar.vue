<template>
    <div>
        <header class="shadow-md bg-white">
            <nav class="container mx-auto flex justify-between p-4">
                <NuxtLink to="/" class="font-bold text-2xl">Big Web</NuxtLink>
                <ul class="flex gap-5">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/About">About</NuxtLink></li>
                    <li><NuxtLink to="/Contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/students">Student</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active{
    color: rgb(105, 202, 170);
}

</style>