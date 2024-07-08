<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Content />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}
.sidebar {
  width: 250px;
}
.content {
  flex: 1;
}
</style>
