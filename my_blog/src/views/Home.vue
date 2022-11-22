<template>
  <div class="home-body">
    <div class="home-body-box">
      <!-- header -->
      <Header></Header>
      <!-- main -->
      <div class="home-main-box">
        <div class="main-left">
          <div v-for="blog in blogList" :key="blog.id">
            <BlogItem :title="blog.title"
                      :summary="blog.summary"
                      :createdDate="blog.createdDate"
                      :id="blog.id"
                      ></BlogItem>
          </div>
        </div>
        <div class="main-right">
          <div class="right-box0">
            <el-button round color="#F9E79F " size="large" @click="addBlog">
              <el-icon style="vertical-align: middle">
                <Edit />
              </el-icon>
              <span style="vertical-align: middle"> New Blog </span>
            </el-button>

          </div>

          <div class="right-box1">
            <img class="avatar" src="../assets/avatar.png" />
            <span class="Title-tag">FOLLOW ME</span>
            <div class="contact-links">
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-instagram" id="contact-icon"></i>Instagram</a
              >
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-github" id="contact-icon"></i>Github</a
              >
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-twitter" id="contact-icon"></i>Twitter</a
              >
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-at" id="contact-icon"></i>Email</a
              >
            </div>
          </div>
          <div class="right-box2">
            <span class="Title-tag">Tags</span>
            <div class="tag-box">
              <el-button
                class="tag-item"
                round
                v-for="tag in tags"
                :key="tag"
                color="#FCF3CF"
                >{{ tag }}</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <!-- <el-divider class="footer-divider" /> -->
      <p>MIT Licensed | Copyright &copy; Nicole, 2022 ~ present</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
const {proxy} = getCurrentInstance()
const router = useRouter();
const addBlog = () => {
  router.push({ path: "/add" });
};

const blogList = ref([])
const api = {
  "getArticleList": "/articles"
}
const getArticleList = async () => {
  let params = {
    page: 1,
    pageSize: 10
  }
  let result = await proxy.Request({
    url: api.getArticleList,
    params: params,
    errorCallback: () => {
        changeCheckCode();
      }
  })
  if (result.code != 200) {
      return;
  }
  blogList.value = result.data
}

getArticleList()


// tags
const tags = [
  "Java",
  "Css",
  "Html",
  "JavaScript",
  "Freelance",
  "Japanese",
  "English",
  "Books",
  "Movies",
  "Food",
  "Cookding",
  "Job",
  "Bank",
  "Relationship",
  "Diary",
  "Gym",
  "Health",
  "Shopping",
  "Fashion",
  "Coupon",
  "Bank",
];
</script>

<style lang="scss">
.home-body {
  background-color: #fffcf6;
  width: 100%;
  min-height: 100%;
}

.home-body-box {
  margin: 0 100px;
  min-height: 100%;
}

.footer {
  font-size: 14px;
  bottom: 0;
  text-align: center;
  color: #f1948a;
  width: 100%;
  height: 60px;
  padding-bottom: 15px;
  margin-top: 15px;
  background-color: #fffcf6;
}

.main-left {
  display: flex;
  flex-direction: column;
  // display: 1;
  width: 85%;
}
.main-right {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  width: 280px;
  margin-left: 10px;
}
.right-box0 {
  margin-bottom: 40px;
}
.right-box1 {
  display: flex;
  flex-direction: column;
}
.avatar {
  width: 120px;
  height: 120px;
  margin: 0 0 30px 60px;
}
.home-main-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.tag-box {
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: stretch;
  text-align: center;
}
.Title-tag {
  font-size: 20px;
  font-weight: bold;
  // font-family: 'Caveat', cursive;
  font-family: "Poppins", sans-serif;
}
.tag-item {
  margin: 5px 0;
}
.contact-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0 20px 20px;
}
.contact-details {
  margin: 0 20px 20px 0;
  text-decoration: none;
  font-size: 18px;
  color: #16a085;
}
#contact-icon {
  margin-right: 5px;
}
.right-box2 {
  margin-top: 10px;
}
</style>
