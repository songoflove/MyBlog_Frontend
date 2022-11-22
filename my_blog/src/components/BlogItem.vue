<template>
  <div class="blog-item">
    <div class="article-header">{{ title }}</div>
    <el-divider class="article-divider" />
    <div class="article-item">
      <div>{{ summary }}</div>
      <el-button text @click="viewDetails"
        >Read more
        <el-icon><ArrowRight /></el-icon>
      </el-button>
    </div>
    <div class="icon-item">
      <div class="article-icon">
        <el-icon><Calendar /></el-icon>
        <span class="icon-text">{{ createdDate.substring(0,10) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Calendar, ArrowRight, Collection } from "@element-plus/icons-vue";
import { reactive, ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance();
const router = useRouter();
const api = {
  viewDetails: "/articles/details/"
}

const props = defineProps({
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  content: {
    type: String,
  },
  createdDate: {
    type: String,
  },
  id: {
    type: Number
  }
});

const viewDetails = async () => {
  // router.push("/blogDetails")
  router.push({name:'blogDetails', params:{id:props.id}})
}

// const viewDetails = async () => {
//     let result = await proxy.Request({
//       url: api.viewDetails + props.id,
//       errorCallback: () => {
//         changeCheckCode();
//       }
//     })
//     if (result.code != 200) {
//       return;
//     }
//     this.props.showDetails = true
//     // proxy.message.success("登录成功");
//     // setTimeout(() => {
//     //   router.push("/blogDetails")
//     // }, 1500);
// }


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
  justify-content: flex-start;
}
</style>
