<template>
    <div>
      <el-card>
        <div class="article-title-wrapper" style="text-align: center;">
          <h1 class="article-title">
            <a :href="'/articles/details/'+article.id" class="article-title-link">{{article.title}}</a>
          </h1>
          <div class="article-detail">
            <el-icon><Calendar /></el-icon>
            <span>{{article.createdDate}}</span>
            <el-divider direction="vertical"></el-divider>
            <el-icon><View /></el-icon>
            <span>{{article.viewCounts}}</span>
            <el-divider direction="vertical"></el-divider>
            <el-icon><CollectionTag /></el-icon>
            <span>{{article.ctgr}}</span>
          </div>
        </div>
        <div class="article-dscr">
          <p>{{article.summary}}</p>
        </div>
        <div class="readMore">
          <a :href="'/articles/details/'+article.id" class="readMore-btn">Read More »</a>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArticleCard",
    components: {},
    props: {
      article: {
        type: Object,
        default: () => {
          return {
            id: 0,
            title: "",
            summary: "",
            date: "",
            read: 0,
            ctgr: ""
          };
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .article-title {
    font-size: 1.3em;
    font-weight: 400;
  }
  a,
  a:link,
  a:visited,
  a:focus {
    text-decoration: none;
    color: #000;
  }
  .article-title-link {
    position: relative;
    /* text-align: center; */
  }
  .article-title-link::after {
    content: "";
    width: 0;
    height: 3px;
    background: black;
    position: absolute;
    top: 100%;
    left: 50%;
    transition: all 0.5s;
  }
  .article-title-link:hover::after {
    left: 0%;
    width: 100%;
  }
  .article-detail {
    padding: 5px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 0.7em;
  }
  .readMore {
    margin-top: 40px;
    text-align: center;
  }
  .readMore-btn {
    background: #fff;
    border: 2px solid #555;
    border-radius: 2px;
    color: #555;
    display: inline-block;
    line-height: 2;
    padding: 0 20px;
    text-decoration: none;
    transition-property: background-color;
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    font-size: 0.875em;
  }
  .readMore-btn:hover{
    background: rgb(22, 22, 22);
    color: #fff;
  }
  </style>