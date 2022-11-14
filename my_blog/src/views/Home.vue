<template>
  <div class="home-body">
    <div class="home-body-box">
      <!-- header -->
      <div class="header-bar">
        <div class="header-bar-item">
          <h1>Nicole's Blog</h1>
          <h3>こんにちは~</h3>
        </div>
        <div class="header-bar-item">
          <el-button type="warning" round @click="addBlog">
            <el-icon style="vertical-align: middle">
              <Edit />
            </el-icon>
            <span style="vertical-align: middle"> New Blog </span>
          </el-button>
        </div>
      </div>
      <hr />
      <div class="navigation-bar">
        <a href="" class="nav-text">HOME</a>
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
        <a href="" class="nav-text">ABOUT ME</a>
      </div>
      <hr />
      <!-- main -->
      <div class="home-main-box">
        <div class="main-left">
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
            <span class="Title-tag">FOLLOW ME</span>
            <div class="contact-links">
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-instagram"></i>Instagram</a
              >
              <a
                href=""
                target="_blank"
                class="contact-details"
                id="profile-link"
              >
                <i class="fa fa-github"></i>Github</a
              >
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-twitter"></i>Twitter</a
              >
              <a href="" target="_blank" class="contact-details">
                <i class="fa fa-at"></i>Email</a
              >
            </div>
          </div>
          <div class="right-box2">
            <span class="Title-tag">Tags</span>
            <div class="tag-box">
              <el-button class="tag-item" round>Java</el-button>
              <el-button class="tag-item" round>Javascript</el-button>
              <el-button class="tag-item" round>Html</el-button>
              <el-button class="tag-item" round>CSS</el-button>
              <el-button class="tag-item" round>Freelance</el-button>
              <el-button class="tag-item" round>Japanese</el-button>
              <el-button class="tag-item" round>English</el-button>
              <el-button class="tag-item" round>Books</el-button>
              <el-button class="tag-item" round>Movies</el-button>
              <el-button class="tag-item" round>Food</el-button>
              <el-button class="tag-item" round>Work</el-button>
              <el-button class="tag-item" round>Bank</el-button>
              <el-button class="tag-item" round>Relationship</el-button>
              <el-button class="tag-item" round>Diary</el-button>
              <el-button class="tag-item" round>Gym</el-button>
              <el-button class="tag-item" round>Health</el-button>
              <el-button class="tag-item" round>Shopping</el-button>
              <el-button class="tag-item" round>Coupon</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <!-- todo -->
      <div class="footer">
        <el-divider />
        <p>MIT Licensed | Copyright &copy; Nicole, 2022-present</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Delete,
  Calendar,
  ArrowRight,
  ArrowDown,
} from "@element-plus/icons-vue";
</script>
<style lang="scss">
.home-body {
  background-color: #fffcf6;
  width: 100%;
  height: calc(100vh);
}
h1 {
  font-family: 'Ma Shan Zheng', cursive;
  margin: 10px 0 0 0;
}
h3 {
  font-family: 'Poppins', sans-serif;
}
.home-body-box {
  margin: 0 100px;
}
.navigation-bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
  position: sticky;
}
.nav-text {
  text-decoration: none;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  align-items: center;
}
.footer {
  position: fixed;
  font-size: 14px;
  bottom: 0;
  text-align: center;
  color: #f1948a;
  width: 100%;
  // background-color: #fffcf6;
}
.header-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.article-content {
  border: 1px dashed #f1948a;
  margin: 5px 0;
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
.art-del-btn {
  margin-right: 12px;
  color: #5F6A6A;
}
.main-left {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.main-right {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 20px;
  width: 250px;
  margin-left: 10px;
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
  font-family: "Poppins", sans-serif;
}
.tag-item {
  margin: 5px 0;
}
.contact-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0;
}
.contact-details {
  margin: 0 20px 20px 0;
  text-decoration: none;
  font-size: 18px;
}
.right-box2 {
  margin-top: 20px;
}
</style>
