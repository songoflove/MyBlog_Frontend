<template>
  <div class="home-body">
    <div class="home-body-box">
      <div class="header-bar">
        <h1>こんにちは~</h1>
        <h3>
          日本IT程序媛的博客！提供最新日本生活实用资讯，以及学习编程与软件开发时的经验感想！
        </h3>
      </div>
      <hr />
      <div class="navigation-bar">

        <a href="">HOME</a>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              LIFE
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Daily life</el-dropdown-item>
                <el-dropdown-item>Rent a house</el-dropdown-item>
                <el-dropdown-item>Save money</el-dropdown-item>
                <el-dropdown-item disabled>See a doctor</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              WORK
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>IT</el-dropdown-item>
                <el-dropdown-item>Part-time job</el-dropdown-item>
                <el-dropdown-item>Freelancer</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              STUDY
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>Japanese</el-dropdown-item>
                <el-dropdown-item>Coding</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              TRAVEL
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Tokyo</el-dropdown-item>
                <el-dropdown-item>Hokkaido</el-dropdown-item>
                <el-dropdown-item>Osaka</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <a href="">ABOUT ME</a>
      </div>
      <hr />

    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>
<style lang="scss">
.home-body {
  background-color: #fffcf6;
  width: 100%;
  height: calc(100vh);
}
h1 {
  font-family: "Oooh Baby", sans-serif;
  padding: 0;
  margin: 0;
}

.navigation-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
