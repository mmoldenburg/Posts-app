<template>
    <div>
        <PostList :posts="postWithTag" />
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'

export default {
    components: { PostList },
    setup() {
        const { posts, error, load } = getPosts()
        const route = useRoute()

        load()

        const postWithTag = computed(() => {
            return posts.value.filter((p) => p.tags.includes(route.params.tag))
        })
        return { posts, error, postWithTag }
    }
}
</script>

