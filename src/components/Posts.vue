<template>
    <div class="posts">
        <div v-if="isLoaded">
            <div class="post" v-for="post in allPosts" :key="post.id">
                <b-card
                        :title="post.title"
                        :img-src="'https://picsum.photos/600/300/?image=' + random(1,30)"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                >
                    <b-card-text>
                        {{post.body}}
                    </b-card-text>

                    <!-- <b-button href="#" variant="primary">Go somewhere</b-button>-->
                </b-card>
            </div>
        </div>
        <div class="text-center" v-else>
            <b-spinner variant="success" label="Loading"></b-spinner>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import mathLib from "@/utils/math"

    export default {
        name: "Posts",
        computed: mapGetters(["allPosts", "isLoaded"]),
        methods: {
            ...mapActions(["fetchPosts"]),
            random(min, max) {
                return mathLib.random(min, max);
            }
        },
        async mounted() {
            // this.$store.dispatch("fetchPosts");
            this.fetchPosts(6);
        }
    }
</script>

<style scoped>
    .post{
        display: inline-block;
        margin: 10px;
    }
</style>