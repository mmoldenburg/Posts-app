import { ref } from 'vue'

const useTag = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach((item) => {
        item.tags.forEach((tag) => tagSet.add(tag))
    })
    tags.value = [...tagSet]

    return { tags }
}
export default useTag