<template>
  <div class="nav-links">
    <div v-for="(category, index) in categories" :key="index" class="category">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(site, siteIndex) in category.sites" :key="siteIndex">
          <a :href="site.url" target="_blank">{{ site.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: '分类1',
          sites: [
            { name: '站点1', url: 'https://example1.com' },
            { name: '站点2', url: 'https://example2.com' },
          ]
        },
        {
          name: '分类2',
          sites: [
            { name: '站点3', url: 'https://example3.com' },
            { name: '站点4', url: 'https://example4.com' },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.nav-links {
  display: flex;
  flex-wrap: wrap;
}
.category {
  width: 50%;
  padding: 10px;
}
</style>
