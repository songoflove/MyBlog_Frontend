<template>
  <div class="home-body">
    <div class="home-body-box">
      <Header></Header>
      <!-- main -->
      <div class="home-main-box">
        <div class="main-left">
          <div class="article-content" :model="detailsList">
            <div class="article-header">{{ detailsList.title }}</div>
            <el-divider class="article-divider" />
            <div class="article-item">
              {{ detailsList.content }}
            </div>
            <div class="icon-item">
              <div class="icon-item-box">
                <div class="article-icon">
                  <el-icon><Calendar /></el-icon>
                  <span class="icon-text">{{
                    detailsList.createdDate.substring(0, 10)
                  }}</span>
                </div>
                <div class="article-icon">
                  <el-icon><Collection /></el-icon>
                  <span class="icon-text">Life</span>
                </div>
              </div>
              <div class="icon-item-box">
                <div class="article-icon">
                  <el-button type="success" text @click="dialog = true"
                    >Edit</el-button
                  >
                </div>
                <div class="article-icon">
                  <el-button type="info" text @click="deleteArticle"
                    >Delete</el-button
                  >
                </div>
              </div>
            </div>
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
  <el-drawer
    ref="drawerRef"
    v-model="dialog"
    title="Edit Article"
    :before-close="handleClose"
    direction="ltr"
    custom-class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <el-form
        :model="form"
        label-width="120px"
        :rules="blogRules"
        ref="editFormRef"
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Summary" prop="summary">
          <el-input v-model="form.summary" type="textarea" />
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item label="Category" prop="categoryName">
          <el-input v-model="form.categoryName" />
        </el-form-item>
      </el-form>
      <div class="demo-drawer__footer">
        <el-button @click="cancelForm">Cancel</el-button>
        <el-button type="primary" :loading="loading" @click="editArticle">Submit</el-button>
      </div>
    </div>
  </el-drawer>

  <!-- <el-dialog
    v-model="dialogVisible"
    title="Delete"
    width="30%"
  >
    <span>Are you sure to delete this article?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteArticle" >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog> -->
</template>

<script setup>
import { Calendar } from "@element-plus/icons-vue";
import { reactive, ref, getCurrentInstance } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";

import { useRoute } from "vue-router";
const { proxy } = getCurrentInstance();
const route = useRoute();
const form = reactive({});
const editFormRef = ref();

// let dialogVisible = ref(false)

const detailsList = reactive({});
let id = route.params.id;

const api = {
  viewDetails: "/articles/details/",
  delete: "/articles/delete/",
  "edit": "/articles/edit"
};

const viewDetails = async () => {
  let result = await proxy.Request({
    url: api.viewDetails + id,
    errorCallback: () => {
      changeCheckCode();
    },
  });
  if (result.code != 200) {
    return;
  }
  detailsList.title = result.data.title;
  detailsList.content = result.data.content;
  detailsList.createdDate = result.data.createdDate;
  form.title = result.data.title
  form.content = result.data.content;
  form.summary = result.data.summary;
  console.log(form.title)
};

viewDetails();

// const handleClose = (() => {
//   console.log(0)
//   ElMessageBox.confirm('Are you sure to delete this article?')
//     .then(() => {
//       deleteArticle()
//     })
//     .catch(() => {
//       // catch error
//     })
// })

const deleteArticle = async () => {
  console.log(1);
  // dialogVisible = false
  let result = await proxy.Request({
    url: api.delete + id,
    errorCallback: () => {
      changeCheckCode();
    },
  });
  if (result.code != 200) {
    return;
  }
  console.log(2);
  setTimeout(() => {
    router.push("/");
  }, 1500);
};

//edit
const blogRules = reactive({
  title: [
    { required: true, message: "Please input title" },
    { min: 1, max: 30, message: "Length should be 1 to 30", trigger: "blur" },
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

const formLabelWidth = "80px";
let timer;

const dialog = ref(false);
const loading = ref(false);

const editArticle = async () => {
  editFormRef.value.validate(async (valid) => {
    if(!valid) {
      return
    }
    let params = {
      title: form.title,
      summary: form.summary,
      content: form.content
    }
    let result = await proxy.Request({
      url: api.edit,
      params: params,
      errorCallback: () => {
        changeCheckCode();
      }
    })
    if (result.code != 2001) {
      return;
    }
    setTimeout(() => {
      router.push("/")
    }, 1500);
  })
};

// const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClick = () => {
  // drawerRef.value!.close()
};

const handleClose = (done) => {
  if (loading.value) {
    return;
  }
  console.log("close")
  ElMessageBox.confirm("Do you want to submit?")
    .then(() => {
      editArticle()
      loading.value = true;
      timer = setTimeout(() => {
        done();
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false;
        }, 400);
      }, 2000);
    })
    .catch(() => {
      // catch error
    });
};

const cancelForm = () => {
  loading.value = false;
  dialog.value = false;
  clearTimeout(timer);
};
</script>

<style lang="scss">
.home-body {
  position: relative;
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
  padding-bottom: 15px;
  margin-top: 15px;
}

// main-box-left
.article-content {
  border: 1px dashed #b6e2a1;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.cat-title {
  font-family: "Fredoka One", cursive;
  color: #16a085;
  margin-bottom: 10px;
  font-size: 20px;
}
.article-item {
  margin-top: 10px;
}
.article-header {
  font-size: 22px;
  font-weight: bold;
}
.article-divider {
  margin: 12px 0;
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
