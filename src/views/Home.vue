<template>
  <div >
    
    <div class="grid grid-cols-4">
      <div class="col-span-3 home">
        <PostList :posts="posts" />
      </div>
      <div v-if="posts.length">
        <TagCloud :posts="posts"/>
      </div>
    </div>   
    
  </div>
  
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: { PostList, TagCloud },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return { posts, error }
  }
}
</script>
