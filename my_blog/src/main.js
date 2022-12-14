import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import Header from "./components/Header.vue";
import BlogItem from "./components/BlogItem.vue";
import Editor from "./components/Editor.vue";
import ArticleCard from "./components/ArticleCard.vue";

// import cookies from 'vue-cookies'

// Vue.prototype.$cookies=cookies

import Request from './utils/Request'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.component("Header",Header)
app.component("BlogItem",BlogItem)
app.component("Editor",Editor)
app.component("ArticleCard",ArticleCard)


app.config.globalProperties.Request = Request

app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
