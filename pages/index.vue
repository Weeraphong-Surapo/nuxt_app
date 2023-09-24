<template>
    <div>
        <h1>Home Page</h1>
    </div>
</template>

<script setup>
useHead({
    title: 'Home Page',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
})
</script>

<style lang="scss" scoped></style>