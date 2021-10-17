<template>
    <div class="mb-12 ">
        <h1 class="text-3xl italic font-semibold shadow-md text-bookmark-green">TagCloud</h1>
    </div>
    <div v-for="tag in tags" :key="tag" class="flex justify-end my-4 mr-8 ">
        <router-link :to="{ name: 'Tag', params:{ tag:tag }}" >
            <p class="px-6 py-3 text-xl font-semibold bg-gray-200 shadow-xl text-bookmark-green rounded-xl max-w-max">#{{ tag }}</p>
        </router-link>
    </div>
</template>

<script>
import useTag from '../composables/useTag'

export default {
    props: [ 'posts' ],
    setup(props) {
         const { tags} = useTag(props.posts)

         return { tags }
    }
}
</script>

