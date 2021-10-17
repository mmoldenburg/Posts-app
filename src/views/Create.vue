<template>
    <form class="py-12">
        <div
        class="w-1/2 px-12 mx-auto space-y-6 bg-bookmark-green"
    >
        <h1
            class="pt-6 text-4xl italic font-semibold text-center text-bookmark-dark"
        >create a new post</h1>
        <div>
            <label
            class="px-3 text-xl italic font-semibold text-gray-900 uppercase"
            >
                Title:
            </label>
            <input
            type="text"
            v-model="title"
            class="w-full px-3 py-2 mt-3 text-2xl bg-gray-200 rounded shadow-lg outline-none focus:ring-bookmark-dark focus:ring-2"
            >
        </div>
        <div>
            <label
                class="px-3 text-xl italic font-semibold text-gray-900 uppercase"
            >
                message:
            </label>
            <textarea 
                v-model="body"
                class="w-full px-3 py-2 mt-3 text-2xl bg-gray-200 rounded shadow-lg outline-none focus:ring-bookmark-dark focus:ring-2"
            ></textarea>
        </div>
        <div>
            <label
            class="px-3 text-xl italic font-semibold text-gray-900 uppercase"
            >
                Tags (hit enter to add tag):
            </label>
            <input
                type="text"
                v-model="tag"
                class="w-full px-3 py-2 mt-3 text-2xl bg-gray-200 rounded shadow-lg outline-none focus:ring-bookmark-dark focus:ring-2"
                @keydown.enter.prevent="handleKeydown"
            >
        </div>
        <div class="flex justify-center space-x-3">
            <div          
                v-for="tag in tags" :key="tag"       
            >
                <p                       
                    class="px-4 py-3 text-xl text-gray-200 bg-gray-500 rounded-md shadow-md max-w-min"              
                >
                    #{{ tag }}
                </p>
            </div>
        </div>
        
        <div class="flex justify-center py-12">
            <button
                @click.prevent="handleAddPost"
                class="px-12 py-4 text-2xl text-gray-200 bg-bookmark-dark max-w-max"
            >
                add this new post
            </button>
        </div>
    </div>
    </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import { appFirebase } from '../firebase/config'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const router = useRouter()


        const handleKeydown = () => {
            if(!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/,'')
                tags.value.push(tag.value)
            }
            tag.value = ''        
           }

        const handleAddPost = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value
            }
            await appFirebase.collection('posts').add(post)
            router.push({ name: 'Home' })
        }

        return { title, body, tag, tags, handleKeydown, handleAddPost }
    }
    
}
</script>

