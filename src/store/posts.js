export default {
    state: {
        postsLoaded: false,
        posts: []
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        toggleLoader(state, value) {
            state.postsLoaded = value
        }
    },
    actions: {
        async fetchPosts({commit}, limit = 5) {
            commit('toggleLoader', false)
            await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
                .then(response => response.json())
                .then(json => {
                    commit('updatePosts', json)
                    commit('toggleLoader', true)
                });
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        isLoaded(state) {
            return state.postsLoaded
        }
    }
}
