<template>
    <div class="blog-item">
      <div class="article-header">Article1 Title</div>
        <el-divider class="article-divider" />
        <div class="article-item">
            <div>Summary Summary Summary</div>
            <el-button text
            >Read more
            <el-icon><ArrowRight /></el-icon>
            </el-button>
        </div>
        <div class="icon-item">
            <div class="article-icon">
                <el-icon><Calendar /></el-icon>
                <span class="icon-text">2022-11-14</span>
            </div>
            <div class="article-icon">
                <el-icon><Collection /></el-icon>
                <span class="icon-text">Life</span>
            </div>
        </div>
    </div>
    <div class="blog-item">
      <div class="article-header">Article2 Title</div>
        <el-divider class="article-divider" />
        <div class="article-item">
            <div>Summary Summary Summary</div>
            <el-button text
            >Read more
            <el-icon><ArrowRight /></el-icon>
            </el-button>
        </div>
        <div class="icon-item">
            <div class="article-icon">
                <el-icon><Calendar /></el-icon>
                <span class="icon-text">2022-11-12</span>
            </div>
            <div class="article-icon">
                <el-icon><Collection /></el-icon>
                <span class="icon-text">travel</span>
            </div>
        </div>
    </div>
    <div class="blog-item">
      <div class="article-header">Article3 Title</div>
        <el-divider class="article-divider" />
        <div class="article-item">
            <div>Summary Summary Summary</div>
            <el-button text
            >Read more
            <el-icon><ArrowRight /></el-icon>
            </el-button>
        </div>
        <div class="icon-item">
            <div class="article-icon">
                <el-icon><Calendar /></el-icon>
                <span class="icon-text">2022-11-09</span>
            </div>
            <div class="article-icon">
                <el-icon><Collection /></el-icon>
                <span class="icon-text">study</span>
            </div>
        </div>
    </div>
    <div class="blog-item">
      <div class="article-header">Article4 Title</div>
        <el-divider class="article-divider" />
        <div class="article-item">
            <div>Summary Summary Summary</div>
            <el-button text
            >Read more
            <el-icon><ArrowRight /></el-icon>
            </el-button>
        </div>
        <div class="icon-item">
            <div class="article-icon">
                <el-icon><Calendar /></el-icon>
                <span class="icon-text">2022-11-01</span>
            </div>
            <div class="article-icon">
                <el-icon><Collection /></el-icon>
                <span class="icon-text">work</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import {Calendar, ArrowRight, Collection } from "@element-plus/icons-vue";

// import { getCurrentInstance } from 'vue';
// const {proxy} = getCurrentInstance()
// const props = defineProps({
//     title: {
//         type: String
//     },
//     summary: {
//         type: String
//     },
//     time: {
//         type: Datetime
//     },
//     categoryName: {
//         type: String
//     },
// })
</script>

<style lang="scss">
.blog-item {
  border: 1px dashed #b6e2a1;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.article-item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.article-header {
  font-size: 22px;
  font-weight: bold;
}
.article-divider {
  margin: 12px 0;
}
.article-icon {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.icon-text {
    margin-left: 5px;
}
.icon-item {
    display: flex;
    justify-content:flex-start;
}
</style>
