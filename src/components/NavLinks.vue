<template>
  <div class="nav-links">
    <a v-for="link in links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">
      {{ link.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.nav-links {
  display: flex;
  flex-direction: column;
}

.nav-links a {
  margin-bottom: 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.nav-links a:hover {
  color: #3eaf7c;
}
</style>
