<template>
    <div class="mt-12 ">
        <div >         
            <div class="mx-12 rounded-lg shadow-md ">
                <router-link :to="{ name: 'Details', params: { id: post.id }}">
                     <div class="rounded-t-lg bg-bookmark-green">
                        <h1 class="px-4 py-3 text-3xl italic font-bold text-gray-200">{{ post.title }}</h1>
                    </div>
                </router-link>
                
                <div class="bg-gray-100 border-b border-l-8 rounded-b-lg border-bookmark-green">
                    <p class="px-4 py-6 text-xl ">{{ snippet }}</p>
                </div>     
            </div>   
            
            <div class="flex justify-end mr-12">
                <div class="mt-4 ml-3 rounded-lg shadow-md bg-bookmark-green max-w-max" v-for="tag in post.tags" :key="tag">
                    <router-link :to="{ name: 'Tag', params:{ tag: tag }}">
                        <p class="px-4 py-2 text-xl text-gray-200">#{{ tag }}</p>
                    </router-link>                   
                </div> 
            </div>
        </div>       
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: [ 'post' ],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100)+'....'
        })
        return { snippet }
    }
}
</script>

