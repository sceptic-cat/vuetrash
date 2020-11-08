<template>
  <div class="home">
    <p>This is a home page</p>
    <Posts />
  </div>
</template>

<script>
import Posts from "@/components/Posts";

export default {
  name: 'Home',
  components: {
    Posts
  }
}
</script>
