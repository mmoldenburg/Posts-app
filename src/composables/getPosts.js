import { appFirebase } from '../firebase/config'
import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async() => {
        try {
            const res = appFirebase.collection('posts').get()
            posts.value = (await res).docs.map(doc => {
                return { ...doc.data(), id: doc.id}
            })
        } catch (err) {
            error.value = err.message
        }
    }
    return { posts, error, load }
}
export default getPosts