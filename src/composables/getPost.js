import { appFirebase } from '../firebase/config'
import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async() => {
        try {
            const res = appFirebase.collection('posts').doc(id).get()
            post.value = { ...(await res).data(), id: res.id}
        } catch (err) {
            error.value = err.message
        }
    }
    return { post, error, load }
}
export default getPost