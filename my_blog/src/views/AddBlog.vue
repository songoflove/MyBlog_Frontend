<template>
  <div class="home-body">
    <div class="home-body-box">
      <Header></Header>
      <!-- main -->
      <div class="home-main-box">
        <div class="main-left">
          <div class="article-content">
            <el-form
              :model="addForm"
              label-width="120px"
              :rules="blogRules"
              ref="addFormRef"
            >
              <el-form-item label="Title" prop="title">
                <el-input v-model="addForm.title" />
              </el-form-item>
              <el-form-item label="Summary" prop="summary">
                <el-input v-model="addForm.summary" type="textarea" />
              </el-form-item>
              <el-form-item label="Content" prop="content">
                <el-input v-model="addForm.content" type="textarea" />
              </el-form-item>
              <el-form-item label="Category" prop="categoryName">
                <el-input v-model="addForm.categoryName" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">Done</el-button>
                <el-button>Cancel</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="main-right">
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
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <!-- <el-divider class="footer-divider" /> -->
      <p>MIT Licensed | Copyright &copy; Nicole, 2022 ~ present</p>
    </div>
  </div>
  <!-- addor area -->
  <!-- <addor></addor> -->
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'

const { proxy } = getCurrentInstance();
const router = useRouter();
const api = {
  add: "/articles/add"
}

const addFormRef = ref();
const addForm = reactive({});

const blogRules = reactive({
  title: [
    { required: true, message: "Please input title" },
    { min: 1, max: 50, message: "Length should be 1 to 50", trigger: "blur" },
  ],
  summary: [
    {
      required: true,
      message: "Please input summary",
    },
    {
      min: 10,
      max: 200,
      message: "Length should be 6 to 200",
      trigger: "blur",
    },
  ],
  content: [
    {
      required: true,
      message: "Please input content",
    },
    { min: 10, message: "Length should be over 10", trigger: "blur" },
  ],
});

const onSubmit = () => {
  addFormRef.value.validate(async (valid) => {
    if(!valid) {
      return
    }
    let params = {
      title: addForm.title,
      summary: addForm.summary,
      content: addForm.content,
      categoryName: addForm.categoryName
    }
    let result = await proxy.Request({
      url: api.add,
      params: params,
      errorCallback: () => {
        changeCheckCode();
      }
    })
    if (result.code != 200) {
      return;
    }
    // proxy.message.success("登录成功");
    setTimeout(() => {
      router.push("/")
    }, 1500);
  })
};
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

// main-box-left
.article-content {
  border: none;
  background-color: #fcf3cf;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.main-left {
  display: flex;
  flex-direction: column;
  width: 85%;
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
  justify-content: space-between;
  margin-top: 15px;
}
.icon-item-box {
  display: flex;
  align-items: center;
}
// main-box-right
.main-right {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  width: 280px;
  margin-left: 10px;
}
.right-box1 {
  display: flex;
  flex-direction: column;
}
.Title-tag {
  font-size: 20px;
  font-family: "Caveat", cursive;
  font-weight: 500;
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
</style>
