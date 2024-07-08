<template>
  <div class="nav-links">
    <a v-for="link in links" :key="link.url" :href="link.url">
      {{ link.title }}
    </a>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>
