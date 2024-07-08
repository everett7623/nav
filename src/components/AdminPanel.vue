<template>
  <div class="admin-panel">
    <h2>管理面板</h2>
    <form @submit.prevent="addSite">
      <input v-model="newSite.name" placeholder="站点名称" required>
      <input v-model="newSite.url" placeholder="站点URL" required>
      <select v-model="newSite.category">
        <option value="category1">分类1</option>
        <option value="category2">分类2</option>
      </select>
      <button type="submit">添加站点</button>
    </form>
  </div>
</template>

<script>
import { addSite } from '../utils/api'

export default {
  data() {
    return {
      newSite: {
        name: '',
        url: '',
        category: 'category1'
      }
    }
  },
  methods: {
    async addSite() {
      try {
        await addSite(this.newSite)
        alert('站点添加成功')
        this.newSite = { name: '', url: '', category: 'category1' }
      } catch (error) {
        alert('添加失败: ' + error.message)
      }
    }
  }
}
</script>
