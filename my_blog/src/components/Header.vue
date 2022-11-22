<template>
  <!-- header -->
  <div class="header">
    <div class="header-bar">
      <div class="header-bar-item">
        <h1>Nicole's Blog</h1>
        <h3>こんにちは~</h3>
      </div>
      <div class="header-search">
        <el-input
          v-model="searchForm"
          class="w-50 m-2"
          placeholder="Search"
          :prefix-icon="Search"
        />
      </div>
    </div>
    <el-divider class="nav-divider" />
    <div class="navigation-bar">
      <router-link class="nav-text" to="/">HOME</router-link>
      <router-link class="nav-text" to="/life">LIFE</router-link>
      <router-link class="nav-text" to="/work">WORK</router-link>
      <router-link class="nav-text" to="/study">STUDY</router-link>
      <router-link class="nav-text" to="/travel">TRAVEL</router-link>
      <router-link class="nav-text" to="/me">ABOUT ME</router-link>
    </div>
    <el-divider class="nav-divider" />
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const searchForm = ref('')
</script>
<style lang="scss">
h1 {
  font-family: "Ma Shan Zheng", cursive;
  margin: 10px 0 0 0;
  color: #f7a4a4;
  font-size: 40px;
}
h3 {
  color: #febe8c;
  margin: 10px 0;
}
.navigation-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
}
.nav-text {
  text-decoration: none;
  color: #d98880;
  font-family: "Fredoka One", cursive;
}
.nav-text:hover {
  color: #16a085;
}
.header-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-divider {
  margin: 10px 0;
}
</style>
