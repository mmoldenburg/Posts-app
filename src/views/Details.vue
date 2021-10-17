<template>
    
    <div class="container mx-auto my-20">         
        <div class="mx-12 rounded-lg shadow-md ">
            
                    <div class="rounded-t-lg bg-bookmark-green">
                    <h1 class="px-4 py-3 text-3xl italic font-bold text-gray-200">{{ post.title }}</h1>
                </div>
            
            
            <div class="bg-gray-100 border-b border-l-8 rounded-b-lg border-bookmark-green">
                <p class="px-4 py-6 text-xl ">{{ post.body }}</p>
            </div>     
        </div>   
        
        <div class="flex justify-end mr-12">
            <div class="mt-4 ml-3 rounded-lg shadow-md bg-bookmark-green max-w-max" v-for="tag in post.tags" :key="tag">
                <p class="px-4 py-2 text-xl text-gray-200">#{{ tag }}</p>
            </div> 
        </div>
            <div class="flex justify-center mt-24">
                <button @click="handleDelete" class="px-24 py-8 text-2xl font-bold bg-gray-200 shadow-xl rounded-xl text-bookmark-green">Delete now...</button>
            </div>
    </div>
    
</template>

<script>
import { appFirebase } from '../firebase/config'
import { useRouter } from 'vue-router'
import getPost from '../composables/getPost'

export default {
    props: [ 'id' ],
    setup(props) {
        const router = useRouter()
        const { post, error, load } = getPost(props.id)
        load()

        const handleDelete = async() => {
            await appFirebase.collection('posts').doc(props.id).delete()
            router.push({ name: 'Home' })
        }
        

        return { post, error, handleDelete }
    }
}
</script>

