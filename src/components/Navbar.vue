<template>
    <div class="flex items-center justify-between mx-12 my-12">
        <div>
        <h1 class="text-4xl italic font-bold text-gray-200 ">my<strong class="uppercase text-bookmark-green">Posts </strong></h1>
        </div>
        <div class="flex-1 space-x-6 text-right">
            <router-link class="text-2xl text-gray-200 " :to="{ name: 'Home'}">Home</router-link>
            <router-link class="text-2xl text-gray-200 " :to="{ name: 'Create'}">NewPost</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .router-link-exact-active {
        color: #41B883;
        text-decoration: underline;
    }
</style>

