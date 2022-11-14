<template>
  <div class="home-body">
    <div class="home-body-box">
      <Header></Header>
      <!-- main -->
      <div class="home-main-box">
        <div class="main-left">
          <p class="cat-title">Category: Life</p>
          <div class="article-content">
            <div class="article-header">Article 1 Header</div>
            <el-divider class="article-divider" />
            <div class="article-item">
              <div>Article contenxxxxxxxxxxxxxxxt</div>
              <el-button text
                >Read more
                <el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
            <div class="article-item">
              <div>
                <el-icon><Calendar /></el-icon>
                2022-06-19
              </div>
              <el-icon size="small" class="art-del-btn">
                <Delete />
              </el-icon>
            </div>
          </div>
          <div class="article-content">
            <div class="article-header">Article 2 Header</div>
            <el-divider class="article-divider" />
            <div class="article-item">
              <div>Article contenxxxxxxxxxxxxxxxt</div>
              <el-button text
                >Read more
                <el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
            <div class="article-item">
              <div>
                <el-icon><Calendar /></el-icon>
                2022-06-19
              </div>
              <el-icon size="small" class="art-del-btn">
                <Delete />
              </el-icon>
            </div>
          </div>
          <div class="article-content">
            <div class="article-header">Article 3 Header</div>
            <el-divider class="article-divider" />
            <div class="article-item">
              <div>Article contenxxxxxxxxxxxxxxxt</div>
              <el-button text
                >Read more
                <el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
            <div class="article-item">
              <div>
                <el-icon><Calendar /></el-icon>
                2022-06-19
              </div>
              <el-icon size="small" class="art-del-btn">
                <Delete />
              </el-icon>
            </div>
          </div>
          <div class="article-content">
            <div class="article-header">Article 4 Header</div>
            <el-divider class="article-divider" />
            <div class="article-item">
              <div>Article contenxxxxxxxxxxxxxxxt</div>
              <el-button text
                >Read more
                <el-icon><ArrowRight /></el-icon>
              </el-button>
            </div>
            <div class="article-item">
              <div>
                <el-icon><Calendar /></el-icon>
                2022-06-19
              </div>
              <el-icon size="small" class="art-del-btn">
                <Delete />
              </el-icon>
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

</template>

<script setup>
import {
  Delete,
  Calendar,
  ArrowRight,
} from "@element-plus/icons-vue";
import Header from "../components/Header.vue"

</script>

<style lang="scss">
.home-body {
  background-color: #fffcf6;
  width: 100%;
  height: 100%;
}

.home-body-box {
  margin: 0 100px;
}
.footer {
  font-size: 14px;
  bottom: 0;
  text-align: center;
  color: #f1948a;
  width: 100%;
  padding-bottom: 15px;
  margin-top: 15px;
  background-color: #fffcf6;
}
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
  color:#16a085;
  margin-bottom: 10px;
  font-size: 20px;
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
.art-del-btn {
  margin-right: 12px;
  color: #5f6a6a;
}
.main-left {
  display: flex;
  flex-direction: column;
  width: 85%;
}
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
  font-family: 'Caveat', cursive;
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
